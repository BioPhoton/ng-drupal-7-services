;
(function () {
  'use strict';

  var SystemResourceConstant = {
    resourcePath: 'system',
    actions: {
      connect: 'connect',
      get_variable: 'get_variable',
      set_variable: 'set_variable',
      del_variable: 'del_variable'
    }
  };

  /**
   * @ngdoc object
   * @name d7-services.resources.system.resourceConstant:SystemResourceConstant
   * @description
   *   Constant for the System resource
   * @property {string} resourcePath - This is the default alias of Drupal. If you set custom alisa override also this property.
   * @property {object} actions - Subpaths provided for this resource
   * @property {string} actions.connect - connect path
   * @property {string} actions.get_variable - get_variable path
   * @property {string} actions.del_variable - del_variable path
   *
   * @example
   *
   * SystemResourceConstant is editable in config phase
   * <pre>
   * angular
   *  .module('myModule', ['d7-services.resources.system'])
   *  .config(function (SystemResourceConstant) {
   *     SystemResourceConstant.resourcePath = 'my/path';
   * }
   * </pre>
   *
   * SystemResourceConstant injectable
   * <pre>
   * angular
   *  .module('myModule', ['d7-services.resources.system'])
   *  .controller(function (SystemResourceConstant) {
   *     console.log(SystemResourceConstant.resourcePath);
   * }
   * </pre>
   */
  angular
    .module('d7-services.resources.system.resourceConstant', [])
    .constant("SystemResourceConstant", SystemResourceConstant);

})();
