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
        var systemChannelService = {
        		
    		pubSystemConnectConfirmed 	: pubSystemConnectConfirmed,
    		subSystemConnectConfirmed	: subSystemConnectConfirmed,
    		pubSystemConnectFailed 		: pubSystemConnectFailed,
    		subSystemConnectFailed		: subSystemConnectFailed,
    		
    		pubSystemGetVariableConfirmed 	: pubSystemGetVariableConfirmed,
    		subSystemGetVariableConfirmed	: subSystemGetVariableConfirmed,
    		pubSystemGetVariableFailed 		: pubSystemGetVariableFailed,
    		subSystemGetVariableFailed		: subSystemGetVariableFailed,
    		
    		pubSystemSetVariableConfirmed 	: pubSystemSetVariableConfirmed,
    		subSystemSetVariableConfirmed	: subSystemSetVariableConfirmed,
    		pubSystemSetVariableFailed 		: pubSystemSetVariableFailed,
    		subSystemSetVariableFailed		: subSystemSetVariableFailed,
    		
    		pubSystemDelVariableConfirmed 	: pubSystemDelVariableConfirmed,
    		subSystemDelVariableConfirmed	: subSystemDelVariableConfirmed,
    		pubSystemDelVariableFailed 		: pubSystemDelVariableFailed,
    		subSystemDelVariableFailed		: subSystemDelVariableFailed
        };
        
        return systemChannelService;

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
    		var args = args;
    		
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
    	
    	//###############
    	
        
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
    	
    	//System get_variable request functions
        
        /**
		 * pubSystemGetVariableConfirmed
		 * 
		 * Publish the SystemGetVariableConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubSystemGetVariableConfirmed(args) {
    		var args = args;
    		
    		BaseChannel.pubRootEmit(SystemChannelConstant.system_getVariableConfirmed, args);
    	};
    	
    	 /**
		 * subSystemGetVariableConfirmed
		 * 
		 * subscribe for the SystemGetVariableConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subSystemGetVariableConfirmed function
		 * @param 	{function} scopeHandler The callback handler for SystemGetVariableConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subSystemGetVariableConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_getVariableConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubSystemGetVariableFailed
		 * 
		 * Publish the SystemGetVariableFailed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubSystemGetVariableFailed(args) {
    		var args = args;

    		BaseChannel.pubRootEmit(SystemChannelConstant.system_getVariableFailed, args);
    	};
    	
    	/**
		 * subSystemGetVariableFailed
		 * 
		 * subscribe for the SystemGetVariableFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subSystemGetVariableFailed function
		 * @param 	{function} scopeHandler The callback handler for SystemGetVariableFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subSystemGetVariableFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_getVariableFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//________________________________________________________________________________________________________________________________________
    	
    	//System set_variable request functions
        
        /**
		 * pubSystemSetVariableConfirmed
		 * 
		 * Publish the SystemSetVariableConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubSystemSetVariableConfirmed(args) {
    		var args = args;
    		
    		BaseChannel.pubRootEmit(SystemChannelConstant.system_setVariableConfirmed, args);
    	};
    	
    	 /**
		 * subSystemSetVariableConfirmed
		 * 
		 * subscribe for the SystemSetVariableConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subSystemSetVariableConfirmed function
		 * @param 	{function} scopeHandler The callback handler for SystemSetVariableConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subSystemSetVariableConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_setVariableConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubSystemSetVariableFailed
		 * 
		 * Publish the SystemSetVariableFailed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubSystemSetVariableFailed(args) {
    		var args = {errors: args};

    		BaseChannel.pubRootEmit(SystemChannelConstant.system_setVariableFailed, args);
    	};
    	
    	/**
		 * subSystemSetVariableFailed
		 * 
		 * subscribe for the SystemSetVariableFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subSystemSetVariableFailed function
		 * @param 	{function} scopeHandler The callback handler for SystemSetVariableFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subSystemSetVariableFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_setVariableFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//________________________________________________________________________________________________________________________________________
    	
    	//System del_variable request functions
        
        /**
		 * pubSystemDelVariableConfirmed
		 * 
		 * Publish the SystemDelVariableConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubSystemDelVariableConfirmed(args) {
    		var args = args;
    		
    		BaseChannel.pubRootEmit(SystemChannelConstant.system_delVariableConfirmed, args);
    	};
    	
    	 /**
		 * subSystemDelVariableConfirmed
		 * 
		 * subscribe for the SystemDelVariableConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subSystemDelVariableConfirmed function
		 * @param 	{function} scopeHandler The callback handler for SystemDelVariableConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subSystemDelVariableConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_delVariableConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubSystemDelVariableFailed
		 * 
		 * Publish the SystemDelVariableFailed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubSystemDelVariableFailed(args) {
    		var args = {errors: args};

    		BaseChannel.pubRootEmit(SystemChannelConstant.system_delVariableFailed, args);
    	};
    	
    	/**
		 * subSystemDelVariableFailed
		 * 
		 * subscribe for the SystemDelVariableFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subSystemDelVariableFailed function
		 * @param 	{function} scopeHandler The callback handler for SystemDelVariableFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subSystemDelVariableFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_delVariableFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//________________________________________________________________________________________________________________________________________
    	
	};

})();