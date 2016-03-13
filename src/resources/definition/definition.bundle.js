;(function() {
    'use strict';

	/**
	 * @ngdoc object
	 * @name d7-services.resources.definition:Definition
	 * @description
	 * This module bundles all modules related to drupal definition resource
	 * @requires d7-services.resources.definition.resourceConstant:DefinitionResourceConstant
	 * @requires d7-services.resources.definition.resource:DefinitionResource
	 * @requires d7-services.resources.definition.channelConstant:DefinitionChannelConstant
	 * @requires d7-services.resources.definition.channel:DefinitionChannel
	 */
	angular.module('d7-services.resources.definition', 
			['d7-services.resources.definition.resourceConstant', 
			 'd7-services.resources.definition.resource', 
			 'd7-services.resources.definition.channelConstant', 
			 'd7-services.resources.definition.channel']);
})();