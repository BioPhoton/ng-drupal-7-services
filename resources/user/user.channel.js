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
        	//user create request
        	pubUserCreateConfirmed 		: pubUserCreateConfirmed,
        	subUserCreateConfirmed		: subUserCreateConfirmed,
        	pubUserCreateFailed 		: pubUserCreateFailed,
        	subUserCreateFailed			: subUserCreateFailed,
        	//user update request
        	pubUserUpdateConfirmed 		: pubUserUpdateConfirmed,
        	subUserUpdateConfirmed		: subUserUpdateConfirmed,
        	pubUserUpdateFailed 		: pubUserUpdateFailed,
        	subUserUpdateFailed			: subUserUpdateFailed,
        	//user delete request
        	pubUserDeleteConfirmed 		: pubUserDeleteConfirmed,
        	subUserDeleteConfirmed		: subUserDeleteConfirmed,
        	pubUserDeleteFailed 		: pubUserDeleteFailed,
        	subUserDeleteFailed			: subUserDeleteFailed,
        	//user index request
        	pubUserIndexConfirmed 		: pubUserIndexConfirmed,
        	subUserIndexConfirmed		: subUserIndexConfirmed,
        	pubUserIndexFailed 			: pubUserIndexFailed,
        	subUserIndexFailed			: subUserIndexFailed,
        	
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
        	pubUserTokenFailed 			: pubUserTokenFailed,
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
    		var args = args;
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
    	
    	//User create request functions

    	/**
    	 * pubUserCreateConfirmed
    	 * 
    	 * Publish the UserCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUserCreateConfirmed(args) {
    		var args = args;
    		console.log('channel pubUserCreateConfirmed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_createConfirmed, args);
    	};

    	/**
    	 * subUserCreateConfirmed
    	 * 
    	 * subscribe for the UserCreateConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUserCreateConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for UserCreateConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUserCreateConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_createConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubUserCreateConfirmed
    	 * 
    	 * Publish the UserCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUserCreateFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubUserCreateFailed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_createFailed, args);
    	};

    	/**
    	 * subUserCreateFailed
    	 * 
    	 * subscribe for the UserCreateFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUserCreateFailed function
    	 * @param 	{function} scopeHandler The callback handler for UserCreateFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUserCreateFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_createFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//User update request functions

    	/**
    	 * pubUserUpdateConfirmed
    	 * 
    	 * Publish the UserUpdateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUserUpdateConfirmed(args) {
    		var args = args;
    		console.log('channel pubUserUpdateConfirmed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_updateConfirmed, args);
    	};

    	/**
    	 * subUserUpdateConfirmed
    	 * 
    	 * subscribe for the UserUpdateConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUserUpdateConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for UserUpdateConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUserUpdateConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_updateConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############

    	/**
    	 * pubUserUpdateConfirmed
    	 * 
    	 * Publish the UserUpdateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUserUpdateFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubUserUpdateFailed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_updateFailed, args);
    	};

    	/**
    	 * subUserUpdateFailed
    	 * 
    	 * subscribe for the UserUpdateFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUserUpdateFailed function
    	 * @param 	{function} scopeHandler The callback handler for UserUpdateFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUserUpdateFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_updateFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//User delete request functions

    	/**
    	 * pubUserDeleteConfirmed
    	 * 
    	 * Publish the UserDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUserDeleteConfirmed(args) {
    		var args = args;
    		console.log('channel pubUserDeleteConfirmed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_deleteConfirmed, args);
    	};

    	/**
    	 * subUserDeleteConfirmed
    	 * 
    	 * subscribe for the UserDeleteConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUserDeleteConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for UserDeleteConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUserDeleteConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_deleteConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubUserDeleteConfirmed
    	 * 
    	 * Publish the UserDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUserDeleteFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubUserDeleteFailed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_deleteFailed, args);
    	};

    	/**
    	 * subUserDeleteFailed
    	 * 
    	 * subscribe for the UserDeleteFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUserDeleteFailed function
    	 * @param 	{function} scopeHandler The callback handler for UserDeleteFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUserDeleteFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_deleteFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//User index request functions

    	/**
    	 * pubUserIndexConfirmed
    	 * 
    	 * Publish the UserIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUserIndexConfirmed(args) {
    		var args = args;
    		console.log('channel pubUserIndexConfirmed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_indexConfirmed, args);
    	};

    	/**
    	 * subUserIndexConfirmed
    	 * 
    	 * subscribe for the UserIndexConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUserIndexConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for UserIndexConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUserIndexConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_indexConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubUserIndexConfirmed
    	 * 
    	 * Publish the UserIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUserIndexFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubUserIndexFailed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_indexFailed, args);
    	};

    	/**
    	 * subUserIndexFailed
    	 * 
    	 * subscribe for the UserIndexFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUserIndexFailed function
    	 * @param 	{function} scopeHandler The callback handler for UserIndexFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUserIndexFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_indexFailed, _Scope, scopeHandler, prepArgs);
    		
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
    		var args = args;
    		 
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
		 * pubUserLoginFailed
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
    	 * pubUserLogoutFailed
    	 * 
    	 * Publish the UserLogoutConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUserLogoutFailed(args) {
    		var args = {errors: args};
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