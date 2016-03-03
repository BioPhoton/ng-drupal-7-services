;(function() {
    'use strict';

    /**
	 *  Constants for DefinitionChannel
	 *  
	 *  NOTE: if you want to change this constant do this in a config section of angular
	 */
	var DefinitionChannelConstant =  {
 			// Index action
 			indexConfirmed  		: 'event:drupal-definition-indexConfirmed',
 			indexFailed  			: 'event:drupal-definition-indexFailed'
	};
    
	/**
	 * Definition Channel Constant
	 */
	angular
	    .module('d7-services.resources.definition.channelConstant', [])
	    .constant("DefinitionChannelConstant", DefinitionChannelConstant);

})();
