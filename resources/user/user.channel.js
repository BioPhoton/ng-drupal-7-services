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
        		
    		pubUserRetrieveConfirmed 	: pubUserRetrieveConfirmed,
    		subUserRetrieveConfirmed	: subUserRetrieveConfirmed,
    		pubUserRetrieveFailed 		: pubUserRetrieveFailed,
    		subUserRetrieveFailed		: subUserRetrieveFailed,
    		
    		pubUserLoginConfirmed 	: pubUserLoginConfirmed,
    		subUserLoginConfirmed	: subUserLoginConfirmed,
    		pubUserLoginFailed 		: pubUserLoginFailed,
    		subUserLoginFailed		: subUserLoginFailed,
    		
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
    	
	};

})();