;(function() {
    'use strict';

	/**
	 * Geocoder Resource Modules
	 * 
	 * see sourcecode in services/resources/geocoder_resource.inc
	**/
    angular.module('d7-services.resources.geocoder.resource', ['d7-services.commons.configurations', 'd7-services.resources.geocoder.resourceConstant', 'd7-services.resources.geocoder.channel', 'd7-services.commons.baseResource'])
    
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
        	//CRUD operations
        	retrieve 	: retrieve,
    	    index 		: index,
        };
        
        return geocoderResourceService;

        ////////////
        
        /**
		 * retrieve
		 * 
		 * Retrieve a geocoder
		 * 
		 * Method: GET 
		 * Url: http://www.drupalionic.org/drupal_test/api/v1/geocoder/{FID}
		 * 
		 * @params  {Object} data The requests data
		 * 			@key 	{Integer} fid FID of the geocoder to be loaded, required:true, source:path
		 * 			@key 	{Integer} geocoder_contents To return geocoder contents or not., required:false, source:param
		 * 			@key 	{Integer} image_styles To return image styles or not., required:false, source:param
		 * 
		 * @return 	{Promise} A geocoder object
		 * 
		**/
    	function retrieve(data) {
    		var retrievePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + GeocoderResourceConstant.resourcePath + '/' + data.fid;
    		
    		if( data.geocoder_contents || data.image_styles ) {
    			retrievePath += '?';
	    	}
	    	
	    	//optional data
    		if(data.geocoder_contents) {
    			retrievePath += 'geocoder_contents='+((data.geocoder_contents)?1:0)+',';
    		}
    		
    		if(data.image_styles) {
    			retrievePath += 'image_styles='+((data.image_styles)?1:0)+',';
    		}
    		
    		
    		return BaseResource.retrieve( retrievePath,GeocoderChannel.pubRetrieveConfirmed,  GeocoderChannel.pubRetrieveFailed);
	    };

	    function index(data) {
	    	var indexPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + GeocoderResourceConstant.resourcePath + '/';
	    	return BaseResource.index(data, indexPath, GeocoderChannel.pubIndexConfirmed, GeocoderChannel.pubIndexFailed);
	    };

	}

})();