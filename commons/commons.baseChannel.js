(function() {
	'use strict';

	/**
	 * System Channel Module
	 */
	angular.module('ngDrupal7Services-3_x.commons.baseChannel', [])
		   .factory('baseChannel', baseChannel);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	baseChannel.$inject = [ '$rootScope' ];
	
	/**
	 * The channels basic publish and subscribe functions
	 * 
	 **/
	/** @ngInject */
	function baseChannel($rootScope) {
		//setup and return service            	
        var service = {
    		pubRootEmit 	: pubRootEmit,
        	subRootEmit		: subRootEmit
        };
        
        return service;

        ////////////

        /**
		 * subRootEmit
		 * 
		 * subscribe for an event published over $rootScope.$emit(event, args)
	     *
		 * @param 	{String} eventName The events name
		 * @param 	{Object} _Scope The scope that calls the channels subscribe function
		 * @param 	{function} scopeHandler The callback handler normally defined in the $scopes controller or directive or service
		 * @param 	{function} $mapArgs A mapper function to customize the given event arguments 
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
     	var subRootEmit = function(eventName, _Scope, scopeHandler, mapArgs) {
     		
     		//subscribe with rootScope to event and cache unsubscribe function
     		var unsubsSopeHandler = $rootScope.$on(eventName, function(event, args) {
     			scopeHandler(mapArgs(args));
     		 });
     		 
     		//unsubscribe rootScope listener after scope destruction
     		$scope.$on('$destroy', function() {
     			unsubScopeHandler();
     		});
     		
     		//return he unsubscribe function from the $rootScope.on() call
     		return unsubscopeHandler;
     	};
     	
     	/**
		 * pubRootEmit
		 * 
		 * publish an event only to $rootScope
	     *
		 * @param 	{String} eventName The events name
		 * @param 	{object} args The events arguments 
		 * 
		**/
     	var pubRootEmit = function(eventName, args) {
     		 $rootScope.$emit(event, args);
     	};
     	
	};

})();