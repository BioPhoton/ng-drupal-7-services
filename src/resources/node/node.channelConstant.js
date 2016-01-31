;(function() {
    'use strict';

    /**
	 *  Constants for NodeChannel
	 *  
	 *  NOTE: if you want to change this constant do this in a config section of angular
	 */
	var NodeChannelConstant =  {
	 		// Retrieve action
 			retrieveConfirmed 		: 'event:drupal-node-retrieveConfirmed',
 			retrieveFailed  		: 'event:drupal-node-retrieveFailed',
 			// Create action
 			createConfirmed		: 'event:drupal-node-createConfirmed',
 			createFailed  			: 'event:drupal-node-createFailed',
 			// Update action
 			updateConfirmed		: 'event:drupal-node-updateConfirmed',
 			updateFailed  			: 'event:drupal-node-updateFailed',
 			// Delete action	
 			deleteConfirmed		: 'event:drupal-node-deleteConfirmed',
 			deleteFailed  			: 'event:drupal-node-deleteFailed',
 			// Index action
 			indexConfirmed  		: 'event:drupal-node-indexConfirmed',
 			indexFailed  			: 'event:drupal-node-indexFailed',
 			// Files action
 			filesConfirmed			: 'event:drupal-node-filesConfirmed',
 			filesFailed  			: 'event:drupal-node-filesFailed',
 			// Comments action
 			commentsConfirmed		: 'event:drupal-node-commentsConfirmed',
 			commentsFailed  		: 'event:drupal-node-commentsFailed',
 			// Attach file action
 			attachFileConfirmed	: 'event:drupal-node-attachFileConfirmed',
 			attachFileFailed  		: 'event:drupal-node-attachFileFailed'
	 		
	};
    
	/**
	 * Node Channel Constant
	 */
	angular
	    .module('d7-services.resources.node.channelConstant', [])
	    .constant("NodeChannelConstant", NodeChannelConstant);

})();
