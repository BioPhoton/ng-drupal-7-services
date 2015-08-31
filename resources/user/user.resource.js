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
        	login 		: login
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
    		var retrievePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/'+data.uid,
    		defer = $q.defer(),
    		requestConfig = {
    			method :'GET',
    			url : retrievePath
    		},
    		errors = [];
	    		
	    	//if not given
	    	if(!data.uid) { errors.push('Param uid is required.'); }
	    	
	    	if(errors.length != 0) {
	    		UserChannel.pubUserRetrieveFailed(errors);
	    		defer.reject(errors); 
	    		return defer.promise;
	    	};
	    	
	    	$http(requestConfig)
		    	.success(function(user, status, headers, config){
		    		UserChannel.pubUserRetrieveConfirmed(user);
		    		defer.resolve(user);
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
		 * Headers: Content-Type:application/json
		 * 
		 * @params  {Object} data The requests data
		 * 			@key 	{String} username A valid username, required:true, source:post body
		 * 			@key 	{String} password A valid password, required:true, source:post body
		 * 
		 * @return 	{Promise} 
		 * 
		**/	
		 var login = function( data ) {
						
			var pathToLogin = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + UserResourceConstant.actions.login;
				requestConfig = {
						method :'POST',
						url : pathToLogin,
						 headers: {
							//@TODO use the format of DrupalApiConstant
							"Accept" 		: "application/json",
							"Content-Type"	: "application/json",
						 },
						 data : {
								"username" : data.username,
								"password" : data.password
						},
				},
				defer = $q.defer(),
				errors = [];
	    		
	    	//if not given
	    	if(!data.username) { errors.push('Param username is required.'); }
	    	if(!data.password) { errors.push('Param password is required.'); }
	    	
	    	if(errors.length != 0) {
	    		UserChannel.pubUserLoginFailed(errors);
	    		defer.reject(errors); 
	    		return defer.promise;
	    	};
				
			$http(requestConfig)
				.success(function (data, status, headers, config) {
					 UserResourceChannel.publishUserLoginConfirmed(data);
		             defer.resolve(data);
		         })
		         .error(function (data, status, headers, config) {
		        	 UserResourceChannel.publishUserLoginFailed(data);
		        	 defer.reject(data);
		         });
			
			return defer.promise;
		};
					
	};

})();