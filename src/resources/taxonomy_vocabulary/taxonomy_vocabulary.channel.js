;(function() {
	'use strict';

	/**
	 * TaxonomyVocabulary Channel Module
	 */
	angular.module('d7-services.resources.taxonomy_vocabulary.channel', ['d7-services.commons.baseChannel', 'd7-services.resources.taxonomy_vocabulary.channelConstant'])
		   .factory('TaxonomyVocabularyChannel', TaxonomyVocabularyChannel);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	TaxonomyVocabularyChannel.$inject = [ 'BaseChannel', 'TaxonomyVocabularyChannelConstant' ];
	
	/**
	 * Notification channel for taxonomy_vocabulary resource 
	**/
	
	/** @ngInject */
	function TaxonomyVocabularyChannel(BaseChannel, TaxonomyVocabularyChannelConstant) {
	
		//setup and return service            	
        var taxonomy_vocabularyChannelService = {
        		
        	//taxonomy_vocabulary retrieve request
    		pubRetrieveConfirmed 	: pubRetrieveConfirmed,
    		subRetrieveConfirmed	: subRetrieveConfirmed,
    		pubRetrieveFailed 		: pubRetrieveFailed,
    		subRetrieveFailed		: subRetrieveFailed,
    		
        	//taxonomy_vocabulary create request
        	pubCreateConfirmed 		: pubCreateConfirmed,
        	subCreateConfirmed		: subCreateConfirmed,
        	pubCreateFailed 		: pubCreateFailed,
        	subCreateFailed			: subCreateFailed,
        	
        	//taxonomy_vocabulary update request
        	pubUpdateConfirmed 		: pubUpdateConfirmed,
        	subUpdateConfirmed		: subUpdateConfirmed,
        	pubUpdateFailed 		: pubUpdateFailed,
        	subUpdateFailed			: subUpdateFailed,
        	
        	//taxonomy_vocabulary delete request
        	pubDeleteConfirmed 		: pubDeleteConfirmed,
        	subDeleteConfirmed		: subDeleteConfirmed,
        	pubDeleteFailed 		: pubDeleteFailed,
        	subDeleteFailed			: subDeleteFailed,
        	
        	//taxonomy_vocabulary index request
        	pubIndexConfirmed 		: pubIndexConfirmed,
        	subIndexConfirmed		: subIndexConfirmed,
        	pubIndexFailed 			: pubIndexFailed,
        	subIndexFailed			: subIndexFailed,
        	
        	//taxonomy_vocabulary getTree request
        	pubGetTreeConfirmed 		: pubGetTreeConfirmed,
        	subGetTreeConfirmed			: subGetTreeConfirmed,
        	pubGetTreeFailed 			: pubGetTreeFailed,
        	subGetTreeFailed			: subGetTreeFailed,

			//taxonomy_vocabulary retrieveByMachineNameConfirmed request
			pubRetrieveByMachineNameConfirmed 		: pubRetrieveByMachineNameConfirmed,
			subRetrieveByMachineNameConfirmed		: subRetrieveByMachineNameConfirmed,
			pubRetrieveByMachineNameFailed 			: pubRetrieveByMachineNameFailed,
			subRetrieveByMachineNameFailed			: subRetrieveByMachineNameFailed,

        };
        
        return taxonomy_vocabularyChannelService;

        ////////////
        
        //TaxonomyVocabulary retrieve request functions
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the TaxonomyVocabularyRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveConfirmed(args) {
    		BaseChannel.pubRootEmit(TaxonomyVocabularyChannelConstant.retrieveConfirmed, args);
    	};
    	
    	/**
		 * subRetrieveConfirmed
		 * 
		 * subscribe for the TaxonomyVocabularyRetrieveConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveConfirmed function
		 * @param 	{function} scopeHandler The callback handler for TaxonomyVocabularyRetrieveConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyVocabularyChannelConstant.retrieveConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the TaxonomyVocabularyRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveFailed(args) {
    		BaseChannel.pubRootEmit(TaxonomyVocabularyChannelConstant.retrieveFailed, args);
    	};
    	
    	/**
		 * subRetrieveFailed
		 * 
		 * subscribe for the TaxonomyVocabularyRetrieveFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveFailed function
		 * @param 	{function} scopeHandler The callback handler for TaxonomyVocabularyRetrieveFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyVocabularyChannelConstant.retrieveFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//TaxonomyVocabulary create request functions

    	/**
    	 * pubCreateConfirmed
    	 * 
    	 * Publish the TaxonomyVocabularyCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateConfirmed(args) {
    		BaseChannel.pubRootEmit(TaxonomyVocabularyChannelConstant.createConfirmed, args);
    	};

    	/**
    	 * subCreateConfirmed
    	 * 
    	 * subscribe for the TaxonomyVocabularyCreateConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyVocabularyCreateConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyVocabularyChannelConstant.createConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubCreateConfirmed
    	 * 
    	 * Publish the TaxonomyVocabularyCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateFailed(args) {
    		BaseChannel.pubRootEmit(TaxonomyVocabularyChannelConstant.createFailed, args);
    	};

    	/**
    	 * subCreateFailed
    	 * 
    	 * subscribe for the TaxonomyVocabularyCreateFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateFailed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyVocabularyCreateFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyVocabularyChannelConstant.createFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//TaxonomyVocabulary update request functions

    	/**
    	 * pubUpdateConfirmed
    	 * 
    	 * Publish the TaxonomyVocabularyUpdateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUpdateConfirmed(args) {
    		BaseChannel.pubRootEmit(TaxonomyVocabularyChannelConstant.updateConfirmed, args);
    	};

    	/**
    	 * subUpdateConfirmed
    	 * 
    	 * subscribe for the TaxonomyVocabularyUpdateConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUpdateConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyVocabularyUpdateConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUpdateConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyVocabularyChannelConstant.updateConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############

    	/**
    	 * pubUpdateConfirmed
    	 * 
    	 * Publish the TaxonomyVocabularyUpdateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUpdateFailed(args) {
    		BaseChannel.pubRootEmit(TaxonomyVocabularyChannelConstant.updateFailed, args);
    	};

    	/**
    	 * subUpdateFailed
    	 * 
    	 * subscribe for the TaxonomyVocabularyUpdateFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUpdateFailed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyVocabularyUpdateFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUpdateFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyVocabularyChannelConstant.updateFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//TaxonomyVocabulary delete request functions

    	/**
    	 * pubDeleteConfirmed
    	 * 
    	 * Publish the TaxonomyVocabularyDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubDeleteConfirmed(args) {
    		BaseChannel.pubRootEmit(TaxonomyVocabularyChannelConstant.deleteConfirmed, args);
    	};

    	/**
    	 * subDeleteConfirmed
    	 * 
    	 * subscribe for the TaxonomyVocabularyDeleteConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subDeleteConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyVocabularyDeleteConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subDeleteConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyVocabularyChannelConstant.deleteConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubDeleteConfirmed
    	 * 
    	 * Publish the TaxonomyVocabularyDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubDeleteFailed(args) {
    		BaseChannel.pubRootEmit(TaxonomyVocabularyChannelConstant.deleteFailed, args);
    	};

    	/**
    	 * subDeleteFailed
    	 * 
    	 * subscribe for the TaxonomyVocabularyDeleteFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subDeleteFailed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyVocabularyDeleteFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subDeleteFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyVocabularyChannelConstant.deleteFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//TaxonomyVocabulary index request functions

    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the TaxonomyVocabularyIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexConfirmed(args) {
    		BaseChannel.pubRootEmit(TaxonomyVocabularyChannelConstant.indexConfirmed, args);
    	};

    	/**
    	 * subIndexConfirmed
    	 * 
    	 * subscribe for the TaxonomyVocabularyIndexConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyVocabularyIndexConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyVocabularyChannelConstant.indexConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the TaxonomyVocabularyIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexFailed(args) {
    		BaseChannel.pubRootEmit(TaxonomyVocabularyChannelConstant.indexFailed, args);
    	};

    	/**
    	 * subIndexFailed
    	 * 
    	 * subscribe for the TaxonomyVocabularyIndexFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexFailed function
    	 * @param 	{function} scopeHandler The callback handler for TaxonomyVocabularyIndexFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyVocabularyChannelConstant.indexFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

		//TaxonomyVocabulary getTree request functions

		/**
		 * pubGetTreeConfirmed
		 *
		 * Publish the TaxonomyVocabularyGetTreeConfirmed event with giver args
		 *
		 * @param 	{Object} args The events arguments
		 *
		 *
		 **/
		function pubGetTreeConfirmed(args) {
			BaseChannel.pubRootEmit(TaxonomyVocabularyChannelConstant.getTreeConfirmed, args);
		};

		/**
		 * subGetTreeConfirmed
		 *
		 * subscribe for the TaxonomyVocabularyGetTreeConfirmed event
		 *
		 * @param 	{Object} _Scope The scope that calls the channels subGetTreeConfirmed function
		 * @param 	{function} scopeHandler The callback handler for TaxonomyVocabularyGetTreeConfirmed event
		 *
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 *
		 **/
		function subGetTreeConfirmed(_Scope, scopeHandler) {
			var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyVocabularyChannelConstant.getTreeConfirmed, _Scope, scopeHandler);
			return unsubScopeHandler;
		};

		//###############


		/**
		 * pubGetTreeConfirmed
		 *
		 * Publish the TaxonomyVocabularyGetTreeConfirmed event with giver args
		 *
		 * @param 	{Object} args The events arguments
		 *
		 *
		 **/
		function pubGetTreeFailed(args) {
			BaseChannel.pubRootEmit(TaxonomyVocabularyChannelConstant.getTreeFailed, args);
		};

		/**
		 * subGetTreeFailed
		 *
		 * subscribe for the TaxonomyVocabularyGetTreeFailed event
		 *
		 * @param 	{Object} _Scope The scope that calls the channels subGetTreeFailed function
		 * @param 	{function} scopeHandler The callback handler for TaxonomyVocabularyGetTreeFailed event
		 *
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 *
		 **/
		function subGetTreeFailed(_Scope, scopeHandler) {
			var unsubsSopeHandler = BaseChannel.subRootEmit( TaxonomyVocabularyChannelConstant.getTreeFailed, _Scope, scopeHandler);
			return unsubsSopeHandler;
		};

		//________________________________________________________________________________________________________________________________________

		//TaxonomyVocabulary retrieveByMachineNameConfirmed request functions

		/**
		 * pubRetrieveByMachineNameConfirmedConfirmed
		 *
		 * Publish the TaxonomyVocabularyRetrieveByMachineNameConfirmedConfirmed event with giver args
		 *
		 * @param 	{Object} args The events arguments
		 *
		 *
		 **/
		function pubRetrieveByMachineNameConfirmedConfirmed(args) {
			BaseChannel.pubRootEmit(TaxonomyVocabularyChannelConstant.retrieveByMachineNameConfirmedConfirmed, args);
		};

		/**
		 * subRetrieveByMachineNameConfirmedConfirmed
		 *
		 * subscribe for the TaxonomyVocabularyRetrieveByMachineNameConfirmedConfirmed event
		 *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveByMachineNameConfirmedConfirmed function
		 * @param 	{function} scopeHandler The callback handler for TaxonomyVocabularyRetrieveByMachineNameConfirmedConfirmed event
		 *
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 *
		 **/
		function subRetrieveByMachineNameConfirmed(_Scope, scopeHandler) {
			var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyVocabularyChannelConstant.retrieveByMachineNameConfirmed, _Scope, scopeHandler);
			return unsubScopeHandler;
		};

		//###############


		/**
		 * pubRetrieveByMachineNameConfirmedConfirmed
		 *
		 * Publish the TaxonomyVocabularyRetrieveByMachineNameConfirmedConfirmed event with giver args
		 *
		 * @param 	{Object} args The events arguments
		 *
		 *
		 **/
		function pubRetrieveByMachineNameConfirmedFailed(args) {
			BaseChannel.pubRootEmit(TaxonomyVocabularyChannelConstant.retrieveByMachineNameConfirmedFailed, args);
		};

		/**
		 * subRetrieveByMachineNameConfirmedFailed
		 *
		 * subscribe for the TaxonomyVocabularyRetrieveByMachineNameConfirmedFailed event
		 *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveByMachineNameConfirmedFailed function
		 * @param 	{function} scopeHandler The callback handler for TaxonomyVocabularyRetrieveByMachineNameConfirmedFailed event
		 *
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 *
		 **/
		function subRetrieveByMachineNameFailed(_Scope, scopeHandler) {
			var unsubScopeHandler = BaseChannel.subRootEmit( TaxonomyVocabularyChannelConstant.retrieveByMachineNameFailed, _Scope, scopeHandler);
			return unsubScopeHandler;
		};
    	
	};

})();