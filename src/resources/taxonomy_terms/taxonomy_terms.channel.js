;(function() {
	'use strict';

	/**
	 * TaxonomyTerms Channel Module
	 */
	angular.module('ngDrupal7Services-3_x.resources.taxonomy_terms.channel', ['ngDrupal7Services-3_x.commons.baseChannel', 'ngDrupal7Services-3_x.resources.taxonomy_terms.channelConstant'])
		   .factory('TaxonomyTermsChannel', TaxonomyTermsChannel);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	TaxonomyTermsChannel.$inject = [ 'BaseChannel', 'TaxonomyTermsChannelConstant' ];
	
	/**
	 * Notification channel for taxonomy_terms resource 
	**/
	
	/** @ngInject */
	function TaxonomyTermsChannel(BaseChannel, TaxonomyTermsChannelConstant) {
	
		//setup and return service            	
        var taxonomy_termsChannelService = {
        		
        	//taxonomy_terms retrieve request
    		pubRetrieveConfirmed 	: pubRetrieveConfirmed,
    		subRetrieveConfirmed	: subRetrieveConfirmed,
    		pubRetrieveFailed 		: pubRetrieveFailed,
    		subRetrieveFailed		: subRetrieveFailed,
    		
        	//taxonomy_terms create request
        	pubCreateConfirmed 		: pubCreateConfirmed,
        	subCreateConfirmed		: subCreateConfirmed,
        	pubCreateFailed 		: pubCreateFailed,
        	subCreateFailed			: subCreateFailed,
        	
        	//taxonomy_terms update request
        	pubUpdateConfirmed 		: pubUpdateConfirmed,
        	subUpdateConfirmed		: subUpdateConfirmed,
        	pubUpdateFailed 		: pubUpdateFailed,
        	subUpdateFailed			: subUpdateFailed,
        	
        	//taxonomy_terms delete request
        	pubDeleteConfirmed 		: pubDeleteConfirmed,
        	subDeleteConfirmed		: subDeleteConfirmed,
        	pubDeleteFailed 		: pubDeleteFailed,
        	subDeleteFailed			: subDeleteFailed,
        	
        	//taxonomy_terms index request
        	pubIndexConfirmed 		: pubIndexConfirmed,
        	subIndexConfirmed		: subIndexConfirmed,
        	pubIndexFailed 			: pubIndexFailed,
        	subIndexFailed			: subIndexFailed,
        	
        	//taxonomy_terms selectNodes request
        	pubSelectNodesConfirmed 		: pubSelectNodesConfirmed,
        	subSelectNodesConfirmed			: subSelectNodesConfirmed,
        	pubSelectNodesFailed 			: pubSelectNodesFailed,
        	subSelectNodesFailed			: subSelectNodesFailed,
        	
        };
        
        return taxonomy_termsChannelService;

        ////////////
        
        //TaxonomyTerms retrieve request functions
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the TaxonomyTermsRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveConfirmed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermsChannelConstant.retrieveConfirmed, args);
    	};
    	
    	/**
		 * subRetrieveConfirmed
		 * 
		 * subscribe for the TaxonomyTermsRetrieveConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveConfirmed function
		 * @param 	{function} scopeHandler The callback handler for TaxonomyTermsRetrieveConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveConfirmed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( TaxonomyTermsChannelConstant.retrieveConfirmed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the TaxonomyTermsRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveFailed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermsChannelConstant.retrieveFailed, args);
    	};
    	
    	/**
		 * subRetrieveFailed
		 * 
		 * subscribe for the TaxonomyTermsRetrieveFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveFailed function
		 * @param 	{function} scopeHandler The callback handler for TaxonomyTermsRetrieveFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveFailed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( TaxonomyTermsChannelConstant.retrieveFailed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//TaxonomyTerms create request functions

    	/**
    	 * pubCreateConfirmed
    	 * 
    	 * Publish the TaxonomyTermsCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateConfirmed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermsChannelConstant.createConfirmed, args);
    	};

    	/**
    	 * subCreateConfirmed
    	 * 
    	 * subscribe for the TaxonomyTermsCreateConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermsCreateConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateConfirmed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( TaxonomyTermsChannelConstant.createConfirmed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubCreateConfirmed
    	 * 
    	 * Publish the TaxonomyTermsCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateFailed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermsChannelConstant.createFailed, args);
    	};

    	/**
    	 * subCreateFailed
    	 * 
    	 * subscribe for the TaxonomyTermsCreateFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateFailed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermsCreateFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateFailed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( TaxonomyTermsChannelConstant.createFailed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//TaxonomyTerms update request functions

    	/**
    	 * pubUpdateConfirmed
    	 * 
    	 * Publish the TaxonomyTermsUpdateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUpdateConfirmed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermsChannelConstant.updateConfirmed, args);
    	};

    	/**
    	 * subUpdateConfirmed
    	 * 
    	 * subscribe for the TaxonomyTermsUpdateConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUpdateConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermsUpdateConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUpdateConfirmed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( TaxonomyTermsChannelConstant.updateConfirmed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//###############

    	/**
    	 * pubUpdateConfirmed
    	 * 
    	 * Publish the TaxonomyTermsUpdateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUpdateFailed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermsChannelConstant.updateFailed, args);
    	};

    	/**
    	 * subUpdateFailed
    	 * 
    	 * subscribe for the TaxonomyTermsUpdateFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUpdateFailed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermsUpdateFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUpdateFailed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( TaxonomyTermsChannelConstant.updateFailed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//TaxonomyTerms delete request functions

    	/**
    	 * pubDeleteConfirmed
    	 * 
    	 * Publish the TaxonomyTermsDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubDeleteConfirmed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermsChannelConstant.deleteConfirmed, args);
    	};

    	/**
    	 * subDeleteConfirmed
    	 * 
    	 * subscribe for the TaxonomyTermsDeleteConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subDeleteConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermsDeleteConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subDeleteConfirmed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( TaxonomyTermsChannelConstant.deleteConfirmed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubDeleteConfirmed
    	 * 
    	 * Publish the TaxonomyTermsDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubDeleteFailed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermsChannelConstant.deleteFailed, args);
    	};

    	/**
    	 * subDeleteFailed
    	 * 
    	 * subscribe for the TaxonomyTermsDeleteFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subDeleteFailed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermsDeleteFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subDeleteFailed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( TaxonomyTermsChannelConstant.deleteFailed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//TaxonomyTerms index request functions

    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the TaxonomyTermsIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexConfirmed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermsChannelConstant.indexConfirmed, args);
    	};

    	/**
    	 * subIndexConfirmed
    	 * 
    	 * subscribe for the TaxonomyTermsIndexConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermsIndexConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexConfirmed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( TaxonomyTermsChannelConstant.indexConfirmed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the TaxonomyTermsIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexFailed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermsChannelConstant.indexFailed, args);
    	};

    	/**
    	 * subIndexFailed
    	 * 
    	 * subscribe for the TaxonomyTermsIndexFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexFailed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermsIndexFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexFailed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( TaxonomyTermsChannelConstant.indexFailed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//TaxonomyTerms selectNodes request functions

    	/**
    	 * pubSelectNodesConfirmed
    	 * 
    	 * Publish the TaxonomyTermsSelectNodesConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubSelectNodesConfirmed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermsChannelConstant.selectNodesConfirmed, args);
    	};

    	/**
    	 * subSelectNodesConfirmed
    	 * 
    	 * subscribe for the TaxonomyTermsSelectNodesConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subSelectNodesConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermsSelectNodesConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subSelectNodesConfirmed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( TaxonomyTermsChannelConstant.selectNodesConfirmed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubSelectNodesConfirmed
    	 * 
    	 * Publish the TaxonomyTermsSelectNodesConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubSelectNodesFailed(args) {
    		BaseChannel.pubRootEmit(TaxonomyTermsChannelConstant.selectNodesFailed, args);
    	};

    	/**
    	 * subSelectNodesFailed
    	 * 
    	 * subscribe for the TaxonomyTermsSelectNodesFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subSelectNodesFailed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyTermsSelectNodesFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subSelectNodesFailed(_Scope, scopeHandler) {
    		var unsubsSopeHandler = BaseChannel.subRootEmit( TaxonomyTermsChannelConstant.selectNodesFailed, _Scope, scopeHandler);
    		return unsubsSopeHandler;
    	};
    	
	};

})();