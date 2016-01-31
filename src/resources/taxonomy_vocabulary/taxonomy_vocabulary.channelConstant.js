;(function() {
    'use strict';

    /**
	 *  Constants for TaxonomyVocabularyChannel
	 *  
	 *  NOTE: if you want to change this constant do this in a config section of angular
	 */
	var TaxonomyVocabularyChannelConstant =  {
	 		// Retrieve action
 			retrieveConfirmed		: 'event:drupal-taxonomy_vocabulary-retrieveConfirmed',
 			retrieveFailed			: 'event:drupal-taxonomy_vocabulary-retrieveFailed',
 			// Create action
 			createConfirmed			: 'event:drupal-taxonomy_vocabulary-createConfirmed',
 			createFailed			: 'event:drupal-taxonomy_vocabulary-createFailed',
 			// Update action
 			updateConfirmed			: 'event:drupal-taxonomy_vocabulary-updateConfirmed',
 			updateFailed			: 'event:drupal-taxonomy_vocabulary-updateFailed',
 			// Delete action	
 			deleteConfirmed			: 'event:drupal-taxonomy_vocabulary-deleteConfirmed',
 			deleteFailed			: 'event:drupal-taxonomy_vocabulary-deleteFailed',
 			// Index action
 			indexConfirmed			: 'event:drupal-taxonomy_vocabulary-indexConfirmed',
 			indexFailed				: 'event:drupal-taxonomy_vocabulary-indexFailed',
 			// SelectNodes action
 			getTreeConfirmed	: 'event:drupal-taxonomy_vocabulary-getTreeConfirmed',
 			getTreeFailed		: 'event:drupal-taxonomy_vocabulary-getTreeFailed',

	};
    
	/**
	 * TaxonomyVocabulary Channel Constant
	 */
	angular
	    .module('d7-services.resources.taxonomy_vocabulary.channelConstant', [])
	    .constant("TaxonomyVocabularyChannelConstant", TaxonomyVocabularyChannelConstant);

})();
