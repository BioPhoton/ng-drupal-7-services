;(function() {
    'use strict';
    
    /**
	 *  Constants for SystemResourceModules 
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	 */
	var SystemResourceConstant =  {

	 		// NOTE: This is the default alias aliases for your system resources defined in Drupal
	 		resourcePath : 'system',
	 		//actions of system resource
	 		actions : {
	 			connect 	 : 'connect',
	 			get_variable : 'get_variable',
	 			set_variable : 'set_variable',
	 			del_variable : 'del_variable'
	 		}

	};

	/**
	 * System Constant Modules
	 */
	angular
	    .module('d7-services.resources.system.resourceConstant', [])
	    .constant("SystemResourceConstant", SystemResourceConstant);
	
})();
