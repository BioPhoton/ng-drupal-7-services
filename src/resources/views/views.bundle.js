;(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name d7-services.resources.views:Views
   * @description
   * This Module bundles all modules related to drupal views resource
   * @requires d7-services.resources.views.resourceConstant:ViewsResourceConstant
   * @requires d7-services.resources.views.resource:ViewsResource
   * @requires d7-services.resources.views.channelConstant:ViewsChannelConstant
   * @requires d7-services.resources.views.channel:ViewsChannel
   * @requires d7-services.resources.views.operatorsConstant:OperatorsConstant
   */
  angular.module('d7-services.resources.views',
    ['d7-services.resources.views.resourceConstant',
      'd7-services.resources.views.resource',
      'd7-services.resources.views.channelConstant',
      'd7-services.resources.views.channel',
      'd7-services.resources.views.operatorsConstant']);
})();
