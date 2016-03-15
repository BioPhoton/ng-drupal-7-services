;(function () {

  'use strict';

  /**
   * @ngdoc object
   * @name d7-services.commons:Commons
   * @description
   * This module bundles all modules related to the commons modules
   * @requires d7-services.commons.authentication:AuthenticationBundle
   * @requires d7-services.commons.http:HttpBundle
   * @requires d7-services.commons.directives:DirectivesBundle
   * @requires d7-services.commons.baseChannel:BaseChannel
   * @requires d7-services.commons.baseResource:BaseResource
   * @requires d7-services.commons.configurations:DrupalApiConstant
   * @requires d7-services.helperService.http:DrupalHelperService
   */
  angular.module('d7-services.commons', [
    'd7-services.commons.authentication',
    'd7-services.commons.http',
    'd7-services.commons.directives',
    'd7-services.commons.baseChannel',
    'd7-services.commons.baseResource',
    'd7-services.commons.configurations',
    'd7-services.commons.helperService']);

})();