(function() {
    'use strict';

    /**
	 *  Constants for AuthenticationChannel 
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	**/
	var AuthenticationChannelConstant =  {
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