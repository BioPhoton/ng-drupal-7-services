(function() {
	'use strict';

	/**
	 * User Channel Module
	 */
	angular.module('ngDrupal7Services-3_x.resources.user.channel', ['ngDrupal7Services-3_x.commons.baseChannel', 'ngDrupal7Services-3_x.resources.user.channelConstant'])
		   .factory('UserChannel', UserChannel);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	UserChannel.$inject = [ 'BaseChannel', 'UserChannelConstant' ];
	
	/**
	 * Notification channel for user resource 
	**/
	
	/** @ngInject */
	function UserChannel(BaseChannel, UserChannelConstant) {
	
		//setup and return service            	
        var userChannelService = {
        	//user retrieve request
    		pubUserRetrieveConfirmed 	: pubUserRetrieveConfirmed,
    		subUserRetrieveConfirmed	: subUserRetrieveConfirmed,
    		pubUserRetrieveFailed 		: pubUserRetrieveFailed,
    		subUserRetrieveFailed		: subUserRetrieveFailed,
    		//user login request
    		pubUserLoginConfirmed 	: pubUserLoginConfirmed,
    		subUserLoginConfirmed	: subUserLoginConfirmed,
    		pubUserLoginFailed 		: pubUserLoginFailed,
    		subUserLoginFailed		: subUserLoginFailed,
    		//user logout request
    		pubUserLogoutConfirmed 		: pubUserLogoutConfirmed,
        	subUserLogoutConfirmed		: subUserLogoutConfirmed,
        	pubUserLogoutFailed 		: pubUserLogoutFailed,
        	subUserLogoutFailed			: subUserLogoutFailed,
        	//user token request
        	pubUserTokenConfirmed 		: pubUserTokenConfirmed,
        	subUserTokenConfirmed		: subUserTokenConfirmed,
        	pubUserTokenFailed 		: pubUserTokenFailed,
        	subUserTokenFailed			: subUserTokenFailed,

    		
        };
        
        return userChannelService;

        ////////////
        
        //User retrieve request functions
        
        /**
		 * pubUserRetrieveConfirmed
		 * 
		 * Publish the UserRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubUserRetrieveConfirmed(args) {
    		var args = {retrieveionState: args};
    		console.log('channel pubUserRetrieveConfirmed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_retrieveConfirmed, args);
    	};
    	
    	/**
		 * subUserRetrieveConfirmed
		 * 
		 * subscribe for the UserRetrieveConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subUserRetrieveConfirmed function
		 * @param 	{function} scopeHandler The callback handler for UserRetrieveConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subUserRetrieveConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_retrieveConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubUserRetrieveConfirmed
		 * 
		 * Publish the UserRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubUserRetrieveFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubUserRetrieveFailed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_retrieveFailed, args);
    	};
    	
    	/**
		 * subUserRetrieveFailed
		 * 
		 * subscribe for the UserRetrieveFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subUserRetrieveFailed function
		 * @param 	{function} scopeHandler The callback handler for UserRetrieveFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subUserRetrieveFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_retrieveFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    
        
        //User login request functions
        
        /**
		 * pubUserLoginConfirmed
		 * 
		 * Publish the UserLoginConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubUserLoginConfirmed(args) {
    		var args = {loginionState: args};
    		 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_loginConfirmed, args);
    	};
    	
    	 /**
		 * subUserLoginConfirmed
		 * 
		 * subscribe for the UserLoginConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subUserLoginConfirmed function
		 * @param 	{function} scopeHandler The callback handler for UserLoginConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subUserLoginConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_loginConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubUserLoginConfirmed
		 * 
		 * Publish the UserLoginConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubUserLoginFailed(args) {
    		var args = {errors: args};
    		
    		BaseChannel.pubRootEmit(UserChannelConstant.user_loginFailed, args);
    	};
    	
    	/**
		 * subUserLoginFailed
		 * 
		 * subscribe for the UserLoginFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subUserLoginFailed function
		 * @param 	{function} scopeHandler The callback handler for UserLoginFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subUserLoginFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_loginFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//User logout request functions

    	/**
    	 * pubUserLogoutConfirmed
    	 * 
    	 * Publish the UserLogoutConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUserLogoutConfirmed(args) {
    		var args = args;
    		console.log('channel pubUserLogoutConfirmed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_logoutConfirmed, args);
    	};

    	/**
    	 * subUserLogoutConfirmed
    	 * 
    	 * subscribe for the UserLogoutConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUserLogoutConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for UserLogoutConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUserLogoutConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_logoutConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubUserLogoutConfirmed
    	 * 
    	 * Publish the UserLogoutConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUserLogoutFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubUserLogoutFailed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_logoutFailed, args);
    	};

    	/**
    	 * subUserLogoutFailed
    	 * 
    	 * subscribe for the UserLogoutFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUserLogoutFailed function
    	 * @param 	{function} scopeHandler The callback handler for UserLogoutFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUserLogoutFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_logoutFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//__________________________________________________________________________________________________________________________________________
    	
    	
    	//User token request functions

    	/**
    	 * pubUserTokenConfirmed
    	 * 
    	 * Publish the UserTokenConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUserTokenConfirmed(args) {
    		var args = args;
    		console.log('channel pubUserTokenConfirmed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_tokenConfirmed, args);
    	};

    	/**
    	 * subUserTokenConfirmed
    	 * 
    	 * subscribe for the UserTokenConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUserTokenConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for UserTokenConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUserTokenConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_tokenConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubUserTokenConfirmed
    	 * 
    	 * Publish the UserTokenConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUserTokenFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubUserTokenFailed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_tokenFailed, args);
    	};

    	/**
    	 * subUserTokenFailed
    	 * 
    	 * subscribe for the UserTokenFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUserTokenFailed function
    	 * @param 	{function} scopeHandler The callback handler for UserTokenFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUserTokenFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_tokenFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________


    	
	};

})();