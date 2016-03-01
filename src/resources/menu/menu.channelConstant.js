;(function() {
    'use strict';

    /**
	 *  Constants for MenuChannel
	 *  
	 *  NOTE: if you want to change this constant do this in a config section of angular
	 */
	var MenuChannelConstant =  {
 		// Retrieve action
 		retrieveConfirmed	: 'event:drupal-menu-retrieveConfirmed',
 		retrieveFailed  	: 'event:drupal-menu-retrieveFailed',
	};
    
	/**
	 * Menu Channel Constant
	 */
	angular
	    .module('d7-services.resources.menu.channelConstant', [])
	    .constant("MenuChannelConstant", MenuChannelConstant);

})();
