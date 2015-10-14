;(function() {
    'use strict';

    /**
	 *  Constants for SystemChannel
	 *  
	 *  NOTE: if you want to change this constant do this in a config section of angular
	 */
	var SystemChannelConstant =  {
 		// Connect action
 		system_connectConfirmed	: 'event:drupal-system-connectConfirmed',
 		system_connectFailed  	: 'event:drupal-system-connectFailed',
 		// Get variable action
 		system_getVariableConfirmed	: 'event:drupal-system-getVariableConfirmed',
 		system_getVariableFailed  	: 'event:drupal-system-getVariableFailed',
 		// Set variable action
 		system_setVariableConfirmed	: 'event:drupal-system-setVariableConfirmed',
 		system_setVariableFailed  	: 'event:drupal-system-setVariableFailed',
 		// Del variable action
 		system_delVariableConfirmed	: 'event:drupal-system-delVariableConfirmed',
 		system_delVariableFailed  	: 'event:drupal-system-delVariableFailed'
	};
    
	/**
	 * System Channel Constant
	 */
	angular
	    .module('ngDrupal7Services-3_x.resources.system.channelConstant', [])
	    .constant("SystemChannelConstant", SystemChannelConstant);

})();
