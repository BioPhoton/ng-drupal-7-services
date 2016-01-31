;(function() {
    'use strict';
    
    /**
	 *  Constants for FileResourceModules
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	 */
	var FileResourceConstant =  {

		// NOTE: if you set custom aliases for your recources in [your.domain.org]/admin/structure/services/list/[machinereadable_name_of_endpoint]/resources change value here
		resourcePath : 'file',
		//actions of file resource
		actions : {
			//retrieve 	: 'retrieve',
			//create	: 'create',
			//delete	: 'delete',
			//index 	: 'index',
			createRaw  : 'create_raw'
		}

	};

	/**
	 * File Constant Modules
	 */
	angular
	    .module('d7-services.resources.file.resourceConstant', [])
	    .constant("FileResourceConstant", FileResourceConstant);
	
})();
