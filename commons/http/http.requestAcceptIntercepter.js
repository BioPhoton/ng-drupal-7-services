(function() {
	'use strict';

	/**
	 * Drupal request intercepter Module for the requests Accept attribute
	 */
	angular.module('ngDrupal7Services-3_x.commons.http.intercepter.requestAccept', [])
		   .factory('RequestIntercepterAccept', RequestIntercepterAccept);

	/**
	 * HTTP Intercepter for Accept attribute of HTTP-Requests
	 **/
	/** @ngInject */
	function RequestIntercepterAccept() {
		
		//setup and return service            	
        var intercepter = {
        	request 	: request,
        };
        
        return intercepter;

        ////////////
        
        //request function
        
        /**
		 * request
		 * 
		 * Intercepts a request and sets the Accept attribute 
	     *
		 * @param 	{Object} config The requests config object 
		 * 
		 * @return  {Object} The edited config object
		 * 
		**/
        function request(config){

			if(config.headers) {
				//if(config.headers.indexOf('Accept') == -1) {
				config.headers['Accept'] = "application/json;charset=utf-8";
				//}
			}
			//@TODO check the or section of this line
			return config || $q.when(config);
        };
    	
	};

})();