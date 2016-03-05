;(function() {
	'use strict';

	/**
	 * Geocoder Resource Modules
	 *
	 * see sourcecode in services/resources/geocoder_resource.inc
	 **/
	angular.module('d7-services.resources.geocoder.resource', ['d7-services.commons.configurations', 'd7-services.resources.geocoder', 'd7-services.resources', 'd7-services.commons.baseResource'])

	/**
	 * GeocoderResource
	 *
	 * This service mirrors the Drupal geocoder resource of the services 3.x module.
	 * To use this you have to set following line in your Drupal CORS module settings
	 * your_api_endpoint/geocoder/*|<mirror>|POST|Content-Type,Authorization|true
	 *
	 **/
		.factory('GeocoderResource', GeocoderResource);

	/**
	 * Manually identify dependencies for minification-safe code
	 *
	 **/
	GeocoderResource.$inject = ['$http', 'BaseResource', 'DrupalApiConstant', 'GeocoderResourceConstant', 'GeocoderChannel'];

	/** @ngInject */
	function GeocoderResource($http, BaseResource, DrupalApiConstant, GeocoderResourceConstant, GeocoderChannel) {

		//setup and return service            	
		var geocoderResourceService = {
			//actions
			retrieve 	: retrieve,
			index 		: index
		};

		return geocoderResourceService;

		////////////

		/**
		 * retrieve
		 *
		 * Geocode data
		 *
		 * Method: GET
		 * Url: http://drupal_instance/api_endpoint/geocoder/{HANDLER}
		 *
		 * @params  {Object} data The requests data
		 * 			@key 	{String} handler The geocoder handler to use - google, gpx, kml etc., required:true, source:path
		 * 			@key 	{String} data Value to geocode., required:true, source:param
		 * 			@key 	{String} output Output Format (GPX, WKT, etc.), required:false, source:param
		 *
		 * @return 	{Promise} A geocoder object
		 *
		 **/
		function retrieve(data) {
			var retrievePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + GeocoderResourceConstant.resourcePath + '/' + data.handler;
			delete data.handler;
			retrievePath += '?'+BaseResource.prepareGetParams(data, true,'json');
			return BaseResource.retrieve( retrievePath,GeocoderChannel.pubRetrieveConfirmed,  GeocoderChannel.pubRetrieveFailed);
		};

		/**
		 * index
		 *
		 * List Geocoder Capabilities
		 *
		 * Method: GET
		 * Url: http://drupal_instance/api_endpoint/geocoder/
		 *
		 * @return 	{Promise} A geocoder object
		 *
		 **/
		function index() {
			var indexPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + GeocoderResourceConstant.resourcePath ;
			return BaseResource.retrieve(indexPath, GeocoderChannel.pubIndexConfirmed, GeocoderChannel.pubIndexFailed);
		};

	}

})();
	