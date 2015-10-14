;(function() {
    'use strict';

    /**
	 *  Constants for NodeChannel
	 *  
	 *  NOTE: if you want to change this constant do this in a config section of angular
	 */
	var NodeChannelConstant =  {
	 		// Retrieve action
 			node_retrieveConfirmed 		: 'event:drupal-node-retrieveConfirmed',
 			node_retrieveFailed  		: 'event:drupal-node-retrieveFailed',
 			// Create action
 			node_createConfirmed		: 'event:drupal-node-createConfirmed',
 			node_createFailed  			: 'event:drupal-node-createFailed',
 			// Update action
 			node_updateConfirmed		: 'event:drupal-node-updateConfirmed',
 			node_updateFailed  			: 'event:drupal-node-updateFailed',
 			// Delete action	
 			node_deleteConfirmed		: 'event:drupal-node-deleteConfirmed',
 			node_deleteFailed  			: 'event:drupal-node-deleteFailed',
 			// Index action
 			node_indexConfirmed  		: 'event:drupal-node-indexConfirmed',
 			node_indexFailed  			: 'event:drupal-node-indexFailed',
 			// Files action
 			node_filesConfirmed			: 'event:drupal-node-filesConfirmed',
 			node_filesFailed  			: 'event:drupal-node-filesFailed',
 			// Comments action
 			node_commentsConfirmed		: 'event:drupal-node-commentsConfirmed',
 			node_commentsFailed  		: 'event:drupal-node-commentsFailed',
 			// Attach file action
 			node_attachFileConfirmed	: 'event:drupal-node-attachFileConfirmed',
 			node_attachFileFailed  		: 'event:drupal-node-attachFileFailed'
	 		
	};
    
	/**
	 * Node Channel Constant
	 */
	angular
	    .module('ngDrupal7Services-3_x.resources.node.channelConstant', [])
	    .constant("NodeChannelConstant", NodeChannelConstant);

})();
