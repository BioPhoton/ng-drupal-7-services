;(function() {
	'use strict';

	/**
	 * Node Channel Module
	 */
	angular.module('d7-services.resources.node.channel', ['d7-services.commons.baseChannel', 'd7-services.resources.node.channelConstant'])
		   .factory('NodeChannel', NodeChannel);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	NodeChannel.$inject = [ 'BaseChannel', 'NodeChannelConstant' ];
	
	/**
	 * Notification channel for node resource 
	**/
	
	/** @ngInject */
	function NodeChannel(BaseChannel, NodeChannelConstant) {
	
		//setup and return service            	
        var nodeChannelService = {
        		
        	//node retrieve request
    		pubRetrieveConfirmed 	: pubRetrieveConfirmed,
    		subRetrieveConfirmed	: subRetrieveConfirmed,
    		pubRetrieveFailed 		: pubRetrieveFailed,
    		subRetrieveFailed		: subRetrieveFailed,
    		
        	//node create request
        	pubCreateConfirmed 		: pubCreateConfirmed,
        	subCreateConfirmed		: subCreateConfirmed,
        	pubCreateFailed 		: pubCreateFailed,
        	subCreateFailed			: subCreateFailed,
        	
        	//node update request
        	pubUpdateConfirmed 		: pubUpdateConfirmed,
        	subUpdateConfirmed		: subUpdateConfirmed,
        	pubUpdateFailed 		: pubUpdateFailed,
        	subUpdateFailed			: subUpdateFailed,
        	
        	//node delete request
        	pubDeleteConfirmed 		: pubDeleteConfirmed,
        	subDeleteConfirmed		: subDeleteConfirmed,
        	pubDeleteFailed 		: pubDeleteFailed,
        	subDeleteFailed			: subDeleteFailed,
        	
        	//node index request
        	pubIndexConfirmed 		: pubIndexConfirmed,
        	subIndexConfirmed		: subIndexConfirmed,
        	pubIndexFailed 			: pubIndexFailed,
        	subIndexFailed			: subIndexFailed,
        	
        	// Files action
     	   	pubFilesConfirmed		: pubFilesConfirmed,
     	   	subFilesConfirmed		: subFilesConfirmed,
     	   	pubFilesFailed			: pubFilesFailed,
     	   	subFilesFailed 			: subFilesFailed,
     	   	
     	   	// Comments action
     	   	pubCommentsConfirmed	: pubCommentsConfirmed,
     	   	subCommentsConfirmed	: subCommentsConfirmed,
     	   	pubCommentsFailed		: pubCommentsFailed,
     	   	subCommentsFailed 		: subCommentsFailed,
     	   	
     	   	// Attachfile action
     	   	pubAttachFileConfirmed	: pubAttachFileConfirmed,
     	   	subAttachFileConfirmed	: subAttachFileConfirmed,
     	   	pubAttachFileFailed		: pubAttachFileFailed,
     	   	subAttachFileFailed 	: subAttachFileFailed

        };
        
        return nodeChannelService;

        ////////////
        
        //Node retrieve request functions
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the NodeRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveConfirmed(args) {
    		BaseChannel.pubRootEmit(NodeChannelConstant.retrieveConfirmed, args);
    	};
    	
    	/**
		 * subRetrieveConfirmed
		 * 
		 * subscribe for the NodeRetrieveConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveConfirmed function
		 * @param 	{function} scopeHandler The callback handler for NodeRetrieveConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.retrieveConfirmed, _Scope, scopeHandler);
    		
    		return unsubScopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the NodeRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveFailed(args) {
    		BaseChannel.pubRootEmit(NodeChannelConstant.retrieveFailed, args);
    	};
    	
    	/**
		 * subRetrieveFailed
		 * 
		 * subscribe for the NodeRetrieveFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveFailed function
		 * @param 	{function} scopeHandler The callback handler for NodeRetrieveFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.retrieveFailed, _Scope, scopeHandler);

    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//Node create request functions

    	/**
    	 * pubCreateConfirmed
    	 * 
    	 * Publish the NodeCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateConfirmed(args) {
    		BaseChannel.pubRootEmit(NodeChannelConstant.createConfirmed, args);
    	};

    	/**
    	 * subCreateConfirmed
    	 * 
    	 * subscribe for the NodeCreateConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for NodeCreateConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.createConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubCreateConfirmed
    	 * 
    	 * Publish the NodeCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateFailed(args) {
    		BaseChannel.pubRootEmit(NodeChannelConstant.createFailed, args);
    	};

    	/**
    	 * subCreateFailed
    	 * 
    	 * subscribe for the NodeCreateFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateFailed function
    	 * @param 	{function} scopeHandler The callback handler for NodeCreateFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.createFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//Node update request functions

    	/**
    	 * pubUpdateConfirmed
    	 * 
    	 * Publish the NodeUpdateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUpdateConfirmed(args) {
    		BaseChannel.pubRootEmit(NodeChannelConstant.updateConfirmed, args);
    	};

    	/**
    	 * subUpdateConfirmed
    	 * 
    	 * subscribe for the NodeUpdateConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUpdateConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for NodeUpdateConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUpdateConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.updateConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############

    	/**
    	 * pubUpdateConfirmed
    	 * 
    	 * Publish the NodeUpdateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUpdateFailed(args) {
    		BaseChannel.pubRootEmit(NodeChannelConstant.updateFailed, args);
    	};

    	/**
    	 * subUpdateFailed
    	 * 
    	 * subscribe for the NodeUpdateFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUpdateFailed function
    	 * @param 	{function} scopeHandler The callback handler for NodeUpdateFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUpdateFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.updateFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//Node delete request functions

    	/**
    	 * pubDeleteConfirmed
    	 * 
    	 * Publish the NodeDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubDeleteConfirmed(args) {
    		BaseChannel.pubRootEmit(NodeChannelConstant.deleteConfirmed, args);
    	};

    	/**
    	 * subDeleteConfirmed
    	 * 
    	 * subscribe for the NodeDeleteConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subDeleteConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for NodeDeleteConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subDeleteConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.deleteConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubDeleteConfirmed
    	 * 
    	 * Publish the NodeDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubDeleteFailed(args) {
    		BaseChannel.pubRootEmit(NodeChannelConstant.deleteFailed, args);
    	};

    	/**
    	 * subDeleteFailed
    	 * 
    	 * subscribe for the NodeDeleteFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subDeleteFailed function
    	 * @param 	{function} scopeHandler The callback handler for NodeDeleteFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subDeleteFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.deleteFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//Node index request functions

    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the NodeIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexConfirmed(args) {
    		BaseChannel.pubRootEmit(NodeChannelConstant.indexConfirmed, args);
    	};

    	/**
    	 * subIndexConfirmed
    	 * 
    	 * subscribe for the NodeIndexConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for NodeIndexConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.indexConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the NodeIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexFailed(args) {
    		BaseChannel.pubRootEmit(NodeChannelConstant.indexFailed, args);
    	};

    	/**
    	 * subIndexFailed
    	 * 
    	 * subscribe for the NodeIndexFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexFailed function
    	 * @param 	{function} scopeHandler The callback handler for NodeIndexFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.indexFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//Node files request functions

    	/**
    	 * pubFilesConfirmed
    	 * 
    	 * Publish the NodeFilesConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubFilesConfirmed(args) {
    		BaseChannel.pubRootEmit(NodeChannelConstant.filesConfirmed, args);
    	};

    	/**
    	 * subFilesConfirmed
    	 * 
    	 * subscribe for the NodeFilesConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subFilesConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for NodeFilesConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subFilesConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.filesConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubFilesConfirmed
    	 * 
    	 * Publish the NodeFilesConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubFilesFailed(args) {
    		BaseChannel.pubRootEmit(NodeChannelConstant.filesFailed, args);
    	};

    	/**
    	 * subFilesFailed
    	 * 
    	 * subscribe for the NodeFilesFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subFilesFailed function
    	 * @param 	{function} scopeHandler The callback handler for NodeFilesFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subFilesFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.filesFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	

    	//Node comments request functions

    	/**
    	 * pubCommentsConfirmed
    	 * 
    	 * Publish the NodeCommentsConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCommentsConfirmed(args) {
    		BaseChannel.pubRootEmit(NodeChannelConstant.commentsConfirmed, args);
    	};

    	/**
    	 * subCommentsConfirmed
    	 * 
    	 * subscribe for the NodeCommentsConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCommentsConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for NodeCommentsConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCommentsConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.commentsConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubCommentsConfirmed
    	 * 
    	 * Publish the NodeCommentsConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCommentsFailed(args) {
    		BaseChannel.pubRootEmit(NodeChannelConstant.commentsFailed, args);
    	};

    	/**
    	 * subCommentsFailed
    	 * 
    	 * subscribe for the NodeCommentsFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCommentsFailed function
    	 * @param 	{function} scopeHandler The callback handler for NodeCommentsFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCommentsFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.commentsFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	


    	//Node attachFile request functions

    	/**
    	* pubAttachFileConfirmed
    	* 
    	* Publish the NodeAttachFileConfirmed event with giver args 
    	*
    	* @param 	{Object} args The events arguments 
    	* 
    	* 
    	**/
    	function pubAttachFileConfirmed(args) {
    		BaseChannel.pubRootEmit(NodeChannelConstant.attachFileConfirmed, args);
    	};

    	/**
    	* subAttachFileConfirmed
    	* 
    	* subscribe for the NodeAttachFileConfirmed event
    	*
    	* @param 	{Object} _Scope The scope that calls the channels subAttachFileConfirmed function
    	* @param 	{function} scopeHandler The callback handler for NodeAttachFileConfirmed event
    	* 
    	* @return 	{function} The unsubscribe function from the $rootScope.on() call
    	* 
    	**/
    	function subAttachFileConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.attachFileConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	* pubAttachFileConfirmed
    	* 
    	* Publish the NodeAttachFileConfirmed event with giver args 
    	*
    	* @param 	{Object} args The events arguments 
    	* 
    	* 
    	**/
    	function pubAttachFileFailed(args) {
    		BaseChannel.pubRootEmit(NodeChannelConstant.attachFileFailed, args);
    	};

    	/**
    	* subAttachFileFailed
    	* 
    	* subscribe for the NodeAttachFileFailed event
    	*
    	* @param 	{Object} _Scope The scope that calls the channels subAttachFileFailed function
    	* @param 	{function} scopeHandler The callback handler for NodeAttachFileFailed event
    	* 
    	* @return 	{function} The unsubscribe function from the $rootScope.on() call
    	* 
    	**/
    	function subAttachFileFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.attachFileFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
	};

})();