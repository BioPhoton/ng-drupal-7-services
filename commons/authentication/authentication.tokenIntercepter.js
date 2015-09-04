(function() {
	'use strict';

	
	/**
	 * Drupal request intercepter Module for the requests Accept attribute
	 */
	angular.module('ngDrupal7Services-3_x.commons.authentication.tokenIntercepter', ['ngDrupal7Services-3_x.commons.authentication.service'])
		   .factory('AuthenticationHeaderInterceptor', AuthenticationHeaderInterceptor);

	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	AuthenticationHeaderInterceptor.$inject = [ '$injector'];
	
	/**
	 * HTTP Intercepter for Accept attribute of HTTP-Requests
	 **/
	/** @ngInject */
	function AuthenticationHeaderInterceptor($injector) {
		
		//setup and return service            	
        var intercepter = {
        	request 	: addHeadersAndFlags,
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
        function addHeadersAndFlags (config) {
	        var tokenHeaders = null;
 
	        // Need to manually retrieve dependencies with $injector.invoke
	        // because Authentication depends on $http, which doesn't exist during the
	        // configuration phase (when we are setting up interceptors).
	        // Using $injector.invoke ensures that we are provided with the
	        // dependencies after they have been created.
	        $injector.invoke(['AuthenticationService', function (AuthenticationService) {
	            tokenHeaders = AuthenticationService.getAuthenticationHeaders();
	            console.log(tokenHeaders); 
	        }]);

	        //add headers
	        
	        //add Authorisation and X-CSRF-TOKEN if given
	        if (tokenHeaders) {
	            angular.extend(config.headers, tokenHeaders);
	        }
	        
	        //add flags
	        
	        //add withCredentials to every request
	        //needed because we send cookies in our request headers
	        config.withCredentials = true;

	        return config;
        };
    	
	};

})();