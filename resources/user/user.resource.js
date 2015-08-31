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
			connect 		: connect,
			get_variable 	: get_variable,
			set_variable 	: set_variable,
			del_variable 	: del_variable
        };
        
        return userResourceService;

        ////////////
        
        /**
		 * retrieve
		 * 
		 * Returns the user fetched by uid
		 * 
		 * Method: POST 
		 * Url: http://drupal_instance/api_endpoint/user/connect
		 * Headers: Content-Type:application/json
		 * 
		 * @params  {Object} data the requests data
		 * 			@key 	{String} uid The uid of the user you want to retrieve, required:true, source:post body
		 * 
		 * @return 	{Promise}
		 * 
		**/
        /*
    	 * 
    	 * 
    	 * Retrieve a user
    	 * Method: GET
    	 * Url: http://drupal_instance/api_endpoint/user/{UID}
    	 * Headers: Content-Type:application/json
    	 * 
    	 * @param 	{Integer} uid The uid of the user to retrieve., required:true, source:path
    	 * 
    	 * @return 	{Promise} 
    	 * 
    	 */
    	function retrieve( data ) {
    		var retrievePath = drupalApiConfig.drupal_instance + drupalApiConfig.api_endpoint + UserResourceConfig.resourcePath + '/'+data.uid,
    		defer = $q.defer(),
    		requestConfig = {
    			method :'GET',
    			url : retrievePath
    		},
    		errors = [];
	    		
	    	//if not given
	    	if(!data.uid) { errors.push('Param uid is required.'); }
	    	
	    	if(errors.length != 0) {
	    		UserResourceChannel.publishUserRetrieveFailed(errors);
	    		defer.reject(errors); 
	    		return defer.promise;
	    	};
	    	
	    	$http(requestConfig)
	    	.success(function(user, status, headers, config){
	    		UserResourceChannel.publishUserRetrieveConfirmed(user);
	    		defer.resolve(user);
	    	})
	    	.error(function(data, status, headers, config){
	    		UserResourceChannel.publishUserRetrieveFailed(data);
	    		defer.reject(data);
	    	});
	
	    	return defer.promise;
	    };
					
	};

})();