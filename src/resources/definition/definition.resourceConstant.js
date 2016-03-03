;(function() {
    'use strict';
    
    /**
	 *  Constants for DefinitionResourceModules
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	 */
	var DefinitionResourceConstant =  {

		// NOTE: This is the default alias aliases for your system resources defined in Drupal
		resourcePath : 'definition',
		//actions of user resource
		actions : {
			//following actions are defined over their request method (GET) so they are commented out
		    //index 	: 'index'
		}

	};

	/**
	 * Definition Constant Modules
	 */
	angular
	    .module('d7-services.resources.definition.resourceConstant', [])
	    .constant("DefinitionResourceConstant", DefinitionResourceConstant);
	
})();
