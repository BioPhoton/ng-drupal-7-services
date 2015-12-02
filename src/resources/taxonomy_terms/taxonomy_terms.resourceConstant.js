;(function() {
    'use strict';
    
    /**
	 *  Constants for TaxonomyTermsResourceModules
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	 */
	var TaxonomyTermsResourceConstant =  {

		// NOTE: This is the default alias aliases for your system resources defined in Drupal
		resourcePath : 'taxonomy_term',
		//actions of taxonomy_terms resource
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
	 * TaxonomyTerms Constant Modules
	 */
	angular
	    .module('ngDrupal7Services-3_x.resources.taxonomy_terms.resourceConstant', [])
	    .constant("TaxonomyTermsResourceConstant", TaxonomyTermsResourceConstant);
	
})();
