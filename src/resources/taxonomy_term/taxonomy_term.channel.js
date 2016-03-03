;(function() {
	'use strict';

	/**
	 * TaxonomyTerm Channel Module
	 */
	angular.module('d7-services.resources.taxonomy_term.channel', ['d7-services.commons.baseChannel', 'd7-services.resources.taxonomy_term.channelConstant'])
		   .factory('TaxonomyTermChannel', TaxonomyTermChannel);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	TaxonomyTermChannel.$inject = [ 'BaseChannel', 'TaxonomyTermChannelConstant' ];
	
	/**
	 * Notification channel for taxonomy_term resource 
	**/
	
	/** @ngInject */
	function TaxonomyTermChannel(BaseChannel, TaxonomyTermChannelConstant) {
	
		//setup and return service            	
        var taxonomy_termChannelService = {
        		
        	//taxonomy_term retrieve request
    		pubRetrieveConfirmed 	: pubRetrieveConfirmed,
    		subRetrieveConfirmed	: subRetrieveConfirmed,
    		pubRetrieveFailed 		: pubRetrieveFailed,
    		subRetrieveFailed		: subRetrieveFailed,
    		
        	//taxonomy_term create request
        	pubCreateConfirmed 		: pubCreateConfirmed,
        	subCreateConfirmed		: subCreateConfirmed,
        	pubCreateFailed 		: pubCreateFailed,
        	subCreateFailed			: subCreateFailed,
        	
        	//taxonomy_term update request
        	pubUpdateConfirmed 		: pubUpdateConfirmed,
        	subUpdateConfirmed		: subUpdateConfirmed,
        	pubUpdateFailed 		: pubUpdateFailed,
        	subUpdateFailed			: subUpdateFailed,
        	
        	//taxonomy_term delete request
        	pubDeleteConfirmed 		: pubDeleteConfirmed,
        	subDeleteConfirmed		: subDeleteConfirmed,
        	pubDeleteFailed 		: pubDeleteFailed,
        	subDeleteFailed			: subDeleteFailed,
        	
        	//taxonomy_term index request
        	pubIndexConfirmed 		: pubIndexConfirmed,
        	subIndexConfirmed		: subIndexConfirmed,
        	pubIndexFailed 			: pubIndexFailed,
        	subIndexFailed			: subIndexFailed,
        	
        	//taxonomy_term selectNodes request
        	pubSelectNodesConfirmed 		: pubSelectNodesConfirmed,
        	subSelectNodesConfirmed			: subSelectNodesConfirmed,
        	pubSelectNodesFailed 			: pubSelectNodesFailed,
        	subSelectNodesFailed			: subSelectNodesFailed,
        	
        };
        
        return taxonomy_termChannelService;

        ////////////
        
        //TaxonomyTerm retrieve request functions
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the TaxonomyTermRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveConfirmed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermChannelConstant.retrieveConfirmed, args);
    	};
    	
    	/**
		 * subRetrieveConfirmed
		 * 
		 * subscribe for the TaxonomyTermRetrieveConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveConfirmed function
		 * @param 	{function} scopeHandler The callback handler for TaxonomyTermRetrieveConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyTermChannelConstant.retrieveConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the TaxonomyTermRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveFailed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermChannelConstant.retrieveFailed, args);
    	};
    	
    	/**
		 * subRetrieveFailed
		 * 
		 * subscribe for the TaxonomyTermRetrieveFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveFailed function
		 * @param 	{function} scopeHandler The callback handler for TaxonomyTermRetrieveFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyTermChannelConstant.retrieveFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//TaxonomyTerm create request functions

    	/**
    	 * pubCreateConfirmed
    	 * 
    	 * Publish the TaxonomyTermCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateConfirmed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermChannelConstant.createConfirmed, args);
    	};

    	/**
    	 * subCreateConfirmed
    	 * 
    	 * subscribe for the TaxonomyTermCreateConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermCreateConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyTermChannelConstant.createConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubCreateConfirmed
    	 * 
    	 * Publish the TaxonomyTermCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateFailed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermChannelConstant.createFailed, args);
    	};

    	/**
    	 * subCreateFailed
    	 * 
    	 * subscribe for the TaxonomyTermCreateFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateFailed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermCreateFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyTermChannelConstant.createFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//TaxonomyTerm update request functions

    	/**
    	 * pubUpdateConfirmed
    	 * 
    	 * Publish the TaxonomyTermUpdateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUpdateConfirmed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermChannelConstant.updateConfirmed, args);
    	};

    	/**
    	 * subUpdateConfirmed
    	 * 
    	 * subscribe for the TaxonomyTermUpdateConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUpdateConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermUpdateConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUpdateConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyTermChannelConstant.updateConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############

    	/**
    	 * pubUpdateConfirmed
    	 * 
    	 * Publish the TaxonomyTermUpdateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUpdateFailed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermChannelConstant.updateFailed, args);
    	};

    	/**
    	 * subUpdateFailed
    	 * 
    	 * subscribe for the TaxonomyTermUpdateFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUpdateFailed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermUpdateFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUpdateFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyTermChannelConstant.updateFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//TaxonomyTerm delete request functions

    	/**
    	 * pubDeleteConfirmed
    	 * 
    	 * Publish the TaxonomyTermDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubDeleteConfirmed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermChannelConstant.deleteConfirmed, args);
    	};

    	/**
    	 * subDeleteConfirmed
    	 * 
    	 * subscribe for the TaxonomyTermDeleteConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subDeleteConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermDeleteConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subDeleteConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyTermChannelConstant.deleteConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubDeleteConfirmed
    	 * 
    	 * Publish the TaxonomyTermDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubDeleteFailed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermChannelConstant.deleteFailed, args);
    	};

    	/**
    	 * subDeleteFailed
    	 * 
    	 * subscribe for the TaxonomyTermDeleteFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subDeleteFailed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermDeleteFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subDeleteFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyTermChannelConstant.deleteFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//TaxonomyTerm index request functions

    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the TaxonomyTermIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexConfirmed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermChannelConstant.indexConfirmed, args);
    	};

    	/**
    	 * subIndexConfirmed
    	 * 
    	 * subscribe for the TaxonomyTermIndexConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermIndexConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyTermChannelConstant.indexConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the TaxonomyTermIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexFailed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermChannelConstant.indexFailed, args);
    	};

    	/**
    	 * subIndexFailed
    	 * 
    	 * subscribe for the TaxonomyTermIndexFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexFailed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermIndexFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyTermChannelConstant.indexFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//TaxonomyTerm selectNodes request functions

    	/**
    	 * pubSelectNodesConfirmed
    	 * 
    	 * Publish the TaxonomyTermSelectNodesConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubSelectNodesConfirmed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermChannelConstant.selectNodesConfirmed, args);
    	};

    	/**
    	 * subSelectNodesConfirmed
    	 * 
    	 * subscribe for the TaxonomyTermSelectNodesConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subSelectNodesConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermSelectNodesConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subSelectNodesConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyTermChannelConstant.selectNodesConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubSelectNodesConfirmed
    	 * 
    	 * Publish the TaxonomyTermSelectNodesConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubSelectNodesFailed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermChannelConstant.selectNodesFailed, args);
    	};

    	/**
    	 * subSelectNodesFailed
    	 * 
    	 * subscribe for the TaxonomyTermSelectNodesFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subSelectNodesFailed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermSelectNodesFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subSelectNodesFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyTermChannelConstant.selectNodesFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};
    	
	};

})();