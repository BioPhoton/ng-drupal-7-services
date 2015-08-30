(function() {
	'use strict';

	/**
	 * System Channel Module
	 */
	angular.module('ngDrupal7Services-3_x.resources.system.channel', ['ngDrupal7Services-3_x.commons.baseChannel', 'ngDrupal7Services-3_x.resources.system.channelConstant'])
		   .factory('SystemChannel', SystemChannel);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	SystemChannel.$inject = [ 'BaseChannel', 'SystemChannelConstant' ];
	
	/**
	 * Notification channel for system resource 
	 **/
	/** @ngInject */
	function SystemChannel(BaseChannel, SystemChannelConstant) {
		console.log('in SystemChannel', BaseChannel);
		//setup and return service            	
        var service = {
    		pubSystemConnectConfirmed 	: pubSystemConnectConfirmed,
    		subSystemConnectConfirmed	: subSystemConnectConfirmed
        };
        
        return service;

        ////////////
        
        //System connect request functions
        
        /**
		 * pubSystemConnectConfirmed
		 * 
		 * Publish the SystemConnectConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubSystemConnectConfirmed(args) {
    		//prepare args
    		var args = {user: args};
    		console.log('in pubSystemConnectConfirmed'); 
    		BaseChannel.pubRootEmit(SystemChannelConstant.system_connectConfirmed, args);
    		
    	};
    	
    	 /**
		 * subSystemConnectConfirmed
		 * 
		 * subscribe for the SystemConnectConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subscribe function
		 * @param 	{function} scopeHandler The callback handler normally defined in the $scopes controller or directive or service
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subSystemConnectConfirmed(_Scope, scopeHandler) {
    		console.log('in subSystemConnectConfirmed');
    		//prepares the arguments for the subRootEmit
    		var prepArgs = function (args) { 
    			return args.user; 
    		};
    		
    		//subscribe with rootScope to event and cache unsubscribe function
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_connectConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		//return the unsubscribe function from the BaseChannel.subRootEmit() call
    		return unsubsSopeHandler;
    		
    	};
    	
    	//___________________________________________________________________________________________________________________________________
    	

	};

})();