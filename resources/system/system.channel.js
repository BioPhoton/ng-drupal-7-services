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
	
		//setup and return service            	
        var service = {
    		pubSystemConnectConfirmed 	: pubSystemConnectConfirmed,
    		subSystemConnectConfirmed	: subSystemConnectConfirmed,
    		pubSystemConnectFailed 	: pubSystemConnectFailed,
    		subSystemConnectFailed	: subSystemConnectFailed
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
    		var args = {connectionState: args};
    		
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
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_connectConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//________________________________________________________________________________________________________________________________________
    	
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
    	function pubSystemConnectFailed(args) {
    		var args = {errors: args};

    		BaseChannel.pubRootEmit(SystemChannelConstant.system_connectFailed, args);
    	};
    	
    	/**
		 * subSystemConnectFailed
		 * 
		 * subscribe for the SystemConnectFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subSystemConnectFailed function
		 * @param 	{function} scopeHandler The callback handler for SystemConnectFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subSystemConnectFailed(_Scope, scopeHandler) {

    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_connectFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//________________________________________________________________________________________________________________________________________
    	
    	
    

	};

})();