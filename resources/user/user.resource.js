(function() {
    'use strict';

	/**
	 * User Resource Modules
	**/
    angular.module('ngDrupal7Services-3_x.resources.user.resource', ['ngDrupal7Services-3_x.commons.configurations', 'ngDrupal7Services-3_x.resources.user.resourceConstant', 'ngDrupal7Services-3_x.resources.user.channel', 'ngDrupal7Services-3_x.commons.baseResource'])
    
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
    UserResource.$inject = ['$http', '$q', 'baseResource', 'DrupalApiConstant', 'UserResourceConstant', 'UserChannel'];
    
	/** @ngInject */
	function UserResource($http, $q, baseResource, DrupalApiConstant, UserResourceConstant, UserChannel) { 
		
		//setup and return service            	
        var userResourceService = {
        	//
        	retrieve 	: retrieve,
    		create 		: create,
    		update 		: update,
    		delete 		: _delete,
    	    index 		: index,
    	    //
    		register 	: register,
    		//resend_welcome_email 	: resend_welcome_email,
    		//cancel 					: cancel,
    		login 		: login,
        	logout 		: logout,
        	//password_reset 			: password_reset,
        	//request_new_password 	: request_new_password,
        	//
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
    	function retrieve(data) {

    		var retrievePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/'+data.uid;
    		
    		return baseResource.retrieve( retrievePath, UserChannel.pubUserRetrieveFailed, UserChannel.pubUserRetrieveConfirmed);
	    };
	    
	    /**
	     * create
	     * 
	     * Create a user.
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
	    	
	    	var createPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath;

    		var createdata 	= {
				name : data.name,
				pass : data.pass,
				mail : data.mail
			}
    		
    		return baseResource.create( createdata, createPath, UserChannel.pubUserCreateFailed, UserChannel.pubUserCreateConfirmed);

	    };
	        
	    /**
	     * update
	     * 
	     * Update a user
	     * 
	     * Method: PUT
	     * Url: http://drupal_instance/api_endpoint/user/{UID}
	     * 
	     * @params  {Object} data The requests data
	     * 			@key 	{Integer} uid Unique identifier for this user, required:true, source:path
	     * 			@key 	{Array}  data The user object with updated information, required:true, source:post body
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function update(data){
	    	
	    	var updatePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + data.uid;
	    	
	    	//@TODO check possible fields
    		var updateData 	= {
				name : data.name,
				mail : data.mail,
			}
    		
    		return baseResource.update( updateData, updatePath, UserChannel.pubUserUpdateFailed, UserChannel.pubUserUpdateConfirmed);

	    };
	    
	    /**
	     * delete
	     * 
	     * Delete a user
	     * 
	     * Method: POST
	     * Url: http://drupal_instance/api_endpoint/user/delete
	     * 
	     * @params  {Object} data the requests data
	     * 			@key 	{Integer} uid Unique identifier for this user, required:true, source:path
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function _delete(data){
	    	
	    	var deletePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + data.uid
	    	
	    	return baseResource.delete(deletePath, UserChannel.pubUserDeleteFailed, UserChannel.pubUserDeleteConfirmed);
	    };
	    
	    /**
	     * index
	     * 
	     * List all users
	     * Method: GET
		 * Url: http://drupal_instance/api_endpoint/user
		 * Headers: Content-Type:application/json
		 * 
		 * @params  {Object} data the requests data
		 * 		@key 	{Integer} page The zero-based index of the page to get. defaults to 0., required:false, source:param
		 * 		@key 	{Integer} pagesize Number of records to get per page., required:false, source:param
		 * 		@key 	{String} fields The fields to get., required:false, source:param
		 * 				uid,name,mail,theme,signature,signature_format,created,access,login,status,timezone,language,picture,init,data
		 * 		@key 	{Array} parameters Parameters, required:false, source:param
		 * 		
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function index(data){
	    	var indexPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/';
	    	
	    	return baseResource.index(data, indexPath, UserChannel.pubUserIndexFailed, UserChannel.pubUserIndexConfirmed);
	    };
	    
	    /**
		 * register
		 * 
		 * Register a user
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/user/register
		 * 
		 * @param {Object} data The user object, required:true, source:post body
		 * 
		 * @return {Promise}
		 * 
		**/
		var register = function(data){
			//undefined check
	    	data = (data)?data:{};

			 var registerPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + UserResourceConstant.actions.register;
		 	 	 requestConfig = {
		 			method: 'POST',
					url : registerPath,
					data : data
		 	 	  };
		 
		 	return baseResource.request(requestConfig, UserChannel.publishUserRegisterFailed, UserChannel.publishUserRegisterConfirmed);
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

			var pathToLogin = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + UserResourceConstant.actions.login,
				requestConfig = {
						url : pathToLogin,
						method :'POST',
						data : {
								username : data.username,
								password : data.password
						},
				};
	    	
			return baseResource.request(requestConfig, UserChannel.pubUserLoginFailed, UserChannel.pubUserLoginConfirmed);

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
			 
			return baseResource.request(requestConfig, UserChannel.pubUserLogoutFailed, UserChannel.pubUserLogoutConfirmed);

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
			
			return baseResource.request(requestConfig, UserChannel.pubUserTokenFailed, UserChannel.pubUserTokenConfirmed);

		};
					
	};

})();