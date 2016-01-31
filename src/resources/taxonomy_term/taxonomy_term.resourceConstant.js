;(function() {
    'use strict';
    
    /**
	 *  Constants for TaxonomyTermResourceModules
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	 */
	var TaxonomyTermResourceConstant =  {

		// NOTE: This is the default alias aliases for your system resources defined in Drupal
		resourcePath : 'taxonomy_term',
		//actions of taxonomy_term resource
		actions : {
			//following actions are defined over their request method (GET, POST, PUT, DELETE) so they are commented out
			//retrieve 				: 'retrieve',
			//create 				: 'create',
			//update 				: 'update',
			//delete 				: 'delete',
		    //index 				: 'index',
			//
			selectNodes 			: 'selectNodes',
		}

	};

	/**
	 * TaxonomyTerm Constant Modules
	 */
	angular
	    .module('d7-services.resources.taxonomy_term.resourceConstant', [])
	    .constant("TaxonomyTermResourceConstant", TaxonomyTermResourceConstant);
	
})();
