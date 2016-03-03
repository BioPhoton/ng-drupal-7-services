;(function() {
	'use strict';

	/**
	 * Menu Channel Module
	 */
	angular.module('d7-services.resources.menu.channel', ['d7-services.commons.baseChannel', 'd7-services.resources.menu.channelConstant'])
		   .factory('MenuChannel', MenuChannel);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	MenuChannel.$inject = [ 'BaseChannel', 'MenuChannelConstant' ];
	
	/**
	 * Notification channel for menu resource 
	**/
	/** @ngInject */
	function MenuChannel(BaseChannel, MenuChannelConstant) {
	
		//setup and return service            	
        var menuChannelService = {
        		
    		pubRetrieveConfirmed 	: pubRetrieveConfirmed,
    		subRetrieveConfirmed		: subRetrieveConfirmed,
    		pubRetrieveFailed 		: pubRetrieveFailed,
    		subRetrieveFailed		: subRetrieveFailed
    		
        };
        
        return menuChannelService;

        ////////////
        
        //Menu retrieve request functions
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the MenuRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveConfirmed(args) {
    		BaseChannel.pubRootEmit(MenuChannelConstant.retrieveConfirmed, args);
    	};
    	
    	 /**
		 * subRetrieveConfirmed
		 * 
		 * subscribe for the MenuRetrieveConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveConfirmed function
		 * @param 	{function} scopeHandler The callback handler for MenuRetrieveConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( MenuChannelConstant.retrieveConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the MenuRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveFailed(args) {
    		BaseChannel.pubRootEmit(MenuChannelConstant.retrieveFailed, args);
    	};
    	
    	/**
		 * subRetrieveFailed
		 * 
		 * subscribe for the MenuRetrieveFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveFailed function
		 * @param 	{function} scopeHandler The callback handler for MenuRetrieveFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( MenuChannelConstant.retrieveFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

	};

})();