;(function() {
    'use strict';
    
	/**
	 * User modules bundle
	**/
	angular
	    .module('ngDrupal7Services-3_x.resources', 
	    		['ngDrupal7Services-3_x.resources.comment', 
	    		 'ngDrupal7Services-3_x.resources.file', 
	    		 'ngDrupal7Services-3_x.resources.node', 
	    		 'ngDrupal7Services-3_x.resources.system', 
	    		 'ngDrupal7Services-3_x.resources.taxonomy_term', 
	    		 'ngDrupal7Services-3_x.resources.taxonomy_vocabulary', 
	    		 'ngDrupal7Services-3_x.resources.user', 
	    		 'ngDrupal7Services-3_x.resources.views' 
	    		 ]);
})();