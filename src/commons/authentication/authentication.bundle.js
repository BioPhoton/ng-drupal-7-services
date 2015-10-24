(function() {
    'use strict';
    
	/**
	 * Authentication modules bundle
	**/
	angular
	    .module('ngDrupal7Services-3_x.commons.authentication', 
	    		['ngDrupal7Services-3_x.commons.authentication.serviceConstant', 
	    		 'ngDrupal7Services-3_x.commons.authentication.channel', 
	    		 'ngDrupal7Services-3_x.commons.authentication.channelConstant', 
	    		 'ngDrupal7Services-3_x.commons.authentication.httpIntercepter', 
	    		 'ngDrupal7Services-3_x.commons.authentication.service']);

})();