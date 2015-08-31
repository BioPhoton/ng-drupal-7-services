(function() {
	'use strict';

	/**
	 * Authentication Channel Module
	 */
	angular.module('ngDrupal7Services-3_x.commons.authentication.channel', ['ngDrupal7Services-3_x.commons.baseChannel', 'ngDrupal7Services-3_x.commons.authentication.channelConstant'])
		   .factory('AuthenticationChannel', AuthenticationChannel);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	AuthenticationChannel.$inject = [ 'BaseChannel', 'AuthenticationChannelConstant' ];
	
	/**
	 * Notification channel for authentication service 
	 **/
	/** @ngInject */
	function AuthenticationChannel(BaseChannel, AuthenticationChannelConstant) {
	
		//setup and return service            	
        var authenticationChannelService = {
        		
        	//Connection state updated
    		pubAuthenticationConnectionStateUpdated 	: pubAuthenticationConnectionStateUpdated,
    		subAuthenticationConnectionStateUpdated		: subAuthenticationConnectionStateUpdated,
    		
    		// Current User Updated
    		pubAuthenticationCurrentUserUpdated		: pubAuthenticationCurrentUserUpdated,
    		subAuthenticationCurrentUserUpdated		: subAuthenticationCurrentUserUpdated,
        };
        
        return authenticationChannelService;

        ////////////
        
        /**
		 * pubAuthenticationConnectionStateUpdated
		 * 
		 * Publish the ConnectionStateUpdated updated event with given args
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubAuthenticationConnectionStateUpdated(args) {
    		var args = {state: args};
    		
    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.authentication_connectionStateUpdated, args);
    	};
    	
    	 /**
		 * subAuthenticationConnectionStateUpdated
		 * 
		 * subscribe for the ConnectionStateUpdated event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subAuthenticationConnectConfirmed function
		 * @param 	{function} scopeHandler The callback handler for AuthenticationConnectConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subAuthenticationConnectionStateUpdated(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( AuthenticationChannelConstant.authentication_connectionStateUpdated, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubAuthenticationCurrentUserUpdated
		 * 
		 * Publish the CurrentUserUpdated event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubAuthenticationCurrentUserUpdated(args) {
    		var args = {user: args};

    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.authentication_currentUserUpdated, args);
    	};
    	
    	/**
		 * subAuthenticationCurrentUserUpdated
		 * 
		 * subscribe for the CurrentUserUpdated event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subAuthenticationConnectFailed function
		 * @param 	{function} scopeHandler The callback handler for AuthenticationConnectFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subAuthenticationCurrentUserUpdated(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( AuthenticationChannelConstant.authentication_currentUserUpdated, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//________________________________________________________________________________________________________________________________________
    	
	};

})();