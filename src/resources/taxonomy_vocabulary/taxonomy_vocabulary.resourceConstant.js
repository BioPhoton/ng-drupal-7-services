;(function() {
    'use strict';
    
    /**
	 *  Constants for TaxonomyVocabularyResourceModules
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	 */
	var TaxonomyVocabularyResourceConstant =  {

		// NOTE: This is the default alias aliases for your system resources defined in Drupal
		resourcePath : 'taxonomy_vocabulary',
		//actions of taxonomy_vocabulary resource
		actions : {
			//following actions are defined over their request method (GET, POST, PUT, DELETE) so they are commented out
			//retrieve 				: 'retrieve',
			//create 				: 'create',
			//update 				: 'update',
			//delete 				: 'delete',
		    //index 				: 'index',
			//
			getTree 				: 'getTree',
			retrieveByMachineName 	: 'retrieveByMachineName'
		}

	};

	/**
	 * TaxonomyVocabulary Constant Modules
	 */
	angular
	    .module('d7-services.resources.taxonomy_vocabulary.resourceConstant', [])
	    .constant("TaxonomyVocabularyResourceConstant", TaxonomyVocabularyResourceConstant);
	
})();
