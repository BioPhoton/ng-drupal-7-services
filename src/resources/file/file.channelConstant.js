;(function() {
    'use strict';

    /**
	 *  Constants for FileChannel
	 *  
	 *  NOTE: if you want to change this constant do this in a config section of angular
	 */
	var FileChannelConstant =  {
			// Retrieve action
			retrieveConfirmed		: 'event:drupal-file-retrieveConfirmed',
			retrieveFailed  		: 'event:drupal-file-retrieveFailed',
			// Create action
			createConfirmed		: 'event:drupal-file-createConfirmed',
			createFailed  			: 'event:drupal-file-createFailed',
			// Delete action
			deleteConfirmed		: 'event:drupal-file-deleteConfirmed',
			deleteFailed  			: 'event:drupal-file-deleteFailed',
			// Index action
			indexConfirmed			: 'event:drupal-file-indexConfirmed',
			indexFailed  			: 'event:drupal-file-indexFailed',
			// Files action
			filesConfirmed			: 'event:drupal-file-filesConfirmed',
			filesFailed  			: 'event:drupal-file-filesFailed',
			// Comments action
			commentsConfirmed		: 'event:drupal-file-commentsConfirmed',
			commentsFailed  		: 'event:drupal-file-commentsFailed',
			// Create raw action
			createRawConfirmed		: 'event:drupal-file-createRawConfirmed',
			createRawFailed  		: 'event:drupal-file-createRawFailed',
 			attachFileFailed  		: 'event:drupal-file-attachFileFailed'
	};
    
	/**
	 * File Channel Constant
	 */
	angular
	    .module('ngDrupal7Services-3_x.resources.file.channelConstant', [])
	    .constant("FileChannelConstant", FileChannelConstant);

})();
