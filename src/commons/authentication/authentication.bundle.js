(function() {
    'use strict';
    
	/**
	 * Authentication modules bundle
	**/
	angular
	    .module('d7-services.commons.authentication', 
	    		['d7-services.commons.authentication.serviceConstant', 
	    		 'd7-services.commons.authentication.channel', 
	    		 'd7-services.commons.authentication.channelConstant', 
	    		 'd7-services.commons.authentication.httpIntercepter', 
	    		 'd7-services.commons.authentication.service']);

})();