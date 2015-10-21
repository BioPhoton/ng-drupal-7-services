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
	    .module('ngDrupal7Services-3_x.resources.views.channelConstant', [])
	    .constant("ViewsChannelConstant", ViewsChannelConstant);

})();
