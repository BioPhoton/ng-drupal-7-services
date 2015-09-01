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
    AuthenticationService.$inject = ['$rootScope'
                                     , 'DrupalApiConstant'
                                     , 'AuthenticationServiceConstant'
                                     , 'AuthenticationChannel'
                                     , 'SystemResource'
                                     , 'UserResource'
                                     , '$localstorage'
                                     , 'ipCookie'
                                     , '$http'
                                    , '$q'
                                     ];
    
    /**
     * ApiAuthService
     * 
     * This service mirrors the Drupal system resource of the services 3.x module.
     * To use this you have to set following line in your Drupal CORS module settings
     * your_api_endpoint/system/*|<mirror>|POST|Content-Type,Authorization|true
     * 
    **/
	/** @ngInject */
	function AuthenticationService(  $rootScope,    
			DrupalApiConstant
			 ,   AuthenticationServiceConstant
			 ,   AuthenticationChannel
			 ,   SystemResource
			 ,   UserResource
			 ,   $localstorage
			 ,   ipCookie
			 ,   $http
			 ,   $q
			 ) { 
		
		//needed to use the $on method in the authentications channel
		//http://stackoverflow.com/questions/16477123/how-do-i-use-on-in-a-service-in-angular
		var scope = $rootScope.$new(); // or $new(true) if you want an isolate scope
		
		var userIsConected = false,
			currentUser	 = AuthenticationServiceConstant.anonymousUser,
			// time of last successful connection in ms
			lastConnectTime  = 0,
			sessionCookieOptions =  { 	
				domain 			: DrupalApiConstant.drupal_instance,
				path			: '/',
				expires			: DrupalApiConstant.session_expiration_time,
				expirationUnit 	: DrupalApiConstant.session_expiration_unite,
			};
		
		
		//setup and return service        
        var authenticationService = {
        		storeTokenData	: storeTokenData,
    			deleteTokenData	: deleteTokenData,
    			refreshToken	: refreshToken,
    			
    			storeSessionData	: storeSessionData,
    			deleteSessionData	: deleteSessionData,
    			
    			getConnectionState	: getConnectionState,
    			setConnectionState	: setConnectionState,
    			
    			getCurrentUser	: getCurrentUser,
    			setCurrentUser	: setCurrentUser,
    			
    			refreshConnection	: refreshConnection,
    			getLastConnectTime	: getLastConnectTime,
    			
    			login	: login,
    			logout	: logout
        };
        
        return authenticationService;

////////////
      
		/**
		 * storeTokenData
		 * 
		 * Stores the auth token in local storage and the http header.
		 * 
		 * @params  {String} newToken the new auth token
		 * 
		 * 
		**/
		function storeTokenData(newToken) {
			newToken = (newToken)?newToken:false;
		
			if(newToken !== false) { 
				
				if( newToken != $localstorage.getItem('token', false) ) {
					$localstorage.setItem('token', newToken);
				}
			
				$http.defaults.headers.common.Authorization = newToken;
				$http.defaults.headers.common['X-CSRF-TOKEN'] = newToken;

			}
			else { $localstorage.removeItem('token'); }
			 
		};

		/**
		 * deleteTokenData
		 * 
		 * Deletes the auth token in local storage and the http header
		 * 
		**/
		function deleteTokenData() {
				$localstorage.removeItem('token');

				$http.defaults.headers.common.Authorization = undefined;
				$http.defaults.headers.common['X-CSRF-TOKEN'] = undefined;
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
		 * getCurrentUser
		 * 
		 * Returns the current authenticated user
		 * 
		 * @return {Object} user as JSON
		 * 
		**/
		function getCurrentUser() {
			return currentUser;
		};

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
		function getConnectionState() {
			return userIsConected;
		};
		
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
		 * refreshToken
		 * 
		 * fetches the token from local storage
		 * if token is not stored in local storage this function fetches a new token from server
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
					function(token) {
						 defer.resolve(token);
					},
					//refreshTokenFromServer error
					function() {
						defer.reject(false);
					}
				);
			} 
			//if refreshTokenFromLocalStorage was possible
			else { defer.resolve(localStorageToken); }
			
			return defer.promise;
		};
		
		/**
		 * refreshTokenFromLocalStorage
		 * 
		 * if token is stored in local storage set token value to http headers
		 * this function is needed when lounging app to check if user has token already 
		 * 
		 * @return {Boolean||String} new token
		 *  
		**/
		function refreshTokenFromLocalStorage() {
			//load token from local storage or flase
			var token = $localstorage.getItem('token', false);
			
			if (token) {
				storeTokenData(token);
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
					 storeTokenData(token);
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
					            function (data) {
					            	
					              var user_id = data.user.uid;
					              
					              setLastConnectTime(Date.now());
					              storeSessionData(data);
					              
					              if (user_id == 0) { 
					            	  setConnectionState(false); 
					            	  setCurrentUser(data.user);
					            	  defer.resolve(data.user);
					              }
					              else {  
					            	  setConnectionState(true);
					            	  //we have to use UserResource.retrieve() to get full data of current user
						              UserResource.retrieve(data.user.uid).then(
						            		  function(user) {
						            			  setCurrentUser(user);
						            			  defer.resolve(user);
						            		  },
						            		  function(data) {
						            			  console.log(); 
						            			  defer.reject(data);
						            		  }
						              );
					              }

					            },
					            //SystemResource.connect error
					            function(data) {
					            	setConnectionState(false);
					            	defer.reject(data);
					            }
							);
					},
					//initToken error
					function(error) {
						defer.reject(error);
					}
			);
		
			return defer.promise;
		};
		
		/**
		 * storeSessionData
		 * 
		 * Stores the session data in the local storage and cookie
		 *  
		**/
		function storeSessionData(data) { 
			//store local storage data
			$localstorage.setItem('sessid', data.sessid);
			$localstorage.setItem('session_name', data.session_name);			
			//store session cookies
			ipCookie(data.session_name, data.sessid, sessionCookieOptions);
			//set headers
			$http.defaults.withCredentials = true;

		};
		
		/**
		 * deleteSessionData
		 * 
		 * Deletes the session data in the local storage and cookie
		 *  
		**/
		function deleteSessionData() {
			console.log(sessionCookieOptions); 
			//delete session cookies
			ipCookie.remove($localstorage.getItem('session_name'), sessionCookieOptions.path);
			//remove headers
			$http.defaults.withCredentials = false;
			//delete local storage data
			$localstorage.removeItem('sessid');
			$localstorage.removeItem('session_name');
		};
		
		/**
		 * login
		 * 
		 * Uses the login request of the user resource and stores session data on success
		 * 
		**/
		function login(loginData) {
			var defer = $q.defer();
			
			UserResource
				.login(loginData)
					.then(
							//success
							function (responseData) {
								storeTokenData(responseData.token);
								storeSessionData(responseData);
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
  
	};

})();