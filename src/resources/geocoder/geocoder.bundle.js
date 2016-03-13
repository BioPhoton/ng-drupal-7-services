;(function() {
    'use strict';

	/**
	 * @ngdoc object
	 * @name d7-services.resources.geocoder:Geocoder
	 * @description
	 * This module bundles all modules related to drupal geocoder resource
	 * @requires d7-services.resources.geocoder.resourceConstant:GeocoderResourceConstant
	 * @requires d7-services.resources.geocoder.resource:GeocoderResource
	 * @requires d7-services.resources.geocoder.channelConstant:GeocoderChannelConstant
	 * @requires d7-services.resources.geocoder.channel:GeocoderChannel
	 */
	angular.module('d7-services.resources.geocoder', 
			['d7-services.resources.geocoder.resourceConstant', 
			 'd7-services.resources.geocoder.resource', 
			 'd7-services.resources.geocoder.channelConstant', 
			 'd7-services.resources.geocoder.channel',
			 'd7-services.resources.geocoder.helperConstant']);
})();