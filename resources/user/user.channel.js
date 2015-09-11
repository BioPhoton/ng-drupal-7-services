;(function() {
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
    		pubRetrieveConfirmed 	: pubRetrieveConfirmed,
    		subRetrieveConfirmed	: subRetrieveConfirmed,
    		pubRetrieveFailed 		: pubRetrieveFailed,
    		subRetrieveFailed		: subRetrieveFailed,
    		
        	//user create request
        	pubCreateConfirmed 		: pubCreateConfirmed,
        	subCreateConfirmed		: subCreateConfirmed,
        	pubCreateFailed 		: pubCreateFailed,
        	subCreateFailed			: subCreateFailed,
        	
        	//user update request
        	pubUpdateConfirmed 		: pubUpdateConfirmed,
        	subUpdateConfirmed		: subUpdateConfirmed,
        	pubUpdateFailed 		: pubUpdateFailed,
        	subUpdateFailed			: subUpdateFailed,
        	
        	//user delete request
        	pubDeleteConfirmed 		: pubDeleteConfirmed,
        	subDeleteConfirmed		: subDeleteConfirmed,
        	pubDeleteFailed 		: pubDeleteFailed,
        	subDeleteFailed			: subDeleteFailed,
        	
        	//user index request
        	pubIndexConfirmed 		: pubIndexConfirmed,
        	subIndexConfirmed		: subIndexConfirmed,
        	pubIndexFailed 			: pubIndexFailed,
        	subIndexFailed			: subIndexFailed,
        	
        	//user token request
        	pubTokenConfirmed 		: pubTokenConfirmed,
        	subTokenConfirmed		: subTokenConfirmed,
        	pubTokenFailed 			: pubTokenFailed,
        	subTokenFailed			: subTokenFailed,
        	
        	//user register request
    		pubRegisterConfirmed 	: pubRegisterConfirmed,
    		subRegisterConfirmed	: subRegisterConfirmed,
    		pubRegisterFailed 		: pubRegisterFailed,
    		subRegisterFailed		: subRegisterFailed,
    		
    		//user register request
    		pubResendWelcomeEmailConfirmed 	: pubResendWelcomeEmailConfirmed,
    		subResendWelcomeEmailConfirmed	: subResendWelcomeEmailConfirmed,
    		pubResendWelcomeEmailFailed 	: pubResendWelcomeEmailFailed,
    		subResendWelcomeEmailFailed		: subResendWelcomeEmailFailed,
    		
    		//user cancel request
    		pubCancelConfirmed 	: pubCancelConfirmed,
    		subCancelConfirmed	: subCancelConfirmed,
    		pubCancelFailed 	: pubCancelFailed,
    		subCancelFailed		: subCancelFailed,
    		
        	//user login request
    		pubLoginConfirmed 	: pubLoginConfirmed,
    		subLoginConfirmed	: subLoginConfirmed,
    		pubLoginFailed 		: pubLoginFailed,
    		subLoginFailed		: subLoginFailed,
    		
    		//user logout request
    		pubLogoutConfirmed 		: pubLogoutConfirmed,
        	subLogoutConfirmed		: subLogoutConfirmed,
        	pubLogoutFailed 		: pubLogoutFailed,
        	subLogoutFailed			: subLogoutFailed,
        	
        	//user password_reset request
        	pubPasswordResetConfirmed 		: pubPasswordResetConfirmed,
        	subPasswordResetConfirmed		: subPasswordResetConfirmed,
        	pubPasswordResetFailed 			: pubPasswordResetFailed,
        	subPasswordResetFailed			: subPasswordResetFailed,

        	//user RequestNewPassword request
        	pubRequestNewPasswordConfirmed 		: pubRequestNewPasswordConfirmed,
        	subRequestNewPasswordConfirmed		: subRequestNewPasswordConfirmed,
        	pubRequestNewPasswordFailed 		: pubRequestNewPasswordFailed,
        	subRequestNewPasswordFailed			: subRequestNewPasswordFailed

        };
        
        return userChannelService;

        ////////////
        
        //User retrieve request functions
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the UserRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveConfirmed(args) {
    		var args = args;
    		BaseChannel.pubRootEmit(UserChannelConstant.user_retrieveConfirmed, args);
    	};
    	
    	/**
		 * subRetrieveConfirmed
		 * 
		 * subscribe for the UserRetrieveConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveConfirmed function
		 * @param 	{function} scopeHandler The callback handler for UserRetrieveConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_retrieveConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the UserRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveFailed(args) {
    		var args = {errors: args};
    		BaseChannel.pubRootEmit(UserChannelConstant.user_retrieveFailed, args);
    	};
    	
    	/**
		 * subRetrieveFailed
		 * 
		 * subscribe for the UserRetrieveFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveFailed function
		 * @param 	{function} scopeHandler The callback handler for UserRetrieveFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_retrieveFailed, _Scope, scopeHandler, prepArgs);

    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//User create request functions

    	/**
    	 * pubCreateConfirmed
    	 * 
    	 * Publish the UserCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateConfirmed(args) {
    		var args = args;
    		console.log('channel pubCreateConfirmed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_createConfirmed, args);
    	};

    	/**
    	 * subCreateConfirmed
    	 * 
    	 * subscribe for the UserCreateConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for UserCreateConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_createConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubCreateConfirmed
    	 * 
    	 * Publish the UserCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubCreateFailed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_createFailed, args);
    	};

    	/**
    	 * subCreateFailed
    	 * 
    	 * subscribe for the UserCreateFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateFailed function
    	 * @param 	{function} scopeHandler The callback handler for UserCreateFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_createFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//User update request functions

    	/**
    	 * pubUpdateConfirmed
    	 * 
    	 * Publish the UserUpdateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUpdateConfirmed(args) {
    		var args = args;
    		console.log('channel pubUpdateConfirmed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_updateConfirmed, args);
    	};

    	/**
    	 * subUpdateConfirmed
    	 * 
    	 * subscribe for the UserUpdateConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUpdateConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for UserUpdateConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUpdateConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_updateConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############

    	/**
    	 * pubUpdateConfirmed
    	 * 
    	 * Publish the UserUpdateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUpdateFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubUpdateFailed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_updateFailed, args);
    	};

    	/**
    	 * subUpdateFailed
    	 * 
    	 * subscribe for the UserUpdateFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUpdateFailed function
    	 * @param 	{function} scopeHandler The callback handler for UserUpdateFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUpdateFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_updateFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//User delete request functions

    	/**
    	 * pubDeleteConfirmed
    	 * 
    	 * Publish the UserDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubDeleteConfirmed(args) {
    		var args = args;
    		console.log('channel pubDeleteConfirmed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_deleteConfirmed, args);
    	};

    	/**
    	 * subDeleteConfirmed
    	 * 
    	 * subscribe for the UserDeleteConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subDeleteConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for UserDeleteConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subDeleteConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_deleteConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubDeleteConfirmed
    	 * 
    	 * Publish the UserDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubDeleteFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubDeleteFailed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_deleteFailed, args);
    	};

    	/**
    	 * subDeleteFailed
    	 * 
    	 * subscribe for the UserDeleteFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subDeleteFailed function
    	 * @param 	{function} scopeHandler The callback handler for UserDeleteFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subDeleteFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_deleteFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//User index request functions

    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the UserIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexConfirmed(args) {
    		var args = args;
    		console.log('channel pubIndexConfirmed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_indexConfirmed, args);
    	};

    	/**
    	 * subIndexConfirmed
    	 * 
    	 * subscribe for the UserIndexConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for UserIndexConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_indexConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the UserIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubIndexFailed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_indexFailed, args);
    	};

    	/**
    	 * subIndexFailed
    	 * 
    	 * subscribe for the UserIndexFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexFailed function
    	 * @param 	{function} scopeHandler The callback handler for UserIndexFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_indexFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//User login request functions
        
        /**
		 * pubLoginConfirmed
		 * 
		 * Publish the UserLoginConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubLoginConfirmed(args) {
    		var args = args;
    		 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_loginConfirmed, args);
    	};
    	
    	 /**
		 * subLoginConfirmed
		 * 
		 * subscribe for the UserLoginConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subLoginConfirmed function
		 * @param 	{function} scopeHandler The callback handler for UserLoginConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subLoginConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_loginConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubLoginFailed
		 * 
		 * Publish the UserLoginConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubLoginFailed(args) {
    		var args = {errors: args};
    		
    		BaseChannel.pubRootEmit(UserChannelConstant.user_loginFailed, args);
    	};
    	
    	/**
		 * subLoginFailed
		 * 
		 * subscribe for the UserLoginFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subLoginFailed function
		 * @param 	{function} scopeHandler The callback handler for UserLoginFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subLoginFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_loginFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//User logout request functions

    	/**
    	 * pubLogoutConfirmed
    	 * 
    	 * Publish the UserLogoutConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubLogoutConfirmed(args) {
    		var args = args;
    		BaseChannel.pubRootEmit(UserChannelConstant.user_logoutConfirmed, args);
    	};

    	/**
    	 * subLogoutConfirmed
    	 * 
    	 * subscribe for the UserLogoutConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subLogoutConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for UserLogoutConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subLogoutConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_logoutConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubLogoutFailed
    	 * 
    	 * Publish the UserLogoutConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubLogoutFailed(args) {
    		var args = {errors: args};
    		BaseChannel.pubRootEmit(UserChannelConstant.user_logoutFailed, args);
    	};

    	/**
    	 * subLogoutFailed
    	 * 
    	 * subscribe for the UserLogoutFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subLogoutFailed function
    	 * @param 	{function} scopeHandler The callback handler for UserLogoutFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subLogoutFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_logoutFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//__________________________________________________________________________________________________________________________________________
    	
    	
    	//User token request functions

    	/**
    	 * pubTokenConfirmed
    	 * 
    	 * Publish the UserTokenConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubTokenConfirmed(args) {
    		var args = args;
    		BaseChannel.pubRootEmit(UserChannelConstant.user_tokenConfirmed, args);
    	};

    	/**
    	 * subTokenConfirmed
    	 * 
    	 * subscribe for the UserTokenConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subTokenConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for UserTokenConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subTokenConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_tokenConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubTokenConfirmed
    	 * 
    	 * Publish the UserTokenConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubTokenFailed(args) {
    		var args = {errors: args};

    		BaseChannel.pubRootEmit(UserChannelConstant.user_tokenFailed, args);
    	};

    	/**
    	 * subTokenFailed
    	 * 
    	 * subscribe for the UserTokenFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subTokenFailed function
    	 * @param 	{function} scopeHandler The callback handler for UserTokenFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subTokenFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_tokenFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//User register request functions

    	/**
    	 * pubRegisterConfirmed
    	 * 
    	 * Publish the UserRegisterConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubRegisterConfirmed(args) {
    		var args = args;
    		BaseChannel.pubRootEmit(UserChannelConstant.user_registerConfirmed, args);
    	};

    	/**
    	 * subRegisterConfirmed
    	 * 
    	 * subscribe for the UserRegisterConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subRegisterConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for UserRegisterConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subRegisterConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_registerConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubRegisterFailed
    	 * 
    	 * Publish the UserRegisterConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubRegisterFailed(args) {
    		var args = {errors: args};

    		BaseChannel.pubRootEmit(UserChannelConstant.user_registerFailed, args);
    	};

    	/**
    	 * subRegisterFailed
    	 * 
    	 * subscribe for the UserRegisterFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subRegisterFailed function
    	 * @param 	{function} scopeHandler The callback handler for UserRegisterFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subRegisterFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_registerFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//User resend_welcome_email request functions

    	/**
    	 * pubResendWelcomeEmailConfirmed
    	 * 
    	 * Publish the UserResendWelcomeEmailConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubResendWelcomeEmailConfirmed(args) {
    		var args = args;
    		BaseChannel.pubRootEmit(UserChannelConstant.user_resend_welcome_emailConfirmed, args);
    	};

    	/**
    	 * subResendWelcomeEmailConfirmed
    	 * 
    	 * subscribe for the UserResendWelcomeEmailConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subResendWelcomeEmailConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for UserResendWelcomeEmailConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subResendWelcomeEmailConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_resend_welcome_emailConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubResendWelcomeEmailFailed
    	 * 
    	 * Publish the UserResendWelcomeEmailConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubResendWelcomeEmailFailed(args) {
    		var args = {errors: args};

    		BaseChannel.pubRootEmit(UserChannelConstant.user_resend_welcome_emailFailed, args);
    	};

    	/**
    	 * subResendWelcomeEmailFailed
    	 * 
    	 * subscribe for the UserResendWelcomeEmailFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subResendWelcomeEmailFailed function
    	 * @param 	{function} scopeHandler The callback handler for UserResendWelcomeEmailFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subResendWelcomeEmailFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_resend_welcome_emailFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//User cancel request functions

    	/**
    	 * pubCancelConfirmed
    	 * 
    	 * Publish the UserCancelConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCancelConfirmed(args) {
    		var args = args;
    		BaseChannel.pubRootEmit(UserChannelConstant.user_cancelConfirmed, args);
    	};

    	/**
    	 * subCancelConfirmed
    	 * 
    	 * subscribe for the UserCancelConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCancelConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for UserCancelConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCancelConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_cancelConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubCancelFailed
    	 * 
    	 * Publish the UserCancelConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCancelFailed(args) {
    		var args = {errors: args};

    		BaseChannel.pubRootEmit(UserChannelConstant.user_cancelFailed, args);
    	};

    	/**
    	 * subCancelFailed
    	 * 
    	 * subscribe for the UserCancelFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCancelFailed function
    	 * @param 	{function} scopeHandler The callback handler for UserCancelFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCancelFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_cancelFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//User password_reset request functions

    	/**
    	 * pubPasswordResetConfirmed
    	 * 
    	 * Publish the UserPasswordResetConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubPasswordResetConfirmed(args) {
    		var args = args;
    		console.log('channel pubPasswordResetConfirmed'); 
    		BaseChannel.pubRootEmit(UserChannelConstant.user_password_resetConfirmed, args);
    	};

    	/**
    	 * subPasswordResetConfirmed
    	 * 
    	 * subscribe for the UserPasswordResetConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subPasswordResetConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for UserPasswordResetConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subPasswordResetConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_password_resetConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubPasswordResetConfirmed
    	 * 
    	 * Publish the UserPasswordResetConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubPasswordResetFailed(args) {
    		var args = {errors: args};
    		BaseChannel.pubRootEmit(UserChannelConstant.user_password_resetFailed, args);
    	};

    	/**
    	 * subPasswordResetFailed
    	 * 
    	 * subscribe for the UserPasswordResetFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subPasswordResetFailed function
    	 * @param 	{function} scopeHandler The callback handler for UserPasswordResetFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subPasswordResetFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_password_resetFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	
    	//User requestNewPassword request functions

    	/**
    	 * pubRequestNewPasswordConfirmed
    	 * 
    	 * Publish the UserRequestNewPasswordConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubRequestNewPasswordConfirmed(args) {
    		var args = args;
    		BaseChannel.pubRootEmit(UserChannelConstant.user_xxxConfirmed, args);
    	};

    	/**
    	 * subRequestNewPasswordConfirmed
    	 * 
    	 * subscribe for the UserRequestNewPasswordConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subRequestNewPasswordConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for UserRequestNewPasswordConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subRequestNewPasswordConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_xxxConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubRequestNewPasswordConfirmed
    	 * 
    	 * Publish the UserRequestNewPasswordConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubRequestNewPasswordFailed(args) {
    		var args = {errors: args};
    		BaseChannel.pubRootEmit(UserChannelConstant.user_xxxFailed, args);
    	};

    	/**
    	 * subRequestNewPasswordFailed
    	 * 
    	 * subscribe for the UserRequestNewPasswordFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subRequestNewPasswordFailed function
    	 * @param 	{function} scopeHandler The callback handler for UserRequestNewPasswordFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subRequestNewPasswordFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( UserChannelConstant.user_requestNewPasswordFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	
    	
	};

})();