(function() {
    'use strict';
    
    /**
	 *  Constants for SystemResourceModules 
	 */
	var SystemResourceConstant =  {
	 	   //					   
	 	   // Drupal depending settings
	 	   //
	 		
	 		// NOTE: if you set custom aliases for your recources in [your.domain.org]/admin/structure/services/list/[machinereadable_name_of_endpoint]/resources do this in your app.js config section
	 		resourcePath : 'system',
	 		//actions of system resource
	 		actions : {
	 			connect 	 : 'connect',
	 			get_variable : 'get_variable',
	 			set_variable : 'set_variable',
	 			del_variable : 'del_variable',
	 		}

	};

	/**
	 * System Constant Modules
	 */
	angular
	    .module('ngDrupal7Services-3_x.resources.system.resourceConstant', ['ngDrupal7Services-3_x.commons.configurations'])
	    .constant("SystemResourceConstant", SystemResourceConstant);
	
})();
