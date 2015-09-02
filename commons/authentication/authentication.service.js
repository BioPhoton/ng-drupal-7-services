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
    		  ,'ngDrupal7Services-3_x.commons.localstorage'
    		  ,'ipCookie'
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
    AuthenticationService.$inject = ['$rootScope', 'DrupalApiConstant', 'AuthenticationServiceConstant', 'AuthenticationChannel', 'SystemResource', 'UserResource', '$localstorage', 'ipCookie', '$http', '$q'];
    
    /**
     * ApiAuthService
     * 
     * This service mirrors the Drupal system resource of the services 3.x module.
     * To use this you have to set following line in your Drupal CORS module settings
     * your_api_endpoint/system/*|<mirror>|POST|Content-Type,Authorization|true
     * 
    **/
	/** @ngInject */
	function AuthenticationService( $rootScope, DrupalApiConstant, AuthenticationServiceConstant, AuthenticationChannel, SystemResource, UserResource, $localstorage, ipCookie, $http, $q ) { 
		
		//needed to use the $on method in the authentications channel
		//http://stackoverflow.com/questions/16477123/how-do-i-use-on-in-a-service-in-angular
		var scope = $rootScope.$new(); // or $new(true) if you want an isolate scope
		
		var userIsConected = false,
			currentUser	 = AuthenticationServiceConstant.anonymousUser,
			// time of last successful connection in ms
			lastConnectTime  = 0,
			authenticationHeaders = null,
			sessionCookieOptions =  { 	
				domain 			: DrupalApiConstant.drupal_instance,
				path			: '/',
				expires			: DrupalApiConstant.session_expiration_time,
				expirationUnit 	: DrupalApiConstant.session_expiration_unite,
			};
		
		
		//setup and return service        
        var authenticationService = {
        		login	: login,
    			logout	: logout,
    			refreshConnection	: refreshConnection,
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
			var defer = $q.defer();	
			
			UserResource
				.login(loginData)
					.then(
							//success
							function (responseData) {
								saveTokenData(responseData.token);
								saveSessionData(responseData);
								setConnectionState(true);
								setCurrentUser(responseData.user);
								
								AuthenticationChannel.pubAuthenticationLoginConfirmed(responseData);
								defer.resolve(responseData); 
							},
							//error
							function (errors) {
								AuthenticationChannel.pubAuthenticationLoginFailed(errors);
								defer.reject(errors); 
							}
					);
			
			return defer.promise;
			
		};
		
		/**
		 * logout
		 * 
		 * Uses the logout request of the user resource and deletes session data on success
		 * 
		**/
		function logout() {
			var defer = $q.defer();
			
			UserResource
				.logout()
					.then(
						//success
						function (responseData) {
							deleteTokenData();
							deleteSessionData();
							setConnectionState(false);
							setCurrentUser(AuthenticationServiceConstant.anonymousUser);
							//@TODO remove
							refreshConnection();
							
							AuthenticationChannel.pubAuthenticationLogoutConfirmed(responseData);
							defer.resolve(responseData); 
							
						},
						//error
						function (errors) {
							AuthenticationChannel.pubAuthenticationLogoutFailed(errors);
							defer.reject(errors); 
						}
					);
		
			return defer.promise;
			
		};
		
		/**
		 * refreshConnection
		 * 
		 * @TODO add explanation of workflow
		 * 
		 * @return {Promise} with new token 
		 *  
		**/
		function refreshConnection() {
			var defer = $q.defer();
			
			//check token
			refreshToken().then(
					//initToken success
					function(token) {	
						SystemResource.connect().then(
								//SystemResource.connect success
					            function (responseData) {
					            	
					              var user_id = data.user.uid;
					              
					              setLastConnectTime(Date.now());
					              saveSessionData(data);
					              
					              if (user_id == 0) { setConnectionState(false); }
					              else { setConnectionState(true); }
					              
					              AuthenticationChannel.pubAuthenticationRefreshConnectionConfirmed(responseData);
				            	  defer.resolve(data.user);

					            },
					            //SystemResource.connect error
					            function(errors) {
					            	setConnectionState(false);
					            	
					            	AuthenticationChannel.pubAuthenticationRefreshConnectionFailed(errors);
					            	defer.reject(errors);
					            }
							);
					},
					//initToken error
					function(error) {
						AuthenticationChannel.pubAuthenticationRefreshConnectionFailed(errors);
						defer.reject(error);
					}
			);
		
			return defer.promise;
		};
		
		
		/**
		 * refreshToken
		 * 
		 * fetches the token from local storage
		 * if token is not saved in local storage this function fetches a new token from server
		 * 
		 * @return {Promise} with new token 
		**/
		function refreshToken() {
			var defer = $q.defer();
			
			//if refreshTokenFromLocalStorage is not possible
			var localStorageToken = refreshTokenFromLocalStorage();
			if(!localStorageToken) {
				
				//refresh token from server
				refreshTokenFromServer().then(
					//refreshTokenFromServer success
					function(token) { defer.resolve(token); },
					//refreshTokenFromServer error
					function() { defer.reject(false); }
				);
				
			} 
			//if refreshTokenFromLocalStorage was possible
			else { defer.resolve(localStorageToken); }
			
			return defer.promise;
		}
		
		/**
		 * refreshTokenFromLocalStorage
		 * 
		 * if token is saved in local storage set token value to http headers
		 * this function is needed when lounging app to check if user has token already 
		 * 
		 * @return {Boolean||String} new token
		 *  
		**/
		function refreshTokenFromLocalStorage() {
			//load token from local storage or flase
			var token = $localstorage.getItem('token', false);
			
			if (token) {
				saveTokenData(token);
				return token
			}
			
			return false;
		};
		
		/**
		 * refreshTokenFromServer
		 * 
		 * request a new token from server => api_endpoint/user/token
		 * 
		 * @return {Promise} with new token 
		 *  
		**/
		function refreshTokenFromServer() {
			var defer = $q.defer();
			
			UserResource.token().then(
				//UserResource.token success
				function(token){
					 saveTokenData(token);
					 defer.resolve(token);
				},
				//UserResource.token error
				function(data) {
					defer.reject(false);
				}
			);

			return defer.promise;
		};
		
		/**
		 * deleteTokenData
		 * 
		 * Deletes the auth token in local storage and the http header
		 * 
		**/
		function deleteTokenData() {
				$localstorage.removeItem('token');
				authenticationHeaders = null;
		};
        
		/**
		 * saveTokenData
		 * 
		 * Stores the auth token in local storage and the http header.
		 * 
		 * @params  {String} newToken the new auth token
		 * 
		**/
		function saveTokenData(newToken) {
			newToken = (newToken)?newToken:false;
		
			if(newToken !== false) { 
				
				if( newToken != $localstorage.getItem('token', false) ) {
					$localstorage.setItem('token', newToken);
				}
				
				setAuthenticationHeaders(newToken); 

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
		function getLastConnectTime() {
			return lastConnectTime;
		};
		
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
		
		/**
		 * getConnectionState
		 * 
		 * Returns the current state of connection
		 * 
		 * @return {Boolean} userIsConected
		 * 
		**/
		function getConnectionState() { return userIsConected; };
		
		/**
		 * setConnectionState
		 * 
		 * Sets the current state of connection as boolean
		 * 
		**/
		function setConnectionState(newState) {
	        if(newState != userIsConected) {
	          userIsConected = newState;
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
        function getAuthenticationHeaders() {
        	return authenticationHeaders;
        };
        
        /**
		 * setAuthenticationHeaders
		 * 
		 * Sets the authentication header as obj
		 * 
		 * 
		**/
        function setAuthenticationHeaders(newToken) {
        	authenticationHeaders = { 
					'Authorization' : newToken,
					'X-CSRF-TOKEN'  : newToken
			};
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
 
	};

})();