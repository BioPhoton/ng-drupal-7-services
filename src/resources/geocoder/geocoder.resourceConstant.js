;(function() {
    'use strict';
    
    /**
	 *  Constants for GeocoderResourceModules
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	 */
	var GeocoderResourceConstant =  {

		// NOTE: if you set custom aliases for your recources in [your.domain.org]/admin/structure/services/list/[machinereadable_name_of_endpoint]/resources change value here
		resourcePath : 'geocoder',
		//actions of geocoder resource
		actions : {
			//retrieve 	: 'retrieve',
			//index 	: 'index'
		}

	};

	/**
	 * Geocoder Constant Modules
	 */
	angular
	    .module('d7-services.resources.geocoder.resourceConstant', [])
	    .constant("GeocoderResourceConstant", GeocoderResourceConstant);
	
})();
