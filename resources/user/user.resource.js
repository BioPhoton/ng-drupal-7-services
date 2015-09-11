;(function() {
    'use strict';

	/**
	 * User Resource Modules
	 * 
	 * see sourcecode in services/resources/user_resource.inc
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
        	//CRUD operations
        	retrieve 	: retrieve,
    		create 		: create,
    		update 		: update,
    		delete 		: _delete,
    	    index 		: index,
    	    //Actions
    	    token		: token,
    		register 	: register,
    		resendWelcomeEmail 	: resendWelcomeEmail,
    		cancel 		: cancel,
    		login 		: login,
        	logout 		: logout,
        	passwordReset 		: passwordReset,
        	requestNewPassword 	: requestNewPassword
        	
        };
        
        return userResourceService;

        ////////////
        
        /**
		 * retrieve
		 * 
		 * Retrieve a user
		 * 
		 * Method: GET 
		 * Url: http://drupal_instance/api_endpoint/user/{UID}
		 * 
		 * @params  {Object} data The requests data
		 * 			@key 	{Integer} uid UID of the user to be loaded, required:true, source:path
		 * 
		 * @return 	{Promise} A user object
		 * 
		**/
    	function retrieve(data) {
    		var retrievePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + data.uid;
    		return baseResource.retrieve( retrievePath, UserChannel.pubRetrieveFailed, UserChannel.pubRetrieveConfirmed);
	    };
	    
	    /**
	     * create
	     * 
	     * Create a new user.
	     * This function uses drupal_form_submit() and as such expects all input to match
	     * the submitting form in question.
	     * 
	     * Method: POST
	     * Url: http://drupal_instance/api_endpoint/user
	     * 
	     * @params  {Object} data The accout of the user to create, required:true, source:post body
	     * 
	     *  The $account object should contain, at minimum, the following properties:
		 *     - {String} name  The user name
		 *     - {String} mail  The email address
		 *     - {String} pass  The plain text unencrypted password
		 *
		 *  These properties can be passed but are optional
		 *     - {Integer} status Value 0 for blocked, otherwise will be active by default
		 *     - {Integer} notify Value 1 to notify user of new account, will not notify by default
		 *
		 *  Roles can be passed in a roles property which is an associative
		 *  array formatted with '<role id>' => '<role id>', not including the authenticated user role, which is given by default.
	     * 
	     * @return 	{Promise} The user object of the newly created user.
	     *
	    **/
	    function create(data){
	    	
	    	var createPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath;

    		var createdata 	= {
				name : data.name,
				pass : data.pass,
				mail : data.mail
			}
    		
    		if(data.status) { createdata.status = (data.status)?1:0; }
    		if(data.notify) { createdata.notify = (data.notify)?1:0; }
    		
    		return baseResource.create( createdata, createPath, UserChannel.pubCreateFailed, UserChannel.pubCreateConfirmed);

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
				mail : data.mail
			}
    		
    		return baseResource.update( updateData, updatePath, UserChannel.pubUpdateFailed, UserChannel.pubUpdateConfirmed);

	    };
	    
	    /**
	     * delete
	     * 
	     * Delete a user
	     * 
	     * Method: DELETE
	     * Url: http://drupal_instance/api_endpoint/user/{UID}
	     * 
	     * @params  {Object} data the requests data
	     * 			@key 	{Integer} uid The id of the user to delete, required:true, source:path
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function _delete(data){
	    	
	    	var deletePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + data.uid
	    	
	    	return baseResource.delete(deletePath, UserChannel.pubDeleteFailed, UserChannel.pubDeleteConfirmed);
	    };
	    
	    /**
	     * index
	     * 
	     * List all users
	     * 
	     * Method: GET
		 * Url: http://drupal_instance/api_endpoint/user
		 * Headers: Content-Type:application/json
		 * 
		 * @params  {Object} data the requests data
		 * 		@key 	{Integer} page The zero-based index of the page to get. defaults to 0., required:false, source:param
		 * 		@key 	{Integer} pagesize Number of records to get per page., required:false, source:param
		 * 		@key 	{String} fields The fields to get., required:false, source:param
		 * 		@key 	{Array} parameters Parameters, required:false, source:param
		 * 		
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function index(data){
	    	var indexPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/';
	    	
	    	return baseResource.index(data, indexPath, UserChannel.pubIndexFailed, UserChannel.pubIndexConfirmed);
	    };
	    
	    /**
		 * register
		 * 
		 * register a user
		 * 
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/user/register
		 * 
		 * @param {Object} data The user object, required:true, source:post body
		 * 
		 * @return {Promise}
		 * 
		**/
		function register(data){
			//undefined check
	    	data = (data)?data:{};

			 var registerPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + UserResourceConstant.actions.register,
			 	 requestConfig = {
		 			method: 'POST',
					url : registerPath,
					data : data
		 	 	  };
		 
		 	return baseResource.request(requestConfig, UserChannel.pubRegisterFailed, UserChannel.pubRegisterConfirmed);
		};
		
		 
	    /**
		 * resendWelcomeEmail
		 * 
		 * Resend the welcome email of a user fetched by uid
		 * 
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/user/resend_welcome_email
		 * 
		 * @param {Object} data The user object, required:true, source:post body
		 * 
		 * @return {Promise}
		 * 
		**/
		function resendWelcomeEmail(data){
			//undefined check
	    	data = (data)?data:{};

			 var resendWelcomeEmailPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + data.uid  + '/' + UserResourceConstant.actions.resend_welcome_email,
			 	 requestConfig = {
		 			method: 'POST',
					url : resendWelcomeEmailPath
		 	 	  };
		 
		 	return baseResource.request(requestConfig, UserChannel.pubResendWelcomeEmailFailed, UserChannel.pubResendWelcomeEmailConfirmed);
		};
		
		/**
		 * cancel
		 * 
		 * Cancel a user
		 * 
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/user/cancel
		 * 
		 * @param {Object} data The user object, required:true, source:post body
		 * 
		 * @return {Promise}
		 * 
		**/
		function cancel(data){
			//undefined check
	    	data = (data)?data:{};

			 var cancelPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + data.uid  + '/' + UserResourceConstant.actions.cancel,
			 	 requestConfig = {
		 			method: 'POST',
					url : cancelPath
		 	 	  };
		 
		 	return baseResource.request(requestConfig, UserChannel.pubCancelFailed, UserChannel.pubCancelConfirmed);
		};
		
		/**
		 * PasswordReset
		 * 
		 * PasswordReset a user
		 * 
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/user/password_reset
		 * 
		 * @param {Object} data The user object, required:true, source:post body
		 * 
		 * @return {Promise}
		 * 
		**/
		function passwordReset(data){
			//undefined check
	    	data = (data)?data:{};

			 var passwordResetPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + data.uid  + '/' + UserResourceConstant.actions.password_reset,
			 	 requestConfig = {
		 			method: 'POST',
					url : passwordResetPath
		 	 	  };
		 
		 	return baseResource.request(requestConfig, UserChannel.pubPasswordResetFailed, UserChannel.pubPasswordResetConfirmed);
		};
		
		/**
		 * requestNewPassword
		 * 
		 * Request a new password, given a user name or e-mail address
		 * 
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/user/request_new_password
		 * 
		 * @param {Object} data The user object
		 * 			@key {String} name A valid user name or e-mail address, required:true, source:post body
		 * 
		 * 
		 * @return {Promise}
		 * 
		**/
		function requestNewPassword(data){
			//undefined check
	    	data = (data)?data:{};

			 var requestNewPasswordPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + data.uid  + '/' + UserResourceConstant.actions.request_new_password,
			 	 requestConfig = {
		 			method: 'POST',
					url : requestNewPasswordPath,
					data : {
						name : data.name
					}
		 	 	  };
		 
		 	return baseResource.request(requestConfig, UserChannel.pubRequestNewPasswordFailed, UserChannel.pubRequestNewPasswordConfirmed);
		};
	    
	    
		/**
		 * login
		 * 
		 * Login a user for a new session
		 * 
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
							//@TODO normalize the data over all requests (register name === login username) 
							username : data.username,
							password : data.password
						},
				};
	    	
			return baseResource.request(requestConfig, UserChannel.pubLoginFailed, UserChannel.pubLoginConfirmed);

		};
		
		/**
		 * logout
		 * 
		 * Logout a user session
		 * 
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
			 
			return baseResource.request(requestConfig, UserChannel.pubLogoutFailed, UserChannel.pubLogoutConfirmed);

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
			
			return baseResource.request(requestConfig, UserChannel.pubTokenFailed, UserChannel.pubTokenConfirmed);

		};
					
	};

})();