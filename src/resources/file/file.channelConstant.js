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

			// Create raw action
			createRawConfirmed		: 'event:drupal-file-createRawConfirmed',
			createRawFailed  		: 'event:drupal-file-createRawFailed'
	};
    
	/**
	 * File Channel Constant
	 */
	angular
	    .module('d7-services.resources.file.channelConstant', [])
	    .constant("FileChannelConstant", FileChannelConstant);

})();
