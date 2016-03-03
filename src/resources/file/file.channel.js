;(function() {
	'use strict';

	/**
	 * File Channel Module
	 */
	angular.module('d7-services.resources.file.channel', ['d7-services.commons.baseChannel', 'd7-services.resources.file.channelConstant'])
		   .factory('FileChannel', FileChannel);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	FileChannel.$inject = [ 'BaseChannel', 'FileChannelConstant' ];
	
	/**
	 * Notification channel for file resource 
	**/
	
	/** @ngInject */
	function FileChannel(BaseChannel, FileChannelConstant) {
	
		//setup and return service            	
        var fileChannelService = {

        		//Retrieve event
        		pubRetrieveConfirmed	: pubRetrieveConfirmed,
				subRetrieveConfirmed	: subRetrieveConfirmed,
				pubRetrieveFailed		: pubRetrieveFailed,
				subRetrieveFailed 		: subRetrieveFailed,
				// Create action
				pubCreateConfirmed		: pubCreateConfirmed,
				subCreateConfirmed		: subCreateConfirmed,
				pubCreateFailed			: pubCreateFailed,
				subCreateFailed 		: subCreateFailed,
				// Delete action
				pubDeleteConfirmed		: pubDeleteConfirmed,
				subDeleteConfirmed		: subDeleteConfirmed,
				pubDeleteFailed			: pubDeleteFailed,
				subDeleteFailed 		: subDeleteFailed,
				// Index action
				pubIndexConfirmed		: pubIndexConfirmed,
				subIndexConfirmed		: subIndexConfirmed,
				pubIndexFailed			: pubIndexFailed,
				subIndexFailed 			: subIndexFailed,
				// CreateRaw
				pubCreateRawConfirmed	: pubCreateRawConfirmed,
				subCreateRawConfirmed	: subCreateRawConfirmed,
				pubCreateRawFailed		: pubCreateRawFailed,
				subCreateRawFailed 		: subCreateRawFailed

        };
        
        return fileChannelService;

        ////////////
        
        //File retrieve request functions
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the FileRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveConfirmed(args) {
    		BaseChannel.pubRootEmit(FileChannelConstant.retrieveConfirmed, args);
    	};
    	
    	/**
		 * subRetrieveConfirmed
		 * 
		 * subscribe for the FileRetrieveConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveConfirmed function
		 * @param 	{function} scopeHandler The callback handler for FileRetrieveConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( FileChannelConstant.retrieveConfirmed, _Scope, scopeHandler);
    		
    		return unsubScopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the FileRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveFailed(args) {
    		BaseChannel.pubRootEmit(FileChannelConstant.retrieveFailed, args);
    	};
    	
    	/**
		 * subRetrieveFailed
		 * 
		 * subscribe for the FileRetrieveFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveFailed function
		 * @param 	{function} scopeHandler The callback handler for FileRetrieveFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( FileChannelConstant.retrieveFailed, _Scope, scopeHandler);

    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//File create request functions

    	/**
    	 * pubCreateConfirmed
    	 * 
    	 * Publish the FileCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateConfirmed(args) {
    		BaseChannel.pubRootEmit(FileChannelConstant.createConfirmed, args);
    	};

    	/**
    	 * subCreateConfirmed
    	 * 
    	 * subscribe for the FileCreateConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for FileCreateConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( FileChannelConstant.createConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubCreateConfirmed
    	 * 
    	 * Publish the FileCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateFailed(args) {
    		BaseChannel.pubRootEmit(FileChannelConstant.createFailed, args);
    	};

    	/**
    	 * subCreateFailed
    	 * 
    	 * subscribe for the FileCreateFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateFailed function
    	 * @param 	{function} scopeHandler The callback handler for FileCreateFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( FileChannelConstant.createFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
  	
    	//File delete request functions

    	/**
    	 * pubDeleteConfirmed
    	 * 
    	 * Publish the FileDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubDeleteConfirmed(args) {
    		BaseChannel.pubRootEmit(FileChannelConstant.deleteConfirmed, args);
    	};

    	/**
    	 * subDeleteConfirmed
    	 * 
    	 * subscribe for the FileDeleteConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subDeleteConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for FileDeleteConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subDeleteConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( FileChannelConstant.deleteConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubDeleteConfirmed
    	 * 
    	 * Publish the FileDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubDeleteFailed(args) {
    		BaseChannel.pubRootEmit(FileChannelConstant.deleteFailed, args);
    	};

    	/**
    	 * subDeleteFailed
    	 * 
    	 * subscribe for the FileDeleteFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subDeleteFailed function
    	 * @param 	{function} scopeHandler The callback handler for FileDeleteFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subDeleteFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( FileChannelConstant.deleteFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//File index request functions

    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the FileIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexConfirmed(args) {
    		BaseChannel.pubRootEmit(FileChannelConstant.indexConfirmed, args);
    	};

    	/**
    	 * subIndexConfirmed
    	 * 
    	 * subscribe for the FileIndexConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for FileIndexConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( FileChannelConstant.indexConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the FileIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexFailed(args) {
    		BaseChannel.pubRootEmit(FileChannelConstant.indexFailed, args);
    	};

    	/**
    	 * subIndexFailed
    	 * 
    	 * subscribe for the FileIndexFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexFailed function
    	 * @param 	{function} scopeHandler The callback handler for FileIndexFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( FileChannelConstant.indexFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	    	
    	//File create raw request functions

    	/**
    	 * pubCreateRawConfirmed
    	 * 
    	 * Publish the FileCreateRawConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateRawConfirmed(args) {
    		BaseChannel.pubRootEmit(FileChannelConstant.createRawConfirmed, args);
    	};

    	/**
    	 * subCreateRawConfirmed
    	 * 
    	 * subscribe for the FileCreateRawConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateRawConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for FileCreateRawConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateRawConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( FileChannelConstant.createRawConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubCreateRawConfirmed
    	 * 
    	 * Publish the FileCreateRawConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateRawFailed(args) {
    		BaseChannel.pubRootEmit(FileChannelConstant.createRawFailed, args);
    	};

    	/**
    	 * subCreateRawFailed
    	 * 
    	 * subscribe for the FileCreateRawFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateRawFailed function
    	 * @param 	{function} scopeHandler The callback handler for FileCreateRawFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateRawFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( FileChannelConstant.createRawFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
	};

})();