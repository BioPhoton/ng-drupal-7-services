;(function() {
	'use strict';

	/**
	 * Drupal http module bundle
	 */
	angular.module('d7-services.commons.http', 
			['d7-services.commons.http.configurations', 
			 'd7-services.commons.http.intercepter.requestAccept']);
	
})();