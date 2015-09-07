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
    		create 		: create,
    		//update 				: 'update',
    		//delete 				: 'delete',
    	    //index 				: 'index',
        	login 		: login,
        	logout 		: logout,
        	token		: token,
        	
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
	    	var errors = [];		
	    	
	    	//if not given
	    	if(!data.uid) { errors.push('Param uid is required.'); }
	    	
	    	if(errors.length != 0) {
	    		UserChannel.pubUserRetrieveFailed(errors);
	    		return $q.reject(errors);
	    	};
			
    		var retrievePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/'+data.uid,
	    		requestConfig = {
    				url 	: retrievePath,
	    			method 	:'GET'
	    		};
	    	
    		return $http(requestConfig)
		    	.success(function(responseData, status, headers, config){
		    		UserChannel.pubUserRetrieveConfirmed(responseData);
		    		return responseData;
		    	})
		    	.error(function(responseError, status, headers, config){
		    		UserChannel.pubUserRetrieveFailed(responseError);
		    		return responseError;
		    	});

	    };
	    
	    /**
	     * create
	     * 
	     * Returns the data of a user fetched by uid.
	     * 
	     * Method: POST
	     * Url: http://drupal_instance/api_endpoint/user
	     * 
	     * @params  {Object} data the users accout data
	     * 			@key 	{String} uid The uid of the user to retrieve, required:true, source:post body
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function create(data){
	    	
	    	//undefined check
	    	data = (data)?data:{};
	    	
	    	//validation of params
	    	var errors = [];	

	    	//basic validation
	    	//if not given
	    	if(!data) { errors.push('Param data is required.'); }
	    	//if is not an array
	    	if( data instanceof Array ) { errors.push('Param data has to be an array.'); }
	    	
	    	
	    	if(errors.length != 0) {
	    		UserChannel.pubUserCreateFailed(errors);
	    		return $q.reject(errors);
	    	}
	    	
	    	var createPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + UserResourceConstant.actions.create,
	    		requestConfig = {
	    				url 	: createPath,
	    				method 	:'POST',
	    				data 	: {
	    					name : data.username,
	    					pass : data.password,
	    					email : data.mail,
	    				}
	    		};
	    	
	    	//set default if given
	    	if(data.default) {
	    		requestConfig.data['default'] = data.default;
	    	}

	    	return $http(requestConfig)
	    		.success(function(responseData, status, headers, config){
	    			UserChannel.pubUserCreateConfirmed(responseData);
	    			return responseData;
	    		})
	    		.error(function(responseError, status, headers, config){
	    			UserChannel.pubUserCreateFailed(responseError);
	    			return responseError;
	    		});

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
	   
			var errors = [];		
			
			//if not given
	    	if(!data.username) { errors.push('Param username is required.'); }
	    	if(!data.password) { errors.push('Param password is required.'); }
	    	
	    	if(errors.length != 0) {
	    		UserChannel.pubUserLoginFailed(errors);
	    		return $q.reject(errors);
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
	    						
			return $http(requestConfig)
				.success(function (responseData, status, headers, config) {
					 UserChannel.pubUserLoginConfirmed(responseData);
		             return responseData;
		         })
		         .error(function (responseError, status, headers, config) {
		        	 UserChannel.pubUserLoginFailed(responseError);
		        	 return responseError;
		         });
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
				};
			 
			 return $http(requestConfig)
	         .success(function (responseData, status, headers, config) {
	           UserChannel.pubUserLogoutConfirmed(responseData);
	           return responseData;
	         })
	         .error(function (responseError, status, headers, config) {
	           UserChannel.pubUserLogoutFailed(responseError);
	           return responseError;
	         });
	       
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
				
		    return $http(requestConfig)
		         .success(function (responseData, status, headers, config) {
		        	 UserChannel.pubUserTokenConfirmed(responseData);
		        	 return responseData;
		         })
		         .error(function (responseError, status, headers, config) {
		        	 UserChannel.pubUserTokenFailed(responseError);
		        	 return responseError;
		         });

		};
					
	};

})();