;
(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name d7-services.resources.node:Node
   * @description
   * This Module bundles all modules related to drupal node resource
   * @requires d7-services.resources.node.resourceConstant:NodeResourceConstant
   * @requires d7-services.resources.node.resource:NodeResource
   * @requires d7-services.resources.node.channelConstant:NodeChannelConstant
   * @requires d7-services.resources.node.channel:NodeChannel
   */
  angular.module('d7-services.resources.node', [
    'd7-services.resources.node.resourceConstant',
    'd7-services.resources.node.resource',
    'd7-services.resources.node.channelConstant',
    'd7-services.resources.node.channel']);
})();