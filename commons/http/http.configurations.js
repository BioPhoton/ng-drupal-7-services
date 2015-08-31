(function() {
	'use strict';

	/**
	 * Drupal request intercepter Module for the requests Content-Type attribute
	 */
	angular.module('ngDrupal7Services-3_x.commons.http.configurations', ['ngDrupal7Services-3_x.commons.http.intercepter.requestAccept'])
		   .run(runFunction)	   
		   .config(hTTPConfigurations);
	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	hTTPConfigurations.$inject = [ $httpProvider ];
	
	
	/**
	 * HTTP Intercepter for Content-Type attribute of HTTP-Requests
	 **/
	/** @ngInject */
	function hTTPConfigurations( $httpProvider ) {
		//request Content-Type attribute
		$httpProvider.interceptors.push('RequestIntercepterAccept');
	};
	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	runFunction.$inject = [ $http ];
	
	function runFunction($http) {
		console.log( $http.defaults.headers.common); 
		//
		$http.defaults.headers.common['Accept'] = "application/json;charset=utf-8";
		
		
		//cookies
		// @TODO set only if logged in or needed
		$http.defaults.withCredentials = true; 
	}

})();