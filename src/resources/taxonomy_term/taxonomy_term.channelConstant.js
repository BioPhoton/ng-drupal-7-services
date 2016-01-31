;(function() {
    'use strict';

    /**
	 *  Constants for TaxonomyTermChannel
	 *  
	 *  NOTE: if you want to change this constant do this in a config section of angular
	 */
	var TaxonomyTermChannelConstant =  {
	 		// Retrieve action
 			retrieveConfirmed		: 'event:drupal-taxonomy_term-retrieveConfirmed',
 			retrieveFailed			: 'event:drupal-taxonomy_term-retrieveFailed',
 			// Create action
 			createConfirmed			: 'event:drupal-taxonomy_term-createConfirmed',
 			createFailed			: 'event:drupal-taxonomy_term-createFailed',
 			// Update action
 			updateConfirmed			: 'event:drupal-taxonomy_term-updateConfirmed',
 			updateFailed			: 'event:drupal-taxonomy_term-updateFailed',
 			// Delete action	
 			deleteConfirmed			: 'event:drupal-taxonomy_term-deleteConfirmed',
 			deleteFailed			: 'event:drupal-taxonomy_term-deleteFailed',
 			// Index action
 			indexConfirmed			: 'event:drupal-taxonomy_term-indexConfirmed',
 			indexFailed				: 'event:drupal-taxonomy_term-indexFailed',
 			// SelectNodes action
 			selectNodesConfirmed	: 'event:drupal-taxonomy_term-selectNodesConfirmed',
 			selectNodesFailed		: 'event:drupal-taxonomy_term-selectNodesFailed',

	};
    
	/**
	 * TaxonomyTerm Channel Constant
	 */
	angular
	    .module('d7-services.resources.taxonomy_term.channelConstant', [])
	    .constant("TaxonomyTermChannelConstant", TaxonomyTermChannelConstant);

})();
