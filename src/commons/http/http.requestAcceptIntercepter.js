(function() {
	'use strict';

	/**
	 * Drupal request intercepter Module for the requests Accept attribute
	 */
	angular.module('ngDrupal7Services-3_x.commons.http.intercepter.requestAccept', ['ngDrupal7Services-3_x.commons.configurations', 'ngDrupal7Services-3_x.resources.file.resourceConstant'])
		   .factory('RequestIntercepterAccept', RequestIntercepterAccept);

	
	
	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	RequestIntercepterAccept.$inject = [ '$injector'];
	
	/**
	 * HTTP Intercepter for Accept attribute of HTTP-Requests
	 **/
	/** @ngInject */
	function RequestIntercepterAccept($injector) {
		
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
		 * Intercepts a request and sets the request attribute 
	     *
		 * @param 	{Object} config The requests config object 
		 * 
		 * @return  {Object} The edited config object
		 * 
		**/
        function request(config){

        	
        	$injector.invoke(['DrupalApiConstant', 'FileResourceConstant', function (DrupalApiConstant, FileResourceConstant) {
        	       		
        		config.headers['Accept'] = DrupalApiConstant.responseFormat;
        		
        		if(!(config.method == 'POST' && config.url == DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + FileResourceConstant.resourcePath)) {
    	        	config.headers['Content-Type'] = DrupalApiConstant.responseFormat;
        		}
        		
	        	
 	         	
 	        }]);

			return config;
        };
    	
	};

})();