;(function() {
    'use strict';
    
	/**
	 * User modules bundle
	**/
	angular
	    .module('d7-services.resources', 
	    		['d7-services.resources.comment', 
	    		 'd7-services.resources.file', 
	    		 'd7-services.resources.node', 
	    		 'd7-services.resources.system', 
	    		 'd7-services.resources.taxonomy_term', 
	    		 'd7-services.resources.taxonomy_vocabulary', 
	    		 'd7-services.resources.user', 
	    		 'd7-services.resources.views' 
	    		 ]);
})();