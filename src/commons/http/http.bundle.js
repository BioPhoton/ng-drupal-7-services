;(function() {
	'use strict';

	/**
	 * @ngdoc object
	 * @name d7-services.commons.http:Http
	 * @description
	 * This module bundles all modules related to drupal comment resource
	 * @requires d7-services.commons.http.configurations:HttpConfigurations
	 * @requires d7-services.commons.http.intercepter.requestAccept:RequestIntercepterAccept
	 */
	angular.module('d7-services.commons.http', 
			['d7-services.commons.http.configurations', 
			 'd7-services.commons.http.intercepter.requestAccept']);
	
})();