;(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name d7-services.resources.system:System
   * @description
   * This Module bundles all modules related to drupal system resource
   * @requires d7-services.resources.system.resourceConstant:SystemResourceConstant
   * @requires d7-services.resources.system.resource:SystemResource
   * @requires d7-services.resources.system.channelConstant:SystemChannelConstant
   * @requires d7-services.resources.system.channel:SystemChannel
   */
  angular.module('d7-services.resources.system', [
    'd7-services.resources.system.resourceConstant',
    'd7-services.resources.system.resource',
    'd7-services.resources.system.channelConstant',
    'd7-services.resources.system.channel']);
})();