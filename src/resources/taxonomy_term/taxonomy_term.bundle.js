;
(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name d7-services.resources.taxonomy_term:TaxonomyTerm
   * @description
   * This Module bundles all modules related to drupal taxonomy_term resource
   * @requires d7-services.resources.taxonomy_term.resourceConstant:TaxonomyTermResourceConstant
   * @requires d7-services.resources.taxonomy_term.resource:TaxonomyTermResource
   * @requires d7-services.resources.taxonomy_term.channelConstant:TaxonomyTermChannelConstant
   * @requires d7-services.resources.taxonomy_term.channel:TaxonomyTermChannel
   */
  angular
    .module('d7-services.resources.taxonomy_term', [
      'd7-services.resources.taxonomy_term.resourceConstant',
      'd7-services.resources.taxonomy_term.resource',
      'd7-services.resources.taxonomy_term.channelConstant',
      'd7-services.resources.taxonomy_term.channel']);
})();