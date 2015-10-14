;(function() {
    'use strict';

    /**
	 *  Constants for UserChannel
	 *  
	 *  NOTE: if you want to change this constant do this in a config section of angular
	 */
	var UserChannelConstant =  {
	 		// Retrieve action
 			user_retrieveConfirmed 				: 'event:drupal-user-retrieveConfirmed',
 			user_retrieveFailed  				: 'event:drupal-user-retrieveFailed',
 			// Create action
 			user_createConfirmed				: 'event:drupal-user-createConfirmed',
 			user_createFailed  					: 'event:drupal-user-createFailed',
 			// Update action
 			user_updateConfirmed				: 'event:drupal-user-updateConfirmed',
 			user_updateFailed  					: 'event:drupal-user-updateFailed',
 			// Delete action	
 			user_deleteConfirmed				: 'event:drupal-user-deleteConfirmed',
 			user_deleteFailed  					: 'event:drupal-user-deleteFailed',
 			// Index action
 			user_indexConfirmed  				: 'event:drupal-user-indexConfirmed',
 			user_indexFailed  					: 'event:drupal-user-indexFailed',
 			//Request new password action
 			user_requestNewPasswordConfirmed  	: 'event:drupal-user-requestNewPasswordConfirmed',
 			user_requestNewPasswordFailed  		: 'event:drupal-user-requestNewPasswordFailed',
 			//Cancel action
 			user_cancelConfirmed  				: 'event:drupal-user-cancelConfirmed',
 			user_cancelFailed  					: 'event:drupal-user-cancelFailed',
 			//Password Reset
 			user_passwordResetConfirmed  		: 'event:drupal-user-passwordResetConfirmed',
 			user_passwordResetFailed  			: 'event:drupal-user-passwordResetFailed',
 			//Resend Welcome Email
 			user_resendWelcomeEmailConfirmed  	: 'event:drupal-user-resendWelcomeEmailConfirmed',
 			user_resendWelcomeEmailFailed  		: 'event:drupal-user-resendWelcomeEmailFailed',
 			// Token action
 			user_tokenConfirmed  				: 'event:drupal-user-tokenConfirmed',
 			user_tokenFailed  					: 'event:drupal-user-tokenFailed',
 			// Register action
 			user_registerConfirmed  			: 'event:drupal-user-registerConfirmed',
 			user_registerFailed  				: 'event:drupal-user-registerFailed',
 			// Login action
 			user_loginConfirmed  				: 'event:drupal-user-loginConfirmed',
 			user_loginFailed  					: 'event:drupal-user-loginFailed',
 			// Logout action
 			user_logoutConfirmed  				: 'event:drupal-user-logoutConfirmed',
 			user_logoutFailed  					: 'event:drupal-user-logoutFailed'
	 		
	};
    
	/**
	 * User Channel Constant
	 */
	angular
	    .module('ngDrupal7Services-3_x.resources.user.channelConstant', [])
	    .constant("UserChannelConstant", UserChannelConstant);

})();
