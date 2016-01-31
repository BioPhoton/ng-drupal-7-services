;(function() {
    'use strict';
    
	/**
	 * User modules bundle
	**/
	angular
	    .module('d7-services.resources.user', 
	    		['d7-services.resources.user.resourceConstant', 
	    		 'd7-services.resources.user.resource', 
	    		 'd7-services.resources.user.channelConstant', 
	    		 'd7-services.resources.user.channel']);
})();