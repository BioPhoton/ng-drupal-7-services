;(function() {
    'use strict';
    
    /**
	 *  Constants for MenuResourceModules 
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	 */
	var MenuResourceConstant =  {

	 		// NOTE: This is the default alias aliases for your menu resources defined in Drupal
	 		resourcePath : 'menu',
	 		//actions of menu resource
	 		actions : {
	 			//retrieve 	 : 'retrieve'
	 		}

	};

	/**
	 * Menu Constant Modules
	 */
	angular
	    .module('d7-services.resources.menu.resourceConstant', [])
	    .constant("MenuResourceConstant", MenuResourceConstant);
	
})();
