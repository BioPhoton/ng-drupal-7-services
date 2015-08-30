(function() {
	'use strict';

	/**
	 * System Channel Module
	 */
	angular.module('ngDrupal7Services-3_x.resources.system.channel', ['ngDrupal7Services-3_x.commons.baseChannel', 'ngDrupal7Services-3_x.resources.system.channelConstant'])
		   .factory('SystemChannel', SystemChannel);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	SystemChannel.$inject = [ 'BaseChannel', 'SystemChannelConstant' ];
	
	/**
	 * Notification channel for system resource 
	 **/
	/** @ngInject */
	function SystemChannel(BaseChannel, SystemChannelConstant) {
		console.log('in SystemChannel', BaseChannel);
		//setup and return service            	
        var service = {
    		pubSystemConnectConfirmed 	: pubSystemConnectConfirmed,
    		subSystemConnectConfirmed	: subSystemConnectConfirmed
        };
        
        return service;

        ////////////
        
        //System connect request functions
        
        /**
		 * pubSystemConnectConfirmed
		 * 
		 * Publish the SystemConnectConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubSystemConnectConfirmed(args) {
    		var args = {user: args};
    		
    		BaseChannel.pubRootEmit(SystemChannelConstant.system_connectConfirmed, args);
    	};
    	
    	 /**
		 * subSystemConnectConfirmed
		 * 
		 * subscribe for the SystemConnectConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subSystemConnectConfirmed function
		 * @param 	{function} scopeHandler The callback handler for SystemConnectConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subSystemConnectConfirmed(_Scope, scopeHandler) {

    		var prepArgs = function (args) { 
    			return { data: args.user }; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_connectConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//________________________________________________________________________________________________________________________________________
    	

	};

})();