(function() {
    'use strict';

    /**
	 *  Constants for SystemChannel
	 */
	var SystemChannelConstant =  {
	 		//
	 		// Constants for SystemResourceChannel
	 		//
	 	  	// System resource
	 		//
	 		// Actions:
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
	 		system_delVariableFailed  	: 'event:drupal-system-delVariableFailed',
	 		
	};
    
	/**
	 * System Channel Constant
	 */
	angular
	    .module('ngDrupal7Services-3_x.resources.system.channelConstant', ['ngDrupal7Services-3_x.commons.configurations'])
	    .constant("SystemChannelConstant", SystemChannelConstant);

})();
