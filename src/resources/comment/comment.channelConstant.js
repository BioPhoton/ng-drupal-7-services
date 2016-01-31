;(function() {
    'use strict';

    /**
	 *  Constants for CommentChannel
	 *  
	 *  NOTE: if you want to change this constant do this in a config section of angular
	 */
	var CommentChannelConstant =  {
	 		// Retrieve action
 			retrieveConfirmed		: 'event:drupal-comment-retrieveConfirmed',
 			retrieveFailed			: 'event:drupal-comment-retrieveFailed',
 			// Create action
 			createConfirmed			: 'event:drupal-comment-createConfirmed',
 			createFailed			: 'event:drupal-comment-createFailed',
 			// Update action
 			updateConfirmed			: 'event:drupal-comment-updateConfirmed',
 			updateFailed			: 'event:drupal-comment-updateFailed',
 			// Delete action	
 			deleteConfirmed			: 'event:drupal-comment-deleteConfirmed',
 			deleteFailed			: 'event:drupal-comment-deleteFailed',
 			// Index action
 			indexConfirmed			: 'event:drupal-comment-indexConfirmed',
 			indexFailed				: 'event:drupal-comment-indexFailed',
 			// countAll action
 			countAllConfirmed	: 'event:drupal-comment-countAllConfirmed',
 			countAllFailed		: 'event:drupal-comment-countAllFailed',
 			// countNew action
 			countNewConfirmed	: 'event:drupal-comment-countNewConfirmed',
 			countNewFailed		: 'event:drupal-comment-countNewFailed',

	};
    
	/**
	 * Comment Channel Constant
	 */
	angular
	    .module('d7-services.resources.comment.channelConstant', [])
	    .constant("CommentChannelConstant", CommentChannelConstant);

})();
