;(function() {
    'use strict';

    /**
	 *  Constants for UserChannel
	 *  
	 *  NOTE: if you want to change this constant do this in a config section of angular
	 */
	var UserChannelConstant =  {
	 		// Retrieve action
 			retrieveConfirmed 				: 'event:drupal-user-retrieveConfirmed',
 			retrieveFailed  				: 'event:drupal-user-retrieveFailed',
 			// Create action
 			createConfirmed				: 'event:drupal-user-createConfirmed',
 			createFailed  					: 'event:drupal-user-createFailed',
 			// Update action
 			updateConfirmed				: 'event:drupal-user-updateConfirmed',
 			updateFailed  					: 'event:drupal-user-updateFailed',
 			// Delete action	
 			deleteConfirmed				: 'event:drupal-user-deleteConfirmed',
 			deleteFailed  					: 'event:drupal-user-deleteFailed',
 			// Index action
 			indexConfirmed  				: 'event:drupal-user-indexConfirmed',
 			indexFailed  					: 'event:drupal-user-indexFailed',
 			//Request new password action
 			requestNewPasswordConfirmed  	: 'event:drupal-user-requestNewPasswordConfirmed',
 			requestNewPasswordFailed  		: 'event:drupal-user-requestNewPasswordFailed',
 			//Cancel action
 			cancelConfirmed  				: 'event:drupal-user-cancelConfirmed',
 			cancelFailed  					: 'event:drupal-user-cancelFailed',
 			//Password Reset
 			passwordResetConfirmed  		: 'event:drupal-user-passwordResetConfirmed',
 			passwordResetFailed  			: 'event:drupal-user-passwordResetFailed',
 			//Resend Welcome Email
 			resendWelcomeEmailConfirmed  	: 'event:drupal-user-resendWelcomeEmailConfirmed',
 			resendWelcomeEmailFailed  		: 'event:drupal-user-resendWelcomeEmailFailed',
 			// Token action
 			tokenConfirmed  				: 'event:drupal-user-tokenConfirmed',
 			tokenFailed  					: 'event:drupal-user-tokenFailed',
 			// Register action
 			registerConfirmed  			: 'event:drupal-user-registerConfirmed',
 			registerFailed  				: 'event:drupal-user-registerFailed',
 			// Login action
 			loginConfirmed  				: 'event:drupal-user-loginConfirmed',
 			loginFailed  					: 'event:drupal-user-loginFailed',
 			// Logout action
 			logoutConfirmed  				: 'event:drupal-user-logoutConfirmed',
 			logoutFailed  					: 'event:drupal-user-logoutFailed'
	 		
	};
    
	/**
	 * User Channel Constant
	 */
	angular
	    .module('d7-services.resources.user.channelConstant', [])
	    .constant("UserChannelConstant", UserChannelConstant);

})();
