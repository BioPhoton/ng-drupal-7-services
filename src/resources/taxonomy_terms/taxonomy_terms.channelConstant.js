;(function() {
    'use strict';

    /**
	 *  Constants for TaxonomyTermsChannel
	 *  
	 *  NOTE: if you want to change this constant do this in a config section of angular
	 */
	var TaxonomyTermsChannelConstant =  {
	 		// Retrieve action
 			retrieveConfirmed		: 'event:drupal-taxonomy_terms-retrieveConfirmed',
 			retrieveFailed			: 'event:drupal-taxonomy_terms-retrieveFailed',
 			// Create action
 			createConfirmed			: 'event:drupal-taxonomy_terms-createConfirmed',
 			createFailed			: 'event:drupal-taxonomy_terms-createFailed',
 			// Update action
 			updateConfirmed			: 'event:drupal-taxonomy_terms-updateConfirmed',
 			updateFailed			: 'event:drupal-taxonomy_terms-updateFailed',
 			// Delete action	
 			deleteConfirmed			: 'event:drupal-taxonomy_terms-deleteConfirmed',
 			deleteFailed			: 'event:drupal-taxonomy_terms-deleteFailed',
 			// Index action
 			indexConfirmed			: 'event:drupal-taxonomy_terms-indexConfirmed',
 			indexFailed				: 'event:drupal-taxonomy_terms-indexFailed',
 			// SelectNodes action
 			selectNodesConfirmed	: 'event:drupal-taxonomy_terms-selectNodesConfirmed',
 			selectNodesFailed		: 'event:drupal-taxonomy_terms-selectNodesFailed',

	};
    
	/**
	 * TaxonomyTerms Channel Constant
	 */
	angular
	    .module('ngDrupal7Services-3_x.resources.taxonomy_terms.channelConstant', [])
	    .constant("TaxonomyTermsChannelConstant", TaxonomyTermsChannelConstant);

})();
