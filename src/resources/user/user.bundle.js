;(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name d7-services.resources.user:User
   * @description
   * This Module bundles all modules related to drupal user resource
   * @requires d7-services.resources.user.resourceConstant:UserResourceConstant
   * @requires d7-services.resources.user.resource:UserResource
   * @requires d7-services.resources.user.channelConstant:UserChannelConstant
   * @requires d7-services.resources.user.channel:UserChannel
   */
  angular
    .module('d7-services.resources.user',
    ['d7-services.resources.user.resourceConstant',
      'd7-services.resources.user.resource',
      'd7-services.resources.user.channelConstant',
      'd7-services.resources.user.channel']);
})();