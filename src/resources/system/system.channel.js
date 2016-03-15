;(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name d7-services.resources.system.channel:SystemChannel
   * @description
   * Notification channel for system resource.
   * This service is used as a SystemResource specific eventbus. It can publish and subscribe to all SystemResources requests events.
   * Every request have its confirm os failed event
   * @requires d7-services.resources.system.channelConstant:SystemChannelConstant
   * @requires d7-services.commons.baseChannel:BaseChannel
   */
  angular.module('d7-services.resources.system.channel', ['d7-services.commons.baseChannel', 'd7-services.resources.system.channelConstant'])
    .factory('SystemChannel', SystemChannel);


  SystemChannel.$inject = ['BaseChannel', 'SystemChannelConstant'];

  /** @ngInject */
  function SystemChannel(BaseChannel, SystemChannelConstant) {


    var systemChannelService = {

      pubConnectConfirmed: pubConnectConfirmed,
      subConnectConfirmed: subConnectConfirmed,
      pubConnectFailed: pubConnectFailed,
      subConnectFailed: subConnectFailed,

      pubGetVariableConfirmed: pubGetVariableConfirmed,
      subGetVariableConfirmed: subGetVariableConfirmed,
      pubGetVariableFailed: pubGetVariableFailed,
      subGetVariableFailed: subGetVariableFailed,

      pubSetVariableConfirmed: pubSetVariableConfirmed,
      subSetVariableConfirmed: subSetVariableConfirmed,
      pubSetVariableFailed: pubSetVariableFailed,
      subSetVariableFailed: subSetVariableFailed,

      pubDelVariableConfirmed : pubDelVariableConfirmed,
      subDelVariableConfirmed : subDelVariableConfirmed,
      pubDelVariableFailed  : pubDelVariableFailed,
      subDelVariableFailed  : subDelVariableFailed

    }

    return systemChannelService;

    ////////////


    /**
     * @ngdoc method
     * @name pubConnectConfirmed
     * @methodOf d7-services.resources.system.channel:SystemChannel
     * @description
     * Publish the SystemConnectConfirmed event with given args
     *
     * @param  {Object} args - The events arguments
     *
     * @example
     * publish data with the connectConfirmed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    SystemChannel.pubConnectConfirmed($scope, function(data){ ... });
     *  });
     * </pre>
     *
     */
    function pubConnectConfirmed(args) {
      BaseChannel.pubRootEmit(SystemChannelConstant.connectConfirmed, args);
    }

    /**
     * @ngdoc method
     * @name subConnectConfirmed
     * @methodOf d7-services.resources.system.channel:SystemChannel
     * @description
     * subscribe for the connectConfirmed event
     * unsubscribes automatically on scopes destroy event
     *
     * @param {object} _Scope - scope that subscribes to event
     * @param {Function} scopeHandler - Callback function for the event
     *
     * @returns {Function} The unsubscribe function from the $rootScope.on() call
     *
     * @example
     * subscribe to the connectConfirmed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    SystemChannel.subConnectConfirmed($scope, function(data){ ... });
     *  });
     * </pre>
     *
     * unsubscribe from the connectConfirmed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    var unsub = SystemChannel.subConnectConfirmed($scope, function(data){ ... });
     *    //unsubscribe here
     *    unsub();
     *  });
     * </pre>
     *
     */
    function subConnectConfirmed(_Scope, scopeHandler) {
      var unsubScopeHandler = BaseChannel.subRootEmit(SystemChannelConstant.connectConfirmed, _Scope, scopeHandler);
      return unsubScopeHandler;
    }

    //###############

    /**
     * @ngdoc method
     * @name pubConnectFailed
     * @methodOf d7-services.resources.system.channel:SystemChannel
     * @description
     * Publish the connectFailed event with given args
     *
     * @param  {Object} args - The events arguments
     *
     * @example
     * publish data with the connectConfirmed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    SystemChannel.pubConnectFailed($scope, function(data){ ... });
     *  });
     * </pre>
     */
    function pubConnectFailed(args) {
      BaseChannel.pubRootEmit(SystemChannelConstant.connectFailed, args);
    }

    /**
     * @ngdoc method
     * @name subConnectFailed
     * @methodOf d7-services.resources.system.channel:SystemChannel
     * @description
     * subscribe for the connectFailed event
     *
     * @param {object} _Scope - scope that subscribes to event
     * @param {Function} scopeHandler - Callback function for the event
     *
     * @returns {Function} The unsubscribe function from the $rootScope.on() call
     *
     * @example
     * subscribe to the subConnectFailed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    SystemChannel.subConnectFailed($scope, function(data){ ... });
     *  });
     * </pre>
     *
     * unsubscribe from the subConnectFailed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    var unsub = SystemChannel.subConnectFailed($scope, function(data){ ... });
     *    //unsubscribe here
     *    unsub();
     *  });
     * </pre>
     *
     */
    function subConnectFailed(_Scope, scopeHandler) {
      var unsubScopeHandler = BaseChannel.subRootEmit(SystemChannelConstant.connectFailed, _Scope, scopeHandler);
      return unsubScopeHandler;
    }

    //________________________________________________________________________________________________________________________________________

    //System get_variable request functions

    /**
     * @ngdoc method
     * @name pubGetVariableConfirmed
     * @methodOf d7-services.resources.system.channel:SystemChannel
     * @description
     * Publish the getVariableConfirmed event with given args
     *
     * @param  {Object} args - The events arguments
     *
     */
    function pubGetVariableConfirmed(args) {
      BaseChannel.pubRootEmit(SystemChannelConstant.getVariableConfirmed, args);
    }

    /**
     * @ngdoc method
     * @name subGetVariableConfirmed
     * @methodOf d7-services.resources.system.channel:SystemChannel
     * @description
     * subscribe for the getVariableConfirmed event
     *
     * @param {object} _Scope - scope that subscribes to event
     * @param {Function} scopeHandler - Callback function for the event
     *
     * @returns {Function} The unsubscribe function from the $rootScope.on() call
     *
     * @example
     * subscribe to the subGetVariableConfirmed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    SystemChannel.subGetVariableConfirmed($scope, function(data){ ... });
     *  });
     * </pre>
     *
     * unsubscribe from the subGetVariableConfirmed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    var unsub = SystemChannel.subGetVariableConfirmed($scope, function(data){ ... });
     *    //unsubscribe here
     *    unsub();
     *  });
     * </pre>
     *
     */
    function subGetVariableConfirmed(_Scope, scopeHandler) {
      var unsubScopeHandler = BaseChannel.subRootEmit(SystemChannelConstant.getVariableConfirmed, _Scope, scopeHandler);
      return unsubScopeHandler;
    }

    //###############

    /**
     * pubGetVariableFailed
     *
     * Publish the SystemGetVariableFailed event with given args
     *
     * @param  {Object} args The events arguments
     *
     *
     **/
    function pubGetVariableFailed(args) {
      BaseChannel.pubRootEmit(SystemChannelConstant.getVariableFailed, args);
    }

    /**
     * @ngdoc method
     * @name subGetVariableFailed
     * @methodOf d7-services.resources.system.channel:SystemChannel
     * @description
     * subscribe for the getVariableFailed event
     *
     * @param {object} _Scope - scope that subscribes to event
     * @param {Function} scopeHandler - Callback function for the event
     *
     * @returns {Function} The unsubscribe function from the $rootScope.on() call
     *
     * @example
     * subscribe to the subGetVariableFailed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    SystemChannel.subGetVariableFailed($scope, function(data){ ... });
     *  });
     * </pre>
     *
     * unsubscribe from the subGetVariableFailed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    var unsub = SystemChannel.subGetVariableFailed($scope, function(data){ ... });
     *    //unsubscribe here
     *    unsub();
     *  });
     * </pre>
     *
     */
    function subGetVariableFailed(_Scope, scopeHandler) {
      var unsubScopeHandler = BaseChannel.subRootEmit(SystemChannelConstant.getVariableFailed, _Scope, scopeHandler);
      return unsubScopeHandler;
    }

    //________________________________________________________________________________________________________________________________________

    //System set_variable request functions

    /**
     * pubSetVariableConfirmed
     *
     * Publish the SystemSetVariableConfirmed event with given args
     *
     * @param  {Object} args The events arguments
     *
     *
     **/
    function pubSetVariableConfirmed(args) {
      BaseChannel.pubRootEmit(SystemChannelConstant.setVariableConfirmed, args);
    }

    /**
     * @ngdoc method
     * @name subSetVariableConfirmed
     * @methodOf d7-services.resources.system.channel:SystemChannel
     * @description
     * subscribe for the setVariableConfirmed event
     *
     * @param {object} _Scope - scope that subscribes to event
     * @param {Function} scopeHandler - Callback function for the event
     *
     * @returns {Function} The unsubscribe function from the $rootScope.on() call
     *
     * @example
     * subscribe to the subSetVariableConfirmed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    SystemChannel.subSetVariableConfirmed($scope, function(data){ ... });
     *  });
     * </pre>
     *
     * unsubscribe from the subSetVariableConfirmed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    var unsub = SystemChannel.subSetVariableConfirmed($scope, function(data){ ... });
     *    //unsubscribe here
     *    unsub();
     *  });
     * </pre>
     *
     */
    function subSetVariableConfirmed(_Scope, scopeHandler) {
      var unsubScopeHandler = BaseChannel.subRootEmit(SystemChannelConstant.setVariableConfirmed, _Scope, scopeHandler);
      return unsubScopeHandler;
    }

    //###############

    /**
     * pubSetVariableFailed
     *
     * Publish the SystemSetVariableFailed event with given args
     *
     * @param  {Object} args The events arguments
     *
     *
     **/
    function pubSetVariableFailed(args) {
      BaseChannel.pubRootEmit(SystemChannelConstant.setVariableFailed, args);
    }

    /**
     * @ngdoc method
     * @name subSetVariableFailed
     * @methodOf d7-services.resources.system.channel:SystemChannel
     * @description
     * subscribe for the setVariableFailed event
     *
     * @param {object} _Scope - scope that subscribes to event
     * @param {Function} scopeHandler - Callback function for the event
     *
     * @returns {Function} The unsubscribe function from the $rootScope.on() call
     *
     * @example
     * subscribe to the subSetVariableFailed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    SystemChannel.subSetVariableFailed($scope, function(data){ ... });
     *  });
     * </pre>
     *
     * unsubscribe from the subSetVariableFailed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    var unsub = SystemChannel.subSetVariableFailed($scope, function(data){ ... });
     *    //unsubscribe here
     *    unsub();
     *  });
     * </pre>
     *
     */
    function subSetVariableFailed(_Scope, scopeHandler) {
      var unsubScopeHandler = BaseChannel.subRootEmit(SystemChannelConstant.setVariableFailed, _Scope, scopeHandler);
      return unsubScopeHandler;
    }

    //________________________________________________________________________________________________________________________________________

    //System del_variable request functions

    /**
     * pubDelVariableConfirmed
     *
     * Publish the SystemDelVariableConfirmed event with given args
     *
     * @param  {Object} args The events arguments
     *
     *
     **/
    function pubDelVariableConfirmed(args) {
      BaseChannel.pubRootEmit(SystemChannelConstant.delVariableConfirmed, args);
    }

    /**
     * @ngdoc method
     * @name subDelVariableConfirmed
     * @methodOf d7-services.resources.system.channel:SystemChannel
     * @description
     * subscribe for the delVariableConfirmed event
     *
     * @param {object} _Scope - scope that subscribes to event
     * @param {Function} scopeHandler - Callback function for the event
     *
     * @returns {Function} The unsubscribe function from the $rootScope.on() call
     *
     * @example
     * subscribe to the subDelVariableConfirmed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    SystemChannel.subDelVariableConfirmed($scope, function(data){ ... });
     *  });
     * </pre>
     *
     * unsubscribe from the subDelVariableConfirmed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    var unsub = SystemChannel.subDelVariableConfirmed($scope, function(data){ ... });
     *    //unsubscribe here
     *    unsub();
     *  });
     * </pre>
     *
     */
    function subDelVariableConfirmed(_Scope, scopeHandler) {
      var unsubScopeHandler = BaseChannel.subRootEmit(SystemChannelConstant.delVariableConfirmed, _Scope, scopeHandler);
      return unsubScopeHandler;
    }

    //###############

    /**
     * pubDelVariableFailed
     *
     * Publish the SystemDelVariableFailed event with given args
     *
     * @param  {Object} args The events arguments
     *
     *
     **/
    function pubDelVariableFailed(args) {
      BaseChannel.pubRootEmit(SystemChannelConstant.delVariableFailed, args);
    }

    /**
     * @ngdoc method
     * @name subDelVariableFailed
     * @methodOf d7-services.resources.system.channel:SystemChannel
     * @description
     * subscribe for the delVariableFailed event
     *
     * @param {object} _Scope - scope that subscribes to event
     * @param {Function} scopeHandler - Callback function for the event
     *
     * @returns {Function} The unsubscribe function from the $rootScope.on() call
     *
     * @example
     * subscribe to the subDelVariableFailed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    SystemChannel.subDelVariableFailed($scope, function(data){ ... });
     *  });
     * </pre>
     *
     * unsubscribe from the subDelVariableFailed event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.resources.system'])
     *  .controller('myController', function($scope, SystemChannel) {
     *    var unsub = SystemChannel.subDelVariableFailed($scope, function(data){ ... });
     *    //unsubscribe here
     *    unsub();
     *  });
     * </pre>
     *
     */
    function subDelVariableFailed(_Scope, scopeHandler) {
      var unsubScopeHandler = BaseChannel.subRootEmit(SystemChannelConstant.delVariableFailed, _Scope, scopeHandler);
      return unsubScopeHandler;
    }

  }

})();