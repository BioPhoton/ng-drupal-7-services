;(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name d7-services.resources:Resources
   * @description
   * This Module bundles all modules related to drupals resources
   * @requires d7-services.resources.comment.bundle:CommentBundle
   * @requires d7-services.resources.definition.bundle:DefinitionBundle
   * @requires d7-services.resources.file.bundle:FileBundle
   * @requires d7-services.resources.geocoder.bundle:GoecoderBundle
   * @requires d7-services.resources.menu.bundle:MenuBundle
   * @requires d7-services.resources.node.bundle:NodeBundle
   * @requires d7-services.resources.system:System
   * @requires d7-services.resources.taxonomy_term.bundle:TaxonomyTermBundle
   * @requires d7-services.resources.taxonomy_vocabulary.bundle:TaxonomyVocabularyBundle
   * @requires d7-services.resources.user.bundle:UserBundle
   * @requires d7-services.resources.views.bundle:ViewsBundle
   *
   */
  angular
    .module('d7-services.resources', [
      'd7-services.resources.comment',
      'd7-services.resources.definition',
      'd7-services.resources.file',
      'd7-services.resources.geocoder',
      'd7-services.resources.menu',
      'd7-services.resources.node',
      'd7-services.resources.system',
      'd7-services.resources.taxonomy_term',
      'd7-services.resources.taxonomy_vocabulary',
      'd7-services.resources.user',
      'd7-services.resources.views'
    ]);

})();