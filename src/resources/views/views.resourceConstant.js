;(function() {
    'use strict';
    
    /**
	 *  Constants for ViewsResourceModules 
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	 */
	var ViewsResourceConstant =  {

	 		// NOTE: This is the default alias aliases for your views resources defined in Drupal
	 		resourcePath : 'views',
	 		//actions of node resource
	 		actions : {
	 			//retrieve 	: 'retrieve'
	 		},

	};

	/**
	 * Views Constant Modules
	 */
	angular
	    .module('d7-services.resources.views.resourceConstant', [])
	    .constant("ViewsResourceConstant", ViewsResourceConstant);
	
})();
