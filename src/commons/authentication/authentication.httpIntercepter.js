(function() {
	'use strict';

	
	/**
	 * Drupal request intercepter Module for the requests Accept attribute
	 */
	angular.module('d7-services.commons.authentication.httpIntercepter', ['d7-services.commons.authentication.service'])
		   .factory('AuthenticationHttpInterceptor', AuthenticationHttpInterceptor);

	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	AuthenticationHttpInterceptor.$inject = [ '$injector'];
	
	/**
	 * HTTP Intercepter for Accept attribute of HTTP-Requests
	 **/
	/** @ngInject */
	function AuthenticationHttpInterceptor($injector) {
		
		//setup and return service            	
        var intercepter = {
        	request 	: doRequestCongiguration,
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
        function doRequestCongiguration (config) {
	        var tokenHeaders = null;
 
	        // Need to manually retrieve dependencies with $injector.invoke
	        // because Authentication depends on $http, which doesn't exist during the
	        // configuration phase (when we are setting up interceptors).
	        // Using $injector.invoke ensures that we are provided with the
	        // dependencies after they have been created.
	        $injector.invoke(['AuthenticationService', function (AuthenticationService) {
	            tokenHeaders = AuthenticationService.getAuthenticationHeaders();
	            
	        }]);

	        //add headers___________________________________________________________________
	        
	        //add Authorisation and X-CSRF-TOKEN if given
	        if (tokenHeaders) {
	            angular.extend(config.headers, tokenHeaders);
	        }
	        
	        //add flags_____________________________________________________________________
	        
	        //add withCredentials to every request
	        //needed because we send cookies in our request headers
	        config.withCredentials = true;

	        return config;
        };
    	
	};

})();