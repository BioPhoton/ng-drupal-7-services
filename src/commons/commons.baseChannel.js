;(function () {

  'use strict';

  /**
   * @ngdoc service
   * @name d7-services.commons.baseChannel:BaseChannel
   * @description
   * An abstract notification channel.
   * This service enables you to publish and subscribe data over events in a very fast and efficient way.
   * @see {@link http://slides.com/michael_hladky/event-channel#/|Reacting to changes in AngularJS}
   */
  angular.module('d7-services.commons.baseChannel', [])
    .factory('BaseChannel', BaseChannel);

  BaseChannel.$inject = ['$rootScope'];

  /** @ngInject */
  function BaseChannel($rootScope) {

    var baseChannelService = {
      pubRootEmit: pubRootEmit,
      subRootEmit: subRootEmit
    };

    return baseChannelService;

    ////////////

    /**
     * @ngdoc method
     * @name subRootEmit
     * @methodOf d7-services.commons.baseChannel:BaseChannel
     * @description
     * subscribe for an event published over $rootScope.$emit(event, args)
     *
     * @param  {String} eventName - The events name
     * @param  {Object} _Scope - The scope that calls the channels subscribe function
     * @param  {function} scopeHandler - The callback handler normally defined in the $scopes controller or directive or service
     * @param  {function} mapArgs - A mapper function to customize the given event arguments
     *
     * @return  {function} The unsubscribe function from the $rootScope.on() call
     *
     * @example
     *
     * subscribe to an event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.commons.d7-services.commons.baseChannel'])
     *  .controller('myController',function ($scope,BaseChannel) {
     *    var unsubscribeHandler = BaseChannel.subRootEmit('MY_EVENT', $scope, function(args) {...}, function(args){return args;});
     * }
     * </pre>
     *
     */
    function subRootEmit(eventName, _Scope, scopeHandler, mapArgs) {

      //subscribe with rootScope to event and cache unsubscribe function
      var unsubScopeHandler = $rootScope.$on(eventName, function (event, args) {
        if (typeof mapArgs === 'function') {
          scopeHandler(mapArgs(args));
        } else {
          scopeHandler(args);
        }

      });

      //unsubscribe rootScope listener after scope destruction
      _Scope.$on('$destroy', function () {
        unsubScopeHandler();
      });

      //return he unsubscribe function from the $rootScope.on() call
      return unsubScopeHandler;
    }

    /**
     * @ngdoc method
     * @name pubRootEmit
     * @methodOf d7-services.commons.baseChannel:BaseChannel
     * @description
     * publish an event only to $rootScope using $rootScope.$emit
     *
     * @param  {String} eventName The events name
     * @param  {object} args The events arguments
     *
     * @example
     *
     * publish data with event
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.commons.d7-services.commons.baseChannel'])
     *  .controller('myController', function ($scope,BaseChannel) {
     *    BaseChannel.pubRootEmit('MY_EVENT', {my:'args'});
     * }
     * </pre>
     *
     */
    function pubRootEmit(eventName, args) {
      $rootScope.$emit(eventName, args);
    }

  }

})();