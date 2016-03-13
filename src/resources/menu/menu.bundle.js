(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name d7-services.resources.menu:Menu
   * @description
   * This module bundles all modules related to drupal menu resource
   * @requires d7-services.resources.menu.resourceConstant:MenuResourceConstant
   * @requires d7-services.resources.menu.resource:MenuResource
   * @requires d7-services.resources.menu.channelConstant:MenuChannelConstant
   * @requires d7-services.resources.menu.channel:MenuChannel
   */
  angular.module('d7-services.resources.menu', [
    'd7-services.resources.menu.resourceConstant',
    'd7-services.resources.menu.resource',
    'd7-services.resources.menu.channelConstant',
    'd7-services.resources.menu.channel']);
})();