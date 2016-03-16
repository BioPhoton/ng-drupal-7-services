;(function() {
	'use strict';

	/**
	 * Drupal request intercepter Module for the requests Content-Type attribute
	 */
	angular.module('d7-services.commons.http.configurations', ['d7-services.commons.http.intercepter.requestAccept', 'd7-services.commons.authentication.httpIntercepter'])
		   .config(hTTPConfigurations);

	hTTPConfigurations.$inject = [ '$httpProvider' ];
	
	
	/**
	 * HTTP Intercepter for Content-Type attribute of HTTP-Requests
	 **/
	/** @ngInject */
	function hTTPConfigurations( $httpProvider ) {
		//request Content-Type attribute
		$httpProvider.interceptors.push('RequestIntercepterAccept');
		$httpProvider.interceptors.push('AuthenticationHttpInterceptor');
	};

})();