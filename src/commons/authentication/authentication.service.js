(function() {
    'use strict';

    /**
     * Drupal API authentication service
    **/
    angular.module('d7-services.commons.authentication.service', 
    		[ 'd7-services.commons.configurations'
    		  ,'d7-services.commons.authentication.serviceConstant'
    		  ,'d7-services.commons.authentication.channel'
    		  ,'d7-services.resources.system.resource'
    		  ,'d7-services.resources.user.resource'
    		  ,'ngCookies'
    		 ])
    
    /**
	 * AuthenticationService
	 * 
	 * This service mirrors the Drupal system resource of the services 3.x module.
	 * To use this you have to set following line in your Drupal CORS module settings
	 * your_api_endpoint/system/*|<mirror>|POST|Content-Type,Authorization|true
	 * 
	**/
    .factory('AuthenticationService', AuthenticationService);
   
    /**
	 * Manually identify dependencies for minification-safe code
	 * 
	**/
    AuthenticationService.$inject = ['$rootScope', 'DrupalApiConstant', 'AuthenticationServiceConstant', 'AuthenticationChannel', 'SystemResource', 'UserResource', '$cookies', '$http', '$q'];
    
    /**
     * ApiAuthService
     * 
     * This service mirrors the Drupal system resource of the services 3.x module.
     * To use this you have to set following line in your Drupal CORS module settings
     * your_api_endpoint/system/*|<mirror>|POST|Content-Type,Authorization|true
     * 
    **/
	/** @ngInject */
	function AuthenticationService( $rootScope, DrupalApiConstant, AuthenticationServiceConstant, AuthenticationChannel, SystemResource, UserResource, $cookies, $http, $q ) { 
	
			//we set this to undefined because we wan't to detect the first connection check 
		var userIsConected,
			currentUser	 = AuthenticationServiceConstant.anonymousUser,
			// time of last successful connection in ms
			lastConnectTime  = 0,
			//auth token rendered as Authentication headers
			authenticationHeaders,
			//session data
			sessid = null,
			session_name = null,
			sessionCookieOptions =  { 	
				domain 			: DrupalApiConstant.drupal_instance,
				path			: '/',
				//secure 			: false,
				//expires			: DrupalApiConstant.session_expiration_time,
				//expirationUnit 	: DrupalApiConstant.session_expiration_unite,
			};
		
		//setup and return service        
        var authenticationService = {
        		isUser			: isUser,
        		isAuthorized 	: isAuthorized,
        		login			: login,
    			logout			: logout,
    			refreshConnection			: refreshConnection,
    			getLastConnectTime			: getLastConnectTime,
    			getConnectionState			: getConnectionState,
    			getAuthenticationHeaders 	: getAuthenticationHeaders,
    			getCurrentUser				: getCurrentUser
        };
        
        return authenticationService;

        ////////////
        
        /**
         * isUser
         * 
         * @param {Object} user or uid The user objcet or uid
         * 
         * @returns {Boolean} true if uid is equal false if not
         * 
         */
        function isUser(userOrUid) {       	
			
			var currentUser = getCurrentUser();
			
			if(angular.isObject(userOrUid)) {
				if(userOrUid.uid == currentUser.uid) {
					return true;
				}
				return false;
			}

			
			if(userOrUid == currentUser.uid) {
				return true;
			}
	   	     
	        return false;
        };
        
        /**
         * isAuthorized
         * 
         * @param {Object} accessLevel The access level to check for
         * @param {Object} roles The role to check with. If roles is not gives the users roles will be taken
         * 
         * @returns {Boolean} true if authorized false if not
         * 
         */
        function isAuthorized(accessLevelRoles, userRoles) {       	
			var isGranted = false,
				currentUser = getCurrentUser();

			if(userRoles === undefined ) {
				userRoles = currentUser.roles; 
			}	
			
			//check by accessLevel and optional given roles
			if(accessLevelRoles == '*') { return true; }
			
			if(!angular.isArray(accessLevelRoles)) {
				return false;
			}
			
			for (var i = 0; i < accessLevelRoles.length; i++) {
				for (var prop in userRoles) {
					if(accessLevelRoles[i][prop] === userRoles[prop]) {
						 return true;
					}
				 }
			}
	   	     
	         return false;
        };
		
		/**
		 * login
		 * 
		 * Uses the login request of the user resource and saves session data on success
		 * 
		**/
		function login(loginData) {

			return UserResource
					.login(loginData)
						.success(function (responseData, status, headers, config) {
							setAuthenticationHeaders(responseData.token);
							
							setLastConnectTime(Date.now());
							setConnectionState((responseData.user.uid === 0)?false:true)
							setCookies(responseData.sessid, responseData.session_name);
							setCurrentUser(responseData.user);
										
							AuthenticationChannel.pubLoginConfirmed(responseData);
						})
						.error(function (responseError, status, headers, config) {
							AuthenticationChannel.pubLoginFailed(responseError);
						});
			
		};
		
		/**
		 * logout
		 * 
		 * Uses the logout request of the user resource and deletes session data on success
		 * 
		 * @return {Promise} requests promise
		**/
		function logout() {
			
			return UserResource
					.logout()
						.success(function (responseData, status, headers, config) {
							delAuthenticationHeaders();
							delCookies();
							setConnectionState(false);
							setCurrentUser(AuthenticationServiceConstant.anonymousUser);

							AuthenticationChannel.pubLogoutConfirmed(responseData);
						})
						.error(function (responseError, status, headers, config) {
							AuthenticationChannel.pubLogoutFailed(responseError);
						});
						
		};
		
		/**
		 * refreshConnection
		 * 
		 * @TODO write doc
		 * 
		 * @return {Promise} with new token 
		 *  
		**/
		function refreshConnection() {
			var defer = $q.defer();

			//check token
			refreshTokenFromServer()
				.then(
				function(response) {
					//check connection
					return tryConnect()
						.success(function(responseData, status, headers, config) {
							AuthenticationChannel.pubRefreshConnectionConfirmed(responseData);
							defer.resolve(responseData.data);
						})
				}
			)
				.catch(
				function(responseError) {
					console.log('error', responseError);
					AuthenticationChannel.pubRefreshConnectionFailed(responseError);
					//offline fix
					setLastConnectTime(1);
					defer.resolve(responseError);
				}
			);
			 
			return defer.promise; 
						
		};
		
		/**
		 * tryConnect
		 * 
		 * @TODO write doc
		 * 
		 * @returns
		 */
		function tryConnect() {
			
			 return SystemResource
			 			.connect()
				 			.success( function (responseData, status, headers, config) {
					             setLastConnectTime(Date.now());
					             setCookies(responseData.sessid, responseData.session_name);
					             setConnectionState((responseData.user.uid === 0)?false:true)
					             setCurrentUser(responseData.user);
					              
					             AuthenticationChannel.pubTryConnectConfirmed(responseData);  
				            })
				            .error(function(responseError, status, headers, config) {
				            	AuthenticationChannel.pubTryConnectFailed(responseError);
				            });
						 	
		}
		
		/**
		 * refreshTokenFromServer
		 * 
		 * request a new token from server => api_endpoint/user/token
		 * 
		 * @return {Promise} with new token 
		 *  
		**/
		function refreshTokenFromServer() {

			return UserResource
					.token()
						.success(function(responseData, status, headers, config) {
									setAuthenticationHeaders(responseData.token);
								})
						.error(function(responseError) {
							//
						});	

		};
		
		
		/**
		 * getCurrentUser
		 * 
		 * Returns the current authenticated user
		 * 
		 * @return {Object} user as JSON
		 * 
		**/
		function getCurrentUser() { return currentUser; };

		/**
		 * setCurrentUser
		 * 
		 * Sets the current loggend in user
		 * 
		**/
		function setCurrentUser(newUser) {
			if(currentUser != newUser) {
	        	currentUser = newUser;
	      	    AuthenticationChannel.pubCurrentUserUpdated(newUser);
	        }
		};
		
		/**
		 * getConnectionState
		 * 
		 * Returns the current state of connection
		 * 
		 * @return {Boolean} userIsConected
		 * 
		**/
		function getConnectionState() { return (userIsConected)?true:false; };
	
		/**
		 * setConnectionState
		 * 
		 * Sets the current state of connection as boolean
		 * 
		**/
		function setConnectionState(newState) {
			newState = (newState)?true:false;
			
	        if(newState !== userIsConected) {
	          userIsConected = newState;
	      	  AuthenticationChannel.pubConnectionStateUpdated(userIsConected);
	        }
		};
		
		/**
		 * getAuthenticationHeaders
		 * 
		 * Returns the saved authentication header obj
		 * 
		 * @return  {Object} authentication header
		 * 
		**/	
        function getAuthenticationHeaders() { return authenticationHeaders; };


        /**
		 * setAuthenticationHeaders
		 * 
		 * Sets the authentication header as obj if different from actual value.
		 * After this action the commons.authentication.AuthenticationHeaderInterceptor add's Authorisation and X-CSRF-Token headers to request
		 * 
		 * @param {String} X-CSRF-TOKEN value
		 * 
		**/
        function setAuthenticationHeaders(newToken) {
       
        	var newData = { 
					'Authorization' : newToken,
					'X-CSRF-TOKEN'  : newToken
			};
        	
        	//if header data exist check if they are different.
        	//if they are different set them
        	if(authenticationHeaders) {
        		if(authenticationHeaders.Authorization != newToken) {
        			authenticationHeaders = newData;
        		}
        	} 
        	//if header data not exist set them
        	else {
        		authenticationHeaders = newData;
        	}
        	
        };
        
        /**
		 * delAuthenticationHeaders
		 * 
		 * Deletes the authentication headers from service
		 * After this action the http intercepter will not add Authorisation and X-CSRF-Token headers to request
		 * 
		**/
        function delAuthenticationHeaders() {
        	 authenticationHeaders = null;
        };
        
        /**
		 * getCookies
		 * 
		 * Returns the saved cookie data
		 * 
		 * @return  {String} cookie data
		 * 
		**/
        function getCookies() {
        	return session_name+"="+sessid;
        };

        /**
		 * setCookies
		 * 
		 * Saves the session id and name in service and cookies
		 * 
		 * 
		**/
        function setCookies(newSessid, newSession_name) {	
        	//save data in service
        	sessid = newSessid;
			session_name = newSession_name;
			
			//store session cookies
			//$cookies[data.session_name] = data.sessid;
			$cookies.put(newSession_name, newSessid, sessionCookieOptions);	
        };
        
        /**
		 * delCookies
		 * 
		 * Deletes the cookie from service and cookies 
		 * 
		**/
        function delCookies() {
        	//delete data in service
        	sessid = null;
			session_name = null;
			
        	//delete session cookies
			$cookies.remove(session_name, sessionCookieOptions.path);
        };
		
		/**
		 * getLastConnectTime
		 * 
		 * Returns the time of last successful connection in ms
		 * 
		 * @return time in ms
		 * 
		**/
		function getLastConnectTime() { return lastConnectTime; };
		
		/**
		 * setLastConnectTime
		 * 
		 * Sets the time of last successful connection in ms
		 * 
		**/
		function setLastConnectTime(newTimeInMs) {
			var newTimeInMs = parseInt(newTimeInMs);
			if(newTimeInMs === NaN || newTimeInMs < 0) return;
			lastConnectTime = newTimeInMs;
		};
		

	};

})();
