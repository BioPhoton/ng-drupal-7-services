;(function() {
    'use strict';

	/**
	 * User Resource Modules
	 * 
	 * see sourcecode in services/resources/user_resource.inc
	**/
    angular.module('d7-services.resources.user.resource', ['d7-services.commons.configurations', 'd7-services.resources.user.resourceConstant', 'd7-services.resources.user.channel', 'd7-services.commons.baseResource'])
    
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
    UserResource.$inject = ['$http', 'BaseResource', 'DrupalApiConstant', 'UserResourceConstant', 'UserChannel'];
    
	/** @ngInject */
	function UserResource($http, BaseResource, DrupalApiConstant, UserResourceConstant, UserChannel) { 
		
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
    		return BaseResource.retrieve( retrievePath,UserChannel.pubRetrieveConfirmed,  UserChannel.pubRetrieveFailed);
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
	    function create(data) {
	    	
	    	var createPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath;

    		var createdata 	= {
				name : data.name,
				pass : data.pass,
				mail : data.mail
			}
    		
    		//optional data
    		
    		if(data.status || data.status == 0) {
    			createdata.status = (data.status)?1:0;
    		}
    		
    		if(data.notify || data.notify == 0) {
    			createdata.notify = (data.notify)?1:0;
    		}

    		if (data.roles) {
    			createdata.roles = BaseResource.preparePostData(data.roles, 'array_of_values');
    		}
    		
    		return BaseResource.create( createdata, createPath,  UserChannel.pubCreateConfirmed, UserChannel.pubCreateFailed);

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
	    function update(data) {
	    	
	    	var updatePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + data.uid;
	    	
	    	delete data.uid;
    		var updateData 	= data;
    		
    		return BaseResource.update( updateData, updatePath, UserChannel.pubUpdateConfirmed, UserChannel.pubUpdateFailed);

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
	    function _delete(data) {
	    	var deletePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + data.uid
	    	return BaseResource.delete(deletePath, UserChannel.pubDeleteConfirmed, UserChannel.pubDeleteFailed);
	    };
	    
	    /**
	     * index
	     * 
	     * List all users
	     * 
	     * Method: GET
		 * Url: http://drupal_instance/api_endpoint/user
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
	    function index(data) {
	    	var indexPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/';
	    	return BaseResource.index(data, indexPath,UserChannel.pubIndexConfirmed,  UserChannel.pubIndexFailed);
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
		function register(data) {
			//undefined check
	    	data = (data)?data:{};

			 var registerPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + UserResourceConstant.actions.register,
			 	 requestConfig = {
		 			method: 'POST',
					url : registerPath,
					data : data
		 	 	  };
		 
		 	return BaseResource.request(requestConfig, UserChannel.pubRegisterConfirmed, UserChannel.pubRegisterFailed);
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
		function resendWelcomeEmail(data) {
			//undefined check
	    	data = (data)?data:{};

			 var resendWelcomeEmailPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + data.uid  + '/' + UserResourceConstant.actions.resend_welcome_email,
			 	 requestConfig = {
		 			method: 'POST',
					url : resendWelcomeEmailPath
		 	 	  };
		 
		 	return BaseResource.request(requestConfig, UserChannel.pubResendWelcomeEmailConfirmed, UserChannel.pubResendWelcomeEmailFailed);
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
		function cancel(data) {
			//undefined check
	    	data = (data)?data:{};

			 var cancelPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + data.uid  + '/' + UserResourceConstant.actions.cancel,
			 	 requestConfig = {
		 			method: 'POST',
					url : cancelPath
		 	 	  };
		 
		 	return BaseResource.request(requestConfig, UserChannel.pubCancelConfirmed, UserChannel.pubCancelFailed);
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
		function passwordReset(data) {
			//undefined check
	    	data = (data)?data:{};

			 var passwordResetPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + data.uid  + '/' + UserResourceConstant.actions.password_reset,
			 	 requestConfig = {
		 			method: 'POST',
					url : passwordResetPath
		 	 	  };
		 
		 	return BaseResource.request(requestConfig, UserChannel.pubPasswordResetConfirmed, UserChannel.pubPasswordResetFailed);
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
		function requestNewPassword(data) {
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
		 
		 	return BaseResource.request(requestConfig, UserChannel.pubRequestNewPasswordConfirmed, UserChannel.pubRequestNewPasswordFailed);
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

							username : data.username,
							password : data.password
						},
				};
	    	
			return BaseResource.request(requestConfig, UserChannel.pubLoginConfirmed, UserChannel.pubLoginFailed);

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
			 
			return BaseResource.request(requestConfig, UserChannel.pubLogoutConfirmed, UserChannel.pubLogoutFailed);

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
			var  pathToToken = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + UserResourceConstant.actions.token,
				 requestConfig = {
			     	url		: pathToToken,
			     	method	: 'POST'
				};
			
			return BaseResource.request(requestConfig,UserChannel.pubTokenConfirmed,  UserChannel.pubTokenFailed);

		};
					
	};

})();