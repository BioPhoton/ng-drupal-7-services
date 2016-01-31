;(function() {
    'use strict';
    
    /**
	 *  Constants for NodeResourceModules
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	 */
	var NodeResourceConstant =  {

		// NOTE: This is the default alias aliases for your system resources defined in Drupal
		resourcePath : 'node',
		//actions of user resource
		actions : {
			//following actions are defined over their request method (GET, POST, PUT, DELETE) so they are commented out
			//retrieve 	: 'retrieve',
			//create 	: 'create',
			//update 	: 'update',
			//delete 	: 'delete',
		    //index 	: 'index',
			//
			files		: 'files',
			comments 	: 'comments',
			attach_file : 'attach_file'
		}

	};

	/**
	 * Node Constant Modules
	 */
	angular
	    .module('d7-services.resources.node.resourceConstant', [])
	    .constant("NodeResourceConstant", NodeResourceConstant);
	
})();
