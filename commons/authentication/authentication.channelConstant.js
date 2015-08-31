(function() {
    'use strict';

    /**
	 *  Constants for AuthenticationChannel 
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	**/
	var AuthenticationChannelConstant =  {
		
		authentication_loginConfirmed  	: 'event:drupal-authService-loginConfirmed',
		authentication_loginFailed  	: 'event:drupal-authService-loginFailed',
		authentication_logoutConfirmed  : 'event:drupal-authService-logoutConfirmed',
		authentication_logoutFailed  	: 'event:drupal-authService-logoutFailed',
		
		authentication_connectionStateUpdated  	: 'event:drupal-authService-connectionStateUpdated',
		authentication_currentUserUpdated		: 'event:drupal-authService-currentUserUpdated',
		
	};
    
	/**
	 * API authentication channel constant
	 */
	angular
	.module('ngDrupal7Services-3_x.commons.authentication.channelConstant', [])
	    .constant("AuthenticationChannelConstant", AuthenticationChannelConstant);

})();