(function() {
    'use strict';

    /**
     * Drupal API authentication service
    **/
    angular.module('ngDrupal7Services-3_x.commons.authentication.service', 
    		[ 'ngDrupal7Services-3_x.commons.configurations'
    		  ,'ngDrupal7Services-3_x.commons.authentication.serviceConstant'
    		  ,'ngDrupal7Services-3_x.commons.authentication.channel'
    		  ,'ngDrupal7Services-3_x.resources.system.resource'
    		  ,'ngDrupal7Services-3_x.resources.user.resource'
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
	
		var userIsConected = false,
			currentUser	 = AuthenticationServiceConstant.anonymousUser,
			// time of last successful connection in ms
			lastConnectTime  = 0,
			//auth token
			authenticationHeaders = null,
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
        		login	: login,
    			logout	: logout,
    			refreshConnection			: refreshConnection,
    			getLastConnectTime			: getLastConnectTime,
    			getConnectionState			: getConnectionState,
    			getAuthenticationHeaders 	: getAuthenticationHeaders
        };
        
        return authenticationService;

        ////////////
        
		
		/**
		 * login
		 * 
		 * Uses the login request of the user resource and saves session data on success
		 * 
		**/
		function login(loginData) {
			
			return UserResource
					.login(loginData)
						.then(
							//success
							function (responseData, status, headers, config) {
								
								setAuthenticationHeaders(responseData.data.token);
								setCookies(responseData.data);
								
								setConnectionState(true);
								setLastConnectTime(Date.now());
								setCurrentUser(responseData.data.user);
								
								AuthenticationChannel.pubAuthenticationLoginConfirmed(responseData.data);
								return responseData.data; 
							},
							//error
							function (responseError, status, headers, config) {
								AuthenticationChannel.pubAuthenticationLoginFailed(responseError.data);
								return responseError.data; 
							}
						);
			
		};
		
		/**
		 * logout
		 * 
		 * Uses the logout request of the user resource and deletes session data on success
		 * 
		**/
		function logout() {
			
			return UserResource
					.logout()
						.then(
							//success
							function (responseData) {
								delAuthenticationHeaders();
								delCookies();
								setConnectionState(false);
								setCurrentUser(AuthenticationServiceConstant.anonymousUser);
	
								AuthenticationChannel.pubAuthenticationLogoutConfirmed(responseData.data);
								return responseData.data; 
								
							},
							//error
							function (responseError) {
								AuthenticationChannel.pubAuthenticationLogoutFailed(responseError.data);
								return responseError.data; 
							}
						);
			
		};
		
		/**
		 * refreshConnection
		 * 
		 * 
		 * @return {Promise} with new token 
		 *  
		**/
		function refreshConnection() {
			
			//check token
			return refreshTokenFromServer()
					.then(
						//initToken success
						function(responseData) {	
							return tryConnect();
						},
						
						//initToken error
						function(responseError) {
							AuthenticationChannel.pubAuthenticationRefreshConnectionFailed(responseError.data);
							return responseError.data;
						}
					);
		
		};
		
		function tryConnect() {
			
			 return SystemResource
			 			.connect()
						 	.then(
								//SystemResource.connect success
					            function (responseData) {
					            	
					              var user_id = responseData.data.uid;
					              
					              setLastConnectTime(Date.now());
					              setCookies(responseData.data);
					              
					              if (user_id == 0) { setConnectionState(false); }
					              else { setConnectionState(true); }
					              
					              AuthenticationChannel.pubAuthenticationRefreshConnectionConfirmed(responseData.data);
				            	  return responseData.data;
			
					            },
					            
					            //SystemResource.connect error
					            function(responseError) {
					            	setConnectionState(false);
					            	
					            	AuthenticationChannel.pubAuthenticationRefreshConnectionFailed(responseError.data);
					            	return errors;
					            }
							);
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
						.then(
							//UserResource.token success
							function(responseData){
								console.log(responseData.data); 
								setAuthenticationHeaders(responseData.data.token);
								return responseData.data;
							},
							
							//UserResource.token error
							function(responseError) {
								return false;
							}
						);

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
	      	    AuthenticationChannel.pubAuthenticationCurrentUserUpdated(newUser);

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
	        if(newState != userIsConected) {
	          userIsConected = (newState)?true:false;
	      	  AuthenticationChannel.pubAuthenticationConnectionStateUpdated(userIsConected);
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
        function setCookies(data) {		
        	//save data in service
        	sessid = data.sessid;
			session_name = data.session_name;
			
			//store session cookies
			//$cookies[data.session_name] = data.sessid;
			$cookies.put(data.session_name, data.sessid, sessionCookieOptions);	
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
			//$cookies.remove(session_name, sessionCookieOptions.path);
			$cookies.remove(session_name, sessionCookieOptions.path);
        };
		
		/**
		 * getConnectionState
		 * 
		 * Returns the current authentication state as boolean
		 * 
		 * @return {Boolean} state as boolesan
		 * 
		**/
		function getConnectionState() { return userIsConected; };
		
		/**
		 * setConnectionState
		 * 
		 * Sets the current authentication state 
		 * 
		**/
		function setConnectionState(newState) {
			
			newState = (newState)?true:false;
			
	        if(newState != userIsConected) {
	          userIsConected = newState;
	      	  AuthenticationChannel.pubAuthenticationConnectionStateUpdated(userIsConected);
	        }
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
