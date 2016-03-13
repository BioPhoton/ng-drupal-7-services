(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name d7-services.commons.authentication:Authentication
   * @description
   * This module bundles all modules related to drupal authentication resource
   * @requires d7-services.commons.authentication.serviceConstant:AuthenticationServiceConstant
   * @requires d7-services.commons.authentication.service:AuthenticationService
   * @requires d7-services.commons.authentication.channelConstant:AuthenticationChannelConstant
   * @requires d7-services.commons.authentication.channel:AuthenticationChannel
   * @requires d7-services.commons.authentication.httpIntercepter:AuthenticationHttpIntercepter
   */
  angular
    .module('d7-services.commons.authentication', [
      'd7-services.commons.authentication.serviceConstant',
      'd7-services.commons.authentication.channel',
      'd7-services.commons.authentication.channelConstant',
      'd7-services.commons.authentication.httpIntercepter',
      'd7-services.commons.authentication.service']);

})();