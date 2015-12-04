;(function() {
	'use strict';

	/**
	 * Comment Channel Module
	 */
	angular.module('ngDrupal7Services-3_x.resources.comment.channel', ['ngDrupal7Services-3_x.commons.baseChannel', 'ngDrupal7Services-3_x.resources.comment.channelConstant'])
		   .factory('CommentChannel', CommentChannel);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	CommentChannel.$inject = [ 'BaseChannel', 'CommentChannelConstant' ];
	
	/**
	 * Notification channel for comment resource 
	**/
	
	/** @ngInject */
	function CommentChannel(BaseChannel, CommentChannelConstant) {
	
		//setup and return service            	
        var commentChannelService = {
        		
        	//comment retrieve request
    		pubRetrieveConfirmed 	: pubRetrieveConfirmed,
    		subRetrieveConfirmed	: subRetrieveConfirmed,
    		pubRetrieveFailed 		: pubRetrieveFailed,
    		subRetrieveFailed		: subRetrieveFailed,
    		
        	//comment create request
        	pubCreateConfirmed 		: pubCreateConfirmed,
        	subCreateConfirmed		: subCreateConfirmed,
        	pubCreateFailed 		: pubCreateFailed,
        	subCreateFailed			: subCreateFailed,
        	
        	//comment update request
        	pubUpdateConfirmed 		: pubUpdateConfirmed,
        	subUpdateConfirmed		: subUpdateConfirmed,
        	pubUpdateFailed 		: pubUpdateFailed,
        	subUpdateFailed			: subUpdateFailed,
        	
        	//comment delete request
        	pubDeleteConfirmed 		: pubDeleteConfirmed,
        	subDeleteConfirmed		: subDeleteConfirmed,
        	pubDeleteFailed 		: pubDeleteFailed,
        	subDeleteFailed			: subDeleteFailed,
        	
        	//comment index request
        	pubIndexConfirmed 		: pubIndexConfirmed,
        	subIndexConfirmed		: subIndexConfirmed,
        	pubIndexFailed 			: pubIndexFailed,
        	subIndexFailed			: subIndexFailed,
        	
        	//comment countAll request
        	pubcountAllConfirmed 		: pubcountAllConfirmed,
        	subcountAllConfirmed			: subcountAllConfirmed,
        	pubcountAllFailed 			: pubcountAllFailed,
        	subcountAllFailed			: subcountAllFailed,
        	
        	//comment countNew request
        	pubcountNewConfirmed 		: pubcountNewConfirmed,
        	subcountNewConfirmed		: subcountNewConfirmed,
        	pubcountNewFailed 			: pubcountNewFailed,
        	subcountNewFailed			: subcountNewFailed,
        	
        };
        
        return commentChannelService;

        ////////////
        
        //Comment retrieve request functions
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the CommentRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveConfirmed(args) {
    		BaseChannel.pubRootEmit(CommentChannelConstant.retrieveConfirmed, args);
    	};
    	
    	/**
		 * subRetrieveConfirmed
		 * 
		 * subscribe for the CommentRetrieveConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveConfirmed function
		 * @param 	{function} scopeHandler The callback handler for CommentRetrieveConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveConfirmed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( CommentChannelConstant.retrieveConfirmed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the CommentRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveFailed(args) {
    		BaseChannel.pubRootEmit(CommentChannelConstant.retrieveFailed, args);
    	};
    	
    	/**
		 * subRetrieveFailed
		 * 
		 * subscribe for the CommentRetrieveFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveFailed function
		 * @param 	{function} scopeHandler The callback handler for CommentRetrieveFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveFailed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( CommentChannelConstant.retrieveFailed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//Comment create request functions

    	/**
    	 * pubCreateConfirmed
    	 * 
    	 * Publish the CommentCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateConfirmed(args) {
    		BaseChannel.pubRootEmit(CommentChannelConstant.createConfirmed, args);
    	};

    	/**
    	 * subCreateConfirmed
    	 * 
    	 * subscribe for the CommentCreateConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for CommentCreateConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateConfirmed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( CommentChannelConstant.createConfirmed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubCreateConfirmed
    	 * 
    	 * Publish the CommentCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateFailed(args) {
    		BaseChannel.pubRootEmit(CommentChannelConstant.createFailed, args);
    	};

    	/**
    	 * subCreateFailed
    	 * 
    	 * subscribe for the CommentCreateFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateFailed function
    	 * @param 	{function} scopeHandler The callback handler for CommentCreateFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateFailed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( CommentChannelConstant.createFailed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//Comment update request functions

    	/**
    	 * pubUpdateConfirmed
    	 * 
    	 * Publish the CommentUpdateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUpdateConfirmed(args) {
    		BaseChannel.pubRootEmit(CommentChannelConstant.updateConfirmed, args);
    	};

    	/**
    	 * subUpdateConfirmed
    	 * 
    	 * subscribe for the CommentUpdateConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUpdateConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for CommentUpdateConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUpdateConfirmed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( CommentChannelConstant.updateConfirmed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//###############

    	/**
    	 * pubUpdateConfirmed
    	 * 
    	 * Publish the CommentUpdateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUpdateFailed(args) {
    		BaseChannel.pubRootEmit(CommentChannelConstant.updateFailed, args);
    	};

    	/**
    	 * subUpdateFailed
    	 * 
    	 * subscribe for the CommentUpdateFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUpdateFailed function
    	 * @param 	{function} scopeHandler The callback handler for CommentUpdateFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUpdateFailed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( CommentChannelConstant.updateFailed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//Comment delete request functions

    	/**
    	 * pubDeleteConfirmed
    	 * 
    	 * Publish the CommentDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubDeleteConfirmed(args) {
    		BaseChannel.pubRootEmit(CommentChannelConstant.deleteConfirmed, args);
    	};

    	/**
    	 * subDeleteConfirmed
    	 * 
    	 * subscribe for the CommentDeleteConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subDeleteConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for CommentDeleteConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subDeleteConfirmed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( CommentChannelConstant.deleteConfirmed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubDeleteConfirmed
    	 * 
    	 * Publish the CommentDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubDeleteFailed(args) {
    		BaseChannel.pubRootEmit(CommentChannelConstant.deleteFailed, args);
    	};

    	/**
    	 * subDeleteFailed
    	 * 
    	 * subscribe for the CommentDeleteFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subDeleteFailed function
    	 * @param 	{function} scopeHandler The callback handler for CommentDeleteFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subDeleteFailed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( CommentChannelConstant.deleteFailed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//Comment index request functions

    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the CommentIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexConfirmed(args) {
    		BaseChannel.pubRootEmit(CommentChannelConstant.indexConfirmed, args);
    	};

    	/**
    	 * subIndexConfirmed
    	 * 
    	 * subscribe for the CommentIndexConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for CommentIndexConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexConfirmed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( CommentChannelConstant.indexConfirmed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the CommentIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexFailed(args) {
    		BaseChannel.pubRootEmit(CommentChannelConstant.indexFailed, args);
    	};

    	/**
    	 * subIndexFailed
    	 * 
    	 * subscribe for the CommentIndexFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexFailed function
    	 * @param 	{function} scopeHandler The callback handler for CommentIndexFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexFailed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( CommentChannelConstant.indexFailed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//Comment countAll request functions

    	/**
    	 * pubcountAllConfirmed
    	 * 
    	 * Publish the CommentcountAllConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubcountAllConfirmed(args) {
    		BaseChannel.pubRootEmit(CommentChannelConstant.countAllConfirmed, args);
    	};

    	/**
    	 * subcountAllConfirmed
    	 * 
    	 * subscribe for the CommentcountAllConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subcountAllConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for CommentcountAllConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subcountAllConfirmed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( CommentChannelConstant.countAllConfirmed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubcountAllConfirmed
    	 * 
    	 * Publish the CommentcountAllConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubcountAllFailed(args) {
    		BaseChannel.pubRootEmit(CommentChannelConstant.countAllFailed, args);
    	};

    	/**
    	 * subcountAllFailed
    	 * 
    	 * subscribe for the CommentcountAllFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subcountAllFailed function
    	 * @param 	{function} scopeHandler The callback handler for CommentcountAllFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subcountAllFailed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( CommentChannelConstant.countAllFailed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};
    	
    	//________________________________________________________________________________________________________________________________________
    	
    	//Comment countNew request functions

    	/**
    	 * pubcountNewConfirmed
    	 * 
    	 * Publish the CommentcountNewConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubcountNewConfirmed(args) {
    		BaseChannel.pubRootEmit(CommentChannelConstant.countNewConfirmed, args);
    	};

    	/**
    	 * subcountNewConfirmed
    	 * 
    	 * subscribe for the CommentcountNewConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subcountNewConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for CommentcountNewConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subcountNewConfirmed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( CommentChannelConstant.countNewConfirmed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubcountNewConfirmed
    	 * 
    	 * Publish the CommentcountNewConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubcountNewFailed(args) {
    		BaseChannel.pubRootEmit(CommentChannelConstant.countNewFailed, args);
    	};

    	/**
    	 * subcountNewFailed
    	 * 
    	 * subscribe for the CommentcountNewFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subcountNewFailed function
    	 * @param 	{function} scopeHandler The callback handler for CommentcountNewFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subcountNewFailed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( CommentChannelConstant.countNewFailed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};
    	
    	
	};

})();