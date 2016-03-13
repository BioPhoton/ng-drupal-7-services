;(function() {
    'use strict';

	/**
	 * @ngdoc object
	 * @name d7-services.resources.file:File
	 * @description
	 * This module bundles all modules related to drupal file resource
	 * @requires d7-services.resources.file.resourceConstant:FileResourceConstant
	 * @requires d7-services.resources.file.resource:FileResource
	 * @requires d7-services.resources.file.channelConstant:FileChannelConstant
	 * @requires d7-services.resources.file.channel:FileChannel
	 */
	angular.module('d7-services.resources.file', 
			['d7-services.resources.file.resourceConstant', 
			 'd7-services.resources.file.resource', 
			 'd7-services.resources.file.channelConstant', 
			 'd7-services.resources.file.channel']);
})();