(function() {
    'use strict';

    /**
	 *  Constants for AuthenticationChannel 
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	**/
	var AuthenticationChannelConstant =  {
		
		loginConfirmed  : 'event:drupal-authService-loginConfirmed',
		loginFailed  	: 'event:drupal-authService-loginFailed',
		
		logoutConfirmed  	: 'event:drupal-authService-logoutConfirmed',
		logoutFailed  		: 'event:drupal-authService-logoutFailed',
		
		refreshConnectionConfirmed  	: 'event:drupal-authService-refreshConnectionConfirmed',
		refreshConnectionFailed  		: 'event:drupal-authService-refreshConnectionFailed',
		
		tryConnectConfirmed 	: 'event:drupal-authService-tryConnectConfirmed',
		tryConnectFailed 		: 'event:drupal-authService-tryConnectFailed',
		
		connectionStateUpdated  	: 'event:drupal-authService-connectionStateUpdated',
		
		currentUserUpdated			: 'event:drupal-authService-currentUserUpdated'
			
	};
    
	/**
	 * API authentication channel constant
	 */
	angular
	.module('d7-services.commons.authentication.channelConstant', [])
	    .constant("AuthenticationChannelConstant", AuthenticationChannelConstant);

})();