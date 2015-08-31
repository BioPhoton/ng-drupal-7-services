(function() {
    'use strict';

    /**
	 *  Constants for UserChannel
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	 */
	var UserChannelConstant =  {
			// Connect action
	 		user_connectConfirmed	: 'event:drupal-user-connectConfirmed',
	 		user_connectFailed  	: 'event:drupal-user-connectFailed',
	 		// Get variable action
	 		user_getVariableConfirmed	: 'event:drupal-user-getVariableConfirmed',
	 		user_getVariableFailed  	: 'event:drupal-user-getVariableFailed',
	 		// Set variable action
	 		user_setVariableConfirmed	: 'event:drupal-user-setVariableConfirmed',
	 		user_setVariableFailed  	: 'event:drupal-user-setVariableFailed',
	 		// Del variable action
	 		user_delVariableConfirmed	: 'event:drupal-user-delVariableConfirmed',
	 		user_delVariableFailed  	: 'event:drupal-user-delVariableFailed'
	};
    
	/**
	 * User Channel Constant
	 */
	angular
	    .module('ngDrupal7Services-3_x.resources.user.channelConstant', ['ngDrupal7Services-3_x.commons.configurations'])
	    .constant("UserChannelConstant", UserChannelConstant);

})();
