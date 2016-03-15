;(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name d7-services.resources.system.resource:SystemResource
   * @description
   * This service mirrors the Drupal system resource of the services 3.x module.
   * To use this you have to set following line in your Drupal CORS module settings
   * @requires d7-services.resources.system.resourceConstant:SystemResourceConstant
   * @requires d7-services.resources.system.channelConstant:SystemChannelConstant
   * @requires d7-services.commons.baseResource:BaseResource
   * @requires d7-services.commons.configurations:DrupalApiConstant
   */
  angular
    .module('d7-services.resources.system.resource', ['d7-services.commons.configurations', 'd7-services.commons.baseResource', 'd7-services.resources.system.resourceConstant', 'd7-services.resources.system.channel'])
    .factory('SystemResource', SystemResource);


  SystemResource.$inject = ['DrupalApiConstant', 'BaseResource', 'SystemResourceConstant', 'SystemChannel'];

  /** @ngInject */
  function SystemResource(DrupalApiConstant, BaseResource, SystemResourceConstant, SystemChannel) {

    var systemResourceService = {
      connect: connect,
      get_variable: get_variable,
      set_variable: set_variable,
      del_variable: del_variable
    };

    return systemResourceService;

    ////////////

    /**
     * @ngdoc method
     * @name connect
     * @methodOf d7-services.resources.system.resource:SystemResource
     * @description
     * Returns the details of currently logged in user.
     *
     * Method: POST
     * Url: http://drupal_instance/api_endpoint/system/connect
     *
     * @returns  {Promise} Object with session id, session name and a user object.
     *
     * @example
     *
     * performing a system connect request and handling data in promise callback
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .config(function (SystemResource) {
     *    SystemResource.connect()
     *      .then(
     *        function(confirmData) {...},
     *        function(failData) {...}
     *      );
     * }
     * </pre>
     *
     * performing a system connect request and handling data in event callback
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .config(function ($scope, SystemResource, SystemChannel) {
     *    SystemResource.connect();
     *    //subscribe to confirm event
     *    SystemChannel.subConnectConfirmed($scope, function(confirmData) {...});
     *    //subscribe to fail event
     *    SystemChannel.subConnectFailed($scope, function(failData) {...});
     * });
     * </pre>
     */
    function connect() {

      var connectPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + SystemResourceConstant.resourcePath + '/' + SystemResourceConstant.actions.connect,
        requestConfig = {
          method: 'POST',
          url: connectPath
        };

      return BaseResource.request(requestConfig, SystemChannel.pubConnectConfirmed, SystemChannel.pubConnectFailed);

    }

    /**
     * @ngdoc method
     * @name get_variable
     * @methodOf d7-services.resources.system.resource:SystemResource
     * @description
     * Returns a persistent variable.
     * Case-sensitivity of the variable_* functions depends on the database collation used. To avoid problems, always use lower case for persistent variable names.
     *
     * Method: POST
     * Url: http://drupal_instance/api_endpoint/system/get_variable
     *
     * @param {Object} data - The requests data
     * @param {String} data.name - The name of the variable to return, required:true, source:post body
     * @param {String} data._default - The default value to use if this variable has never been set, required:false, source:post body
     *
     * @returns  {Promise} Object with session id, session name and a user object.
     *
     * @example
     *
     * performing a system get_variable request and handling data in promise callback
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .config(function (SystemResource) {
     *    SystemResource.get_variable()
     *      .then(
     *        function(confirmData) {...},
     *        function(failData) {...}
     *      );
     * }
     * </pre>
     *
     * performing a system get_variable request and handling data in event callback
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .config(function ($scope, SystemResource, SystemChannel) {
     *    SystemResource.get_variable();
     *
     *    //subscribe to confirm event
     *    SystemChannel.subGetVariableConfirmed($scope, function(confirmData) {...});
     *    //subscribe to fail event
     *    SystemChannel.subGetVariableFailed($scope, function(failData) {...});
     * });
     * </pre>
     *
     */
    function get_variable(data) {

      var getVariablePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + SystemResourceConstant.resourcePath + '/' + SystemResourceConstant.actions.get_variable,
          requestConfig   = {
            method: 'POST',
            url: getVariablePath,
            data: {
              name: data.name
            }
          };

      if('default' in data) {
        requestConfig.data.default = data.default;
      }

      return BaseResource.request(requestConfig, SystemChannel.pubGetVariableConfirmed, SystemChannel.pubGetVariableFailed);

    }

    /**
     * @ngdoc method
     * @name set_variable
     * @methodOf d7-services.resources.system.resource:SystemResource
     * @description
     * Sets a persistent variable.
     * Case-sensitivity of the variable_* functions depends on the database collation used. To avoid problems, always use lower case for persistent variable names.
     *
     * The data object for this request looks something like this:
     * {
     *   name : 'my_variable_name'
     * }
     *
     * Method: POST
     * Url: http://drupal_instance/api_endpoint/system/set_variable
     *
     * @param {Object} data - The requests data
     * @param {String} data.name - The name of the variable to set, required:true, source:post body
     * @param {String} data.value - The value to set. This can be any PHP data type; these functions take care of serialization as necessary, required:true, source:post body
     *
     * @returns  {Promise} True if successful false if not
     *
     * @example
     *
     * performing a system set_variable request and handling data in promise callback
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .config(function (SystemResource) {
     *    SystemResource.set_variable()
     *      .then(
     *        function(confirmData) {...},
     *        function(failData) {...}
     *      );
     * }
     * </pre>
     *
     * performing a system set_variable request and handling data in event callback
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .config(function ($scope, SystemResource, SystemChannel) {
     *    SystemResource.set_variable({});
     *
     *    //subscribe to confirm event
     *    SystemChannel.subSetVariableConfirmed($scope, function(confirmData) {...});
     *    //subscribe to fail event
     *    SystemChannel.subSetVariableFailed($scope, function(failData) {...});
     * });
     * </pre>
     *
     */
    function set_variable(data) {

      var setVariablePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + SystemResourceConstant.resourcePath + '/' + SystemResourceConstant.actions.set_variable,
        requestConfig = {
          method: 'POST',
          url: setVariablePath,
          data: {
            name: data.name,
            value: data.value
          }
        };

      return BaseResource.request(requestConfig, SystemChannel.pubSetVariableConfirmed, SystemChannel.pubSetVariableFailed);

    }

    /**
     * @ngdoc method
     * @name del_variable
     * @methodOf d7-services.resources.system.resource:SystemResource
     * @description
     * Unsets a persistent variable.
     * Case-sensitivity of the variable_* functions depends on the database collation used. To avoid problems, always use lower case for persistent variable names.
     *
     * Method: POST
     * Url: http://drupal_instance/api_endpoint/system/del_variable
     *
     * @param {Object} data - The requests data
     * @param {String} data.name - The name of the variable to undefine, required:true, source:post body
     *
     *
     * @returns  {Promise} True if successful false if not
     *
     * @example
     *
     * performing a system del_variable request and handling data in promise callback
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .config(function (SystemResource) {
     *    SystemResource.del_variable({})
     *      .then(
     *        function(confirmData) {...},
     *        function(failData) {...}
     *      );
     * }
     * </pre>
     *
     * performing a system del_variable request and handling data in event callback
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .config(function ($scope, SystemResource, SystemChannel) {
     *    SystemResource.del_variable({});
     *
     *    //subscribe to confirm event
     *    SystemChannel.subDelVariableConfirmed($scope, function(confirmData) {...});
     *    //subscribe to fail event
     *    SystemChannel.subDelVariableFailed($scope, function(failData) {...});
     * });
     * </pre>
     */
    function del_variable(data) {

      var delVariablePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + SystemResourceConstant.resourcePath + '/' + SystemResourceConstant.actions.del_variable,
        requestConfig = {
          method: 'POST',
          url: delVariablePath,
          data: {
            name: data.name
          }
        };

      return BaseResource.request(requestConfig, SystemChannel.pubDelVariableConfirmed, SystemChannel.pubDelVariableFailed);

    }

  }

})();