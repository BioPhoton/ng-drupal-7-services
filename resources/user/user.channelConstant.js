(function() {
    'use strict';

    /**
	 *  Constants for UserChannel
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	 */
	var UserChannelConstant =  {
			// Retrieve action
	 		user_connectConfirmed	: 'event:drupal-user-connectConfirmed',
	 		user_connectFailed  	: 'event:drupal-user-connectFailed',
	 		
	 		// Retrieve action
	 		user_loginConfirmed	: 'event:drupal-user-loginConfirmed',
	 		user_loginFailed  	: 'event:drupal-user-loginFailed'
	 		
	};
    
	/**
	 * User Channel Constant
	 */
	angular
	    .module('ngDrupal7Services-3_x.resources.user.channelConstant', ['ngDrupal7Services-3_x.commons.configurations'])
	    .constant("UserChannelConstant", UserChannelConstant);

})();
