;(function() {
    'use strict';
    
    /**
	 *  Constants for CommentResourceModules
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	 */
	var CommentResourceConstant =  {

		// NOTE: This is the default alias aliases for your system resources defined in Drupal
		resourcePath : 'comment',
		//actions of comment resource
		actions : {
			//following actions are defined over their request method (GET, POST, PUT, DELETE) so they are commented out
			//retrieve 				: 'retrieve',
			//create 				: 'create',
			//update 				: 'update',
			//delete 				: 'delete',
		    //index 				: 'index',
			//
			countAll 			: 'countAll',
			countNew			: 'countNew'
		}

	};

	/**
	 * Comment Constant Modules
	 */
	angular
	    .module('d7-services.resources.comment.resourceConstant', [])
	    .constant("CommentResourceConstant", CommentResourceConstant);
	
})();
