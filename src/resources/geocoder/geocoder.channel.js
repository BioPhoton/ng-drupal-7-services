;(function() {
	'use strict';

	/**
	 * Geocoder Channel Module
	 */
	angular.module('d7-services.resources.geocoder.channel', ['d7-services.commons.baseChannel', 'd7-services.resources.geocoder.channelConstant'])
		   .factory('GeocoderChannel', GeocoderChannel);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	GeocoderChannel.$inject = [ 'BaseChannel', 'GeocoderChannelConstant' ];
	
	/**
	 * Notification channel for geocoder resource 
	**/
	
	/** @ngInject */
	function GeocoderChannel(BaseChannel, GeocoderChannelConstant) {
	
		//setup and return service            	
        var geocoderChannelService = {

        		//Retrieve event
        		pubRetrieveConfirmed	: pubRetrieveConfirmed,
				subRetrieveConfirmed	: subRetrieveConfirmed,
				pubRetrieveFailed		: pubRetrieveFailed,
				subRetrieveFailed 		: subRetrieveFailed,
				// Index action
				pubIndexConfirmed		: pubIndexConfirmed,
				subIndexConfirmed		: subIndexConfirmed,
				pubIndexFailed			: pubIndexFailed,
				subIndexFailed 			: subIndexFailed,
        };
        
        return geocoderChannelService;

        ////////////
        
        //Geocoder retrieve request functions
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the GeocoderRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveConfirmed(args) {
    		BaseChannel.pubRootEmit(GeocoderChannelConstant.retrieveConfirmed, args);
    	};
    	
    	/**
		 * subRetrieveConfirmed
		 * 
		 * subscribe for the GeocoderRetrieveConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveConfirmed function
		 * @param 	{function} scopeHandler The callback handler for GeocoderRetrieveConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( GeocoderChannelConstant.retrieveConfirmed, _Scope, scopeHandler);
    		
    		return unsubScopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the GeocoderRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveFailed(args) {
    		BaseChannel.pubRootEmit(GeocoderChannelConstant.retrieveFailed, args);
    	};
    	
    	/**
		 * subRetrieveFailed
		 * 
		 * subscribe for the GeocoderRetrieveFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveFailed function
		 * @param 	{function} scopeHandler The callback handler for GeocoderRetrieveFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( GeocoderChannelConstant.retrieveFailed, _Scope, scopeHandler);

    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//Geocoder index request functions

    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the GeocoderIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexConfirmed(args) {
    		BaseChannel.pubRootEmit(GeocoderChannelConstant.indexConfirmed, args);
    	};

    	/**
    	 * subIndexConfirmed
    	 * 
    	 * subscribe for the GeocoderIndexConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for GeocoderIndexConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexConfirmed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( GeocoderChannelConstant.indexConfirmed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//###############


    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the GeocoderIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexFailed(args) {
    		BaseChannel.pubRootEmit(GeocoderChannelConstant.indexFailed, args);
    	};

    	/**
    	 * subIndexFailed
    	 * 
    	 * subscribe for the GeocoderIndexFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexFailed function
    	 * @param 	{function} scopeHandler The callback handler for GeocoderIndexFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexFailed(_Scope, scopeHandler) {
    		var unsubScopeHandler = BaseChannel.subRootEmit( GeocoderChannelConstant.indexFailed, _Scope, scopeHandler);
    		return unsubScopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

	};

})();