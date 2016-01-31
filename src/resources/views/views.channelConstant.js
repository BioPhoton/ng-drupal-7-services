;(function() {
    'use strict';

    /**
	 *  Constants for ViewsChannel
	 *  
	 *  NOTE: if you want to change this constant do this in a config section of angular
	 */
	var ViewsChannelConstant =  {
 		// Connect action
		retrieveConfirmed	: 'event:drupal-views-retrieveConfirmed',
		retrieveFailed  	: 'event:drupal-views-retrieveFailed',
	};
    
	/**
	 * Views Channel Constant
	 */
	angular
	    .module('d7-services.resources.views.channelConstant', [])
	    .constant("ViewsChannelConstant", ViewsChannelConstant);

})();
