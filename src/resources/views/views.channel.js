;(function() {
	'use strict';

	/**
	 * Views Channel Module
	 */
	angular.module('d7-services.resources.views.channel', ['d7-services.commons.baseChannel', 'd7-services.resources.views.channelConstant'])
		   .factory('ViewsChannel', ViewsChannel);

	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	ViewsChannel.$inject = [ 'BaseChannel', 'ViewsChannelConstant' ];
	
	/**
	 * Notification channel for views resource 
	**/
	/** @ngInject */
	function ViewsChannel(BaseChannel, ViewsChannelConstant) {
	
		//setup and return service            	
        var viewsChannelService = {
  
    		pubRetrieveConfirmed 	: pubRetrieveConfirmed,
    		subRetrieveConfirmed		: subRetrieveConfirmed,
    		pubRetrieveFailed 		: pubRetrieveFailed,
    		subRetrieveFailed		: subRetrieveFailed
    		
        };
        
        return viewsChannelService;

        ////////////
        
        //Views retrieve request functions
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the ViewsRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveConfirmed(args) {
    		BaseChannel.pubRootEmit(ViewsChannelConstant.retrieveConfirmed, args);
    	};
    	
    	 /**
		 * subRetrieveConfirmed
		 * 
		 * subscribe for the ViewsRetrieveConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveConfirmed function
		 * @param 	{function} scopeHandler The callback handler for ViewsRetrieveConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( ViewsChannelConstant.retrieveConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the ViewsRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveFailed(args) {
    		BaseChannel.pubRootEmit(ViewsChannelConstant.retrieveFailed, args);
    	};
    	
    	/**
		 * subRetrieveFailed
		 * 
		 * subscribe for the ViewsRetrieveFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveFailed function
		 * @param 	{function} scopeHandler The callback handler for ViewsRetrieveFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( ViewsChannelConstant.retrieveFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};
    	
    	//__________________________________________________________________________________________________________________
	};

})();