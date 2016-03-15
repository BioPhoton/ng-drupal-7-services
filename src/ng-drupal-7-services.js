;(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name d7-services:D7Services
   * @description
   * This Module bundles all ng-drupal-7-services modules
   * @requires d7-services.commons:Commons
   * @requires d7-services.resources:Resources
   */
  angular
    .module('d7-services', [
      'd7-services.commons',
      'd7-services.resources'
    ]);
})();