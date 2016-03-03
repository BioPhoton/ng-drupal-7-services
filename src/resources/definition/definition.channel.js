;(function() {
	'use strict';

	/**
	 * Definition Channel Module
	 */
	angular.module('d7-services.resources.definition.channel', ['d7-services.commons.baseChannel', 'd7-services.resources.definition.channelConstant'])
		   .factory('DefinitionChannel', DefinitionChannel);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	DefinitionChannel.$inject = [ 'BaseChannel', 'DefinitionChannelConstant' ];
	
	/**
	 * Notification channel for definition resource 
	**/
	
	/** @ngInject */
	function DefinitionChannel(BaseChannel, DefinitionChannelConstant) {
	
		//setup and return service            	
        var definitionChannelService = {

        	//definition index request
        	pubIndexConfirmed 		: pubIndexConfirmed,
        	subIndexConfirmed		: subIndexConfirmed,
        	pubIndexFailed 			: pubIndexFailed,
        	subIndexFailed			: subIndexFailed
        };
        
        return definitionChannelService;

        ////////////

    	//Definition index request functions

    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the DefinitionIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexConfirmed(args) {
    		BaseChannel.pubRootEmit(DefinitionChannelConstant.indexConfirmed, args);
    	};

    	/**
    	 * subIndexConfirmed
    	 * 
    	 * subscribe for the DefinitionIndexConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for DefinitionIndexConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( DefinitionChannelConstant.indexConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the DefinitionIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexFailed(args) {
    		BaseChannel.pubRootEmit(DefinitionChannelConstant.indexFailed, args);
    	};

    	/**
    	 * subIndexFailed
    	 * 
    	 * subscribe for the DefinitionIndexFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexFailed function
    	 * @param 	{function} scopeHandler The callback handler for DefinitionIndexFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( DefinitionChannelConstant.indexFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
	};

})();