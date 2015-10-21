;(function() {
    'use strict';

    /**
	 *  Constants for SystemChannel
	 *  
	 *  NOTE: if you want to change this constant do this in a config section of angular
	 */
	var SystemChannelConstant =  {
 		// Connect action
 		connectConfirmed	: 'event:drupal-system-connectConfirmed',
 		connectFailed  	: 'event:drupal-system-connectFailed',
 		// Get variable action
 		getVariableConfirmed	: 'event:drupal-system-getVariableConfirmed',
 		getVariableFailed  	: 'event:drupal-system-getVariableFailed',
 		// Set variable action
 		setVariableConfirmed	: 'event:drupal-system-setVariableConfirmed',
 		setVariableFailed  	: 'event:drupal-system-setVariableFailed',
 		// Del variable action
 		delVariableConfirmed	: 'event:drupal-system-delVariableConfirmed',
 		delVariableFailed  	: 'event:drupal-system-delVariableFailed'
	};
    
	/**
	 * System Channel Constant
	 */
	angular
	    .module('ngDrupal7Services-3_x.resources.system.channelConstant', [])
	    .constant("SystemChannelConstant", SystemChannelConstant);

})();
