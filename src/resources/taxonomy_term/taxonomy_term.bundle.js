;(function() {
    'use strict';
    
	/**
	 * User modules bundle
	**/
	angular
	    .module('d7-services.resources.taxonomy_term', 
	    		['d7-services.resources.taxonomy_term.resourceConstant', 
	    		 'd7-services.resources.taxonomy_term.resource', 
	    		 'd7-services.resources.taxonomy_term.channelConstant', 
	    		 'd7-services.resources.taxonomy_term.channel']);
})();