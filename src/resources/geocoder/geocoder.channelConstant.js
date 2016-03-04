;(function() {
    'use strict';

    /**
	 *  Constants for GeocoderChannel
	 *  
	 *  NOTE: if you want to change this constant do this in a config section of angular
	 */
	var GeocoderChannelConstant =  {
			// Retrieve action
			retrieveConfirmed		: 'event:drupal-geocoder-retrieveConfirmed',
			retrieveFailed  		: 'event:drupal-geocoder-retrieveFailed',
			// Index action
			indexConfirmed			: 'event:drupal-geocoder-indexConfirmed',
			indexFailed  			: 'event:drupal-geocoder-indexFailed'
	};
    
	/**
	 * Geocoder Channel Constant
	 */
	angular
	    .module('d7-services.resources.geocoder.channelConstant', [])
	    .constant("GeocoderChannelConstant", GeocoderChannelConstant);

})();
