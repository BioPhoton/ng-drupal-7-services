;(function() {
    'use strict';
    
    /**
	 *  Constants for UserResourceModules
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	 */
	var UserResourceConstant =  {

		// NOTE: This is the default alias aliases for your system resources defined in Drupal
		resourcePath : 'user',
		//actions of user resource
		actions : {
			//following actions are defined over their request method (GET, POST, PUT, DELETE) so they are commented out
			//retrieve 				: 'retrieve',
			//create 				: 'create',
			//update 				: 'update',
			//delete 				: 'delete',
		    //index 				: 'index',
			//
			login 					: 'login',
			logout 					: 'logout',
			token 					: 'token',
			request_new_password 	: 'request_new_password',
			register 				: 'register',
			cancel 					: 'cancel',
			password_reset 			: 'password_reset',
			resend_welcome_email 	: 'resend_welcome_email'
		}

	};

	/**
	 * User Constant Modules
	 */
	angular
	    .module('d7-services.resources.user.resourceConstant', [])
	    .constant("UserResourceConstant", UserResourceConstant);
	
})();
