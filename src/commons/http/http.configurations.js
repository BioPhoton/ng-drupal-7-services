;(function() {
	'use strict';

	/**
	 * Drupal request intercepter Module for the requests Content-Type attribute
	 */
	angular.module('ngDrupal7Services-3_x.commons.http.configurations', ['ngDrupal7Services-3_x.commons.http.intercepter.requestAccept', 'ngDrupal7Services-3_x.commons.authentication.httpIntercepter'])
		   .config(hTTPConfigurations);
	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
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