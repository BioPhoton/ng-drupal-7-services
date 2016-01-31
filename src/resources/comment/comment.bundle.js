;(function() {
    'use strict';
    
	/**
	 * User modules bundle
	**/
	angular
	    .module('d7-services.resources.comment', 
	    		['d7-services.resources.comment.resourceConstant', 
	    		 'd7-services.resources.comment.resource', 
	    		 'd7-services.resources.comment.channelConstant', 
	    		 'd7-services.resources.comment.channel']);
})();