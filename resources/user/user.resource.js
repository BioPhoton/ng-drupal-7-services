(function() {
    'use strict';

	/**
	 * User Resource Modules
	**/
    angular.module('ngDrupal7Services-3_x.resources.user.resource', ['ngDrupal7Services-3_x.commons.configurations', 'ngDrupal7Services-3_x.resources.user.resourceConstant', 'ngDrupal7Services-3_x.resources.user.channel'])
    
    /**
	 * UserResource
	 * 
	 * This service mirrors the Drupal user resource of the services 3.x module.
	 * To use this you have to set following line in your Drupal CORS module settings
	 * your_api_endpoint/user/*|<mirror>|POST|Content-Type,Authorization|true
	 * 
	**/
    .factory('UserResource', UserResource);

    /**
	 * Manually identify dependencies for minification-safe code
	 * 
	**/
    UserResource.$inject = ['$http', '$q', 'DrupalApiConstant', 'UserResourceConstant', 'UserChannel'];
    
	/** @ngInject */
	function UserResource($http, $q, DrupalApiConstant, UserResourceConstant, UserChannel) { 
		
		//setup and return service            	
        var userResourceService = {
        	retrieve 	: retrieve,
        	login 		: login,
        	logout 		: logout,
        	token		: token
        };
        
        return userResourceService;

        ////////////
        
        /**
		 * retrieve
		 * 
		 * Returns the user fetched by uid
		 * 
		 * Method: POST 
		 * Url: http://drupal_instance/api_endpoint/user/{UID}
		 * 
		 * @params  {Object} data The requests data
		 * 			@key 	{Integer} uid The uid of the user you want to retrieve, required:true, source:post body
		 * 
		 * @return 	{Promise}
		 * 
		**/
    	function retrieve( data ) {
    		//undefined check
	    	data = (data)?data:{};
	    	var errors = [],
			defer = $q.defer();		
	    	
	    	//if not given
	    	if(!data.uid) { errors.push('Param uid is required.'); }
	    	
	    	if(errors.length != 0) {
	    		UserChannel.pubUserRetrieveFailed(errors);
	    		defer.reject(errors); 
	    		return defer.promise;
	    	};
			
    		var retrievePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/'+data.uid,
	    		requestConfig = {
    				url 	: retrievePath,
	    			method 	:'GET'
	    		};
	    	
	    	$http(requestConfig)
		    	.success(function(responseData, status, headers, config){
		    		UserChannel.pubUserRetrieveConfirmed(responseData);
		    		defer.resolve(responseData);
		    	})
		    	.error(function(data, status, headers, config){
		    		UserChannel.pubUserRetrieveFailed(data);
		    		defer.reject(data);
		    	});
	
	    	return defer.promise;
	    };
	    
		/**
		 * login
		 * 
		 * Login a user for a new session
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/user/login
		 * 
		 * @params  {Object} data The requests data
		 * 			@key 	{String} username A valid username, required:true, source:post body
		 * 			@key 	{String} password A valid password, required:true, source:post body
		 * 
		 * @return 	{Promise} 
		 * 
		**/	
	    function login( data ) {
			//undefined check
	    	data = (data)?data:{};
	   
			var errors = [],
				defer = $q.defer();		
			
			//if not given
	    	if(!data.username) { errors.push('Param username is required.'); }
	    	if(!data.password) { errors.push('Param password is required.'); }
	    	
	    	if(errors.length != 0) {
	    		UserChannel.pubUserLoginFailed(errors);
	    		defer.reject(errors); 
	    		return defer.promise;
	    	};	
						
	    	
			var pathToLogin = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + UserResourceConstant.actions.login,
				requestConfig = {
						url : pathToLogin,
						method :'POST',
						data : {
								"username" : data.username,
								"password" : data.password
						},
				};
	    						
			$http(requestConfig)
				.success(function (responseData, status, headers, config) {
					 UserChannel.pubUserLoginConfirmed(responseData);
		             defer.resolve(responseData);
		         })
		         .error(function (data, status, headers, config) {
		        	 UserChannel.pubUserLoginFailed(data);
		        	 defer.reject(data);
		         });
			
			return defer.promise;
		};
		
		/**
		 * logout
		 * 
		 * Logout a user session
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/user/logout
		 * 
		 * @return 	{Promise}
		 * 
		**/	
		function logout() {
			 
			var pathToLogout = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + UserResourceConstant.actions.logout,
			 	requestConfig = {
			 			url 	: pathToLogout,
			 			method	: 'POST'
				},
				defer = $q.defer();
			 
			 $http(requestConfig)
	         .success(function (responseData, status, headers, config) {
	           UserChannel.pubUserLogoutConfirmed(responseData);
	           defer.resolve(responseData);
	         })
	         .error(function (data, status, headers, config) {
	           UserChannel.pubUserLogoutFailed(data);
	           defer.reject(data);
	         });
	         
	         return defer.promise;
		};
		
		/**
		 * token
		 * 
		 * Returns the CSRF token of the current session.
		 * 
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/user/token
		 * 
		 * @return 	{Promise}
		 * 
		**/
		function token() {
			
			var  defer = $q.defer(),
		         pathToToken = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + UserResourceConstant.actions.token,
				 requestConfig = {
			     	url		: pathToToken,
			     	method	: 'POST'
				};
				
		    $http(requestConfig)
		         .success(function (responseData) {
		        	 UserChannel.pubUserTokenConfirmed(responseData);
		        	 defer.resolve(responseData);
		         })
		         .error(function (data) {
		        	 UserChannel.pubUserTokenFailed(data);
		        	 defer.reject(data);
		         });

		    return defer.promise;
		};
					
	};

})();