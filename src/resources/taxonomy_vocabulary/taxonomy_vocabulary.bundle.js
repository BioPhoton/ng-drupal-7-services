;
(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name d7-services.resources.taxonomy_vocabulary:TaxonomyVocabulary
   * @description
   * This Module bundles all modules related to drupal taxonomy_vocabulary resource
   * @requires d7-services.resources.taxonomy_vocabulary.resourceConstant:TaxonomyVocabularyResourceConstant
   * @requires d7-services.resources.taxonomy_vocabulary.resource:TaxonomyVocabularyResource
   * @requires d7-services.resources.taxonomy_vocabulary.channelConstant:TaxonomyVocabularyChannelConstant
   * @requires d7-services.resources.taxonomy_vocabulary.channel:TaxonomyVocabularyChannel
   */
  angular
    .module('d7-services.resources.taxonomy_vocabulary', [
      'd7-services.resources.taxonomy_vocabulary.resourceConstant',
      'd7-services.resources.taxonomy_vocabulary.resource',
      'd7-services.resources.taxonomy_vocabulary.channelConstant',
      'd7-services.resources.taxonomy_vocabulary.channel']);
})();