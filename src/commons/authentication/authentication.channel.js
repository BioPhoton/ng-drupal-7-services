(function() {
	'use strict';

	/**
	 * Authentication Channel Module
	 */
	angular.module('d7-services.commons.authentication.channel', ['d7-services.commons.baseChannel', 'd7-services.commons.authentication.channelConstant'])
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
        		
    		// login request
    		pubLoginConfirmed 	: pubLoginConfirmed,
    		subLoginConfirmed		: subLoginConfirmed,
    		pubLoginFailed 		: pubLoginFailed,
    		subLoginFailed		: subLoginFailed,	
        	
    		// logout request
    		pubLogoutConfirmed 	: pubLogoutConfirmed,
        	subLogoutConfirmed	: subLogoutConfirmed,
        	pubLogoutFailed 		: pubLogoutFailed,
        	subLogoutFailed		: subLogoutFailed,
        	
        	// refreshConnection request
    		pubRefreshConnectionConfirmed 	: pubRefreshConnectionConfirmed,
        	subRefreshConnectionConfirmed		: subRefreshConnectionConfirmed,
        	pubRefreshConnectionFailed 		: pubRefreshConnectionFailed,
        	subRefreshConnectionFailed		: subRefreshConnectionFailed,
        	
        	// try connect to Drupal
        	pubTryConnectConfirmed	: pubTryConnectConfirmed,
        	subTryConnectConfirmed 	: subTryConnectConfirmed,
        	pubTryConnectFailed		: pubTryConnectFailed,
        	subTryConnectFailed 		: subTryConnectFailed,
    		
        	// Connection state updated
    		pubConnectionStateUpdated 	: pubConnectionStateUpdated,
    		subConnectionStateUpdated		: subConnectionStateUpdated,
    		
    		// Current user updated
    		pubCurrentUserUpdated		: pubCurrentUserUpdated,
    		subCurrentUserUpdated		: subCurrentUserUpdated,
        };
        
        return authenticationChannelService;

        ////////////
        
        //Authentication login request functions
        
        /**
		 * pubLoginConfirmed
		 * 
		 * Publish the AuthenticationLoginConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubLoginConfirmed(args) {
    		var args = args;
    		 
    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.loginConfirmed, args);
    	};
    	
    	 /**
		 * subLoginConfirmed
		 * 
		 * subscribe for the AuthenticationLoginConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subLoginConfirmed function
		 * @param 	{function} scopeHandler The callback handler for AuthenticationLoginConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subLoginConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubScopeHandler = BaseChannel.subRootEmit( AuthenticationChannelConstant.loginConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubScopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubLoginFailed
		 * 
		 * Publish the AuthenticationLoginConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubLoginFailed(args) {
    		var args = {errors: args};
    		
    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.loginFailed, args);
    	};
    	
    	/**
		 * subLoginFailed
		 * 
		 * subscribe for the AuthenticationLoginFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subLoginFailed function
		 * @param 	{function} scopeHandler The callback handler for AuthenticationLoginFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subLoginFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubScopeHandler = BaseChannel.subRootEmit( AuthenticationChannelConstant.loginFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//Authentication logout request functions

    	/**
    	 * pubLogoutConfirmed
    	 * 
    	 * Publish the AuthenticationLogoutConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubLogoutConfirmed(args) {
    		var args = args;
    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.logoutConfirmed, args);
    	};

    	/**
    	 * subLogoutConfirmed
    	 * 
    	 * subscribe for the AuthenticationLogoutConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subLogoutConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for AuthenticationLogoutConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subLogoutConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubScopeHandler = BaseChannel.subRootEmit( AuthenticationChannelConstant.logoutConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubLogoutFailed
    	 * 
    	 * Publish the AuthenticationLogoutConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubLogoutFailed(args) {
    		var args = {errors: args};
    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.logoutFailed, args);
    	};

    	/**
    	 * subLogoutFailed
    	 * 
    	 * subscribe for the AuthenticationLogoutFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subLogoutFailed function
    	 * @param 	{function} scopeHandler The callback handler for AuthenticationLogoutFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subLogoutFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubScopeHandler = BaseChannel.subRootEmit( AuthenticationChannelConstant.logoutFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubScopeHandler;
    	};
    	
    	//__________________________________________________________________________________________________________________________________________
    	
    	
    	//Authentication refresh connection request functions
        
        /**
		 * pubRefreshConnectionConfirmed
		 * 
		 * Publish the AuthenticationRefreshConnectionConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRefreshConnectionConfirmed(args) {
    		var args = args;
    		 
    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.refreshConnectionConfirmed, args);
    	};
    	
    	 /**
		 * subRefreshConnectionConfirmed
		 * 
		 * subscribe for the AuthenticationRefreshConnectionConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRefreshConnectionConfirmed function
		 * @param 	{function} scopeHandler The callback handler for AuthenticationRefreshConnectionConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRefreshConnectionConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubScopeHandler = BaseChannel.subRootEmit( AuthenticationChannelConstant.refreshConnectionConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubScopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubRefreshConnectionFailed
		 * 
		 * Publish the AuthenticationRefreshConnectionConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRefreshConnectionFailed(args) {
    		var args = {errors: args};
    		
    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.refreshConnectionFailed, args);
    	};
    	
    	/**
		 * subRefreshConnectionFailed
		 * 
		 * subscribe for the AuthenticationRefreshConnectionFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRefreshConnectionFailed function
		 * @param 	{function} scopeHandler The callback handler for AuthenticationRefreshConnectionFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRefreshConnectionFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubScopeHandler = BaseChannel.subRootEmit( AuthenticationChannelConstant.refreshConnectionFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	
    	//try connect request functions
        
        /**
		 * pubTryConnectConfirmed
		 * 
		 * Publish the AuthenticationTryConnectConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubTryConnectConfirmed(args) {
    		var args = args;
    		 
    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.tryConnectConfirmed, args);
    	};
    	
    	 /**
		 * subTryConnectConfirmed
		 * 
		 * subscribe for the AuthenticationTryConnectConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subTryConnectConfirmed function
		 * @param 	{function} scopeHandler The callback handler for AuthenticationTryConnectConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subTryConnectConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubScopeHandler = BaseChannel.subRootEmit( AuthenticationChannelConstant.tryConnectConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubScopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubTryConnectFailed
		 * 
		 * Publish the AuthenticationTryConnectConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubTryConnectFailed(args) {
    		var args = {errors: args};
    		
    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.tryConnectFailed, args);
    	};
    	
    	/**
		 * subTryConnectFailed
		 * 
		 * subscribe for the AuthenticationTryConnectFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subTryConnectFailed function
		 * @param 	{function} scopeHandler The callback handler for AuthenticationTryConnectFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subTryConnectFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubScopeHandler = BaseChannel.subRootEmit( AuthenticationChannelConstant.tryConnectFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
        
        /**
		 * pubConnectionStateUpdated
		 * 
		 * Publish the ConnectionStateUpdated updated event with given args
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubConnectionStateUpdated(args) {
    		var args = args;
    		
    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.connectionStateUpdated, args);
    	};
    	
    	 /**
		 * subConnectionStateUpdated
		 * 
		 * subscribe for the ConnectionStateUpdated event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subConnectConfirmed function
		 * @param 	{function} scopeHandler The callback handler for AuthenticationConnectConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subConnectionStateUpdated(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubScopeHandler = BaseChannel.subRootEmit( AuthenticationChannelConstant.connectionStateUpdated, _Scope, scopeHandler, prepArgs);
    		
    		return unsubScopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubCurrentUserUpdated
		 * 
		 * Publish the CurrentUserUpdated event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubCurrentUserUpdated(args) {
    		var args = args;

    		BaseChannel.pubRootEmit(AuthenticationChannelConstant.currentUserUpdated, args);
    	};
    	
    	/**
		 * subCurrentUserUpdated
		 * 
		 * subscribe for the CurrentUserUpdated event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subConnectFailed function
		 * @param 	{function} scopeHandler The callback handler for AuthenticationConnectFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subCurrentUserUpdated(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubScopeHandler = BaseChannel.subRootEmit( AuthenticationChannelConstant.currentUserUpdated, _Scope, scopeHandler, prepArgs);
    		
    		return unsubScopeHandler;
    	};
    	
    	//________________________________________________________________________________________________________________________________________
    	
	};

})();