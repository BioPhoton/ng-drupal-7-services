;(function () {
  'use strict';

  var SystemChannelConstant = {
    // Connect action
    connectConfirmed: 'event:drupal-system-connectConfirmed',
    connectFailed: 'event:drupal-system-connectFailed',
    // Get variable action
    getVariableConfirmed: 'event:drupal-system-getVariableConfirmed',
    getVariableFailed: 'event:drupal-system-getVariableFailed',
    // Set variable action
    setVariableConfirmed: 'event:drupal-system-setVariableConfirmed',
    setVariableFailed: 'event:drupal-system-setVariableFailed',
    // Del variable action
    delVariableConfirmed: 'event:drupal-system-delVariableConfirmed',
    delVariableFailed: 'event:drupal-system-delVariableFailed'
  };

  /**
   * @ngdoc object
   * @name d7-services.resources.system.channelConstant:SystemChannelConstant
   * @description
   *   Constant for the System channel
   * @property {string} connectConfirmed - event name of connect confirm event
   * @property {string} connectFailed - event name of connect failed event

   * @property {string} getVariableConfirmed - event name of getVariable confirm event
   * @property {string} getVariableFailed - event name of getVariable failed event

   * @property {string} setVariableConfirmed - event name of setVariable confirm event
   * @property {string} setVariableFailed - event name of setVariable failed event

   * @property {string} delVariableConfirmed - event name of delVariable confirm event
   * @property {string} delVariableFailed - event name of delVariable failed event
   *
   * @example
   *
   * SystemChannelConstant is editable in config phase
   * <pre>
   * angular
   *  .module('myModule', ['d7-services.resources.system'])
   *  .config(function (SystemChannelConstant) {
   *     SystemChannelConstant.connectConfirmed = 'MY_EVENT_NAME';
   * }
   * </pre>
   *
   * SystemChannelConstant injectable
   * <pre>
   * angular
   *  .module('myModule', ['d7-services.resources.system'])
   *  .controller(function (SystemChannelConstant) {
   *     console.log(SystemChannelConstant.connectConfirmed);
   * }
   * </pre>
   */
  angular
    .module('d7-services.resources.system.channelConstant', [])
    .constant("SystemChannelConstant", SystemChannelConstant);

})();
