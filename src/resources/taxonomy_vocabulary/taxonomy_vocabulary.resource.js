;(function() {
    'use strict';

	/**
	 * TaxonomyVocabulary Resource Modules
	 * 
	 * see sourcecode in services/resources/taxonomy_vocabulary_resource.inc
	**/
    angular.module('ngDrupal7Services-3_x.resources.taxonomy_vocabulary.resource', ['ngDrupal7Services-3_x.commons.configurations', 'ngDrupal7Services-3_x.resources.taxonomy_vocabulary.resourceConstant', 'ngDrupal7Services-3_x.resources.taxonomy_vocabulary.channel', 'ngDrupal7Services-3_x.commons.baseResource'])
    
    /**
	 * TaxonomyVocabularyResource
	 * 
	 * This service mirrors the Drupal taxonomy_vocabulary resource of the services 3.x module.
	 * To use this you have to set following line in your Drupal CORS module settings
	 * your_api_endpoint/taxonomy_vocabulary/*|<mirror>|POST|Content-Type,Authorization|true
	 * 
	**/
    .factory('TaxonomyVocabularyResource', TaxonomyVocabularyResource);

    /**
	 * Manually identify dependencies for minification-safe code
	 * 
	**/
    TaxonomyVocabularyResource.$inject = ['$http', 'BaseResource', 'DrupalApiConstant', 'TaxonomyVocabularyResourceConstant', 'TaxonomyVocabularyChannel'];
    
	/** @ngInject */
	function TaxonomyVocabularyResource($http, BaseResource, DrupalApiConstant, TaxonomyVocabularyResourceConstant, TaxonomyVocabularyChannel) { 
		
		//setup and return service            	
        var taxonomy_vocabularyResourceService = {
        	//CRUD operations
        	retrieve 	: retrieve,
    		create 		: create,
    		update 		: update,
    		delete 		: _delete,
    	    index 		: index,
    	    //Actions
    	    getTree	: getTree,
        	
        };
        
        return taxonomy_vocabularyResourceService;

        ////////////
        
        /**
		 * retrieve
		 * 
		 * Retrieve a term
		 * 
		 * Method: GET 
		 * Url: http://drupal_instance/api_endpoint/taxonomy_vocabulary/{TID}
		 * 
		 * @params  {Object} data The requests data
		 * 			@key 	{Integer} tid TID of the taxonomy_vocabulary to get, required:true, source:path
		 * 
		 * @return 	{Promise} A taxonomy_vocabulary object
		 * 
		**/
    	function retrieve(data) {
    		var retrievePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + TaxonomyVocabularyResourceConstant.resourcePath + '/' + data.tid;
    		return BaseResource.retrieve( retrievePath,TaxonomyVocabularyChannel.pubRetrieveConfirmed,  TaxonomyVocabularyChannel.pubRetrieveFailed);
	    };
	    
	    /**
	     * create
	     * 
	     * Create a term
	     * This function uses drupal_form_submit() and as such expects all input to match
	     * the submitting form in question.
	     * 
	     * Method: POST
	     * Url: http://drupal_instance/api_endpoint/taxonomy_vocabulary
	     * 
	     * @params  {Object} data The data of the taxonomy_vocabulary to create, required:true, source:post body
	     * 
		 *
		 *  Roles can be passed in a roles property which is an associative
		 *  array formatted with '<role id>' => '<role id>', not including the authenticated taxonomy_vocabulary role, which is given by default.
	     * 
	     * @return 	{Promise} The taxonomy_vocabulary object of the newly created taxonomy_vocabulary.
	     *
	    **/
	    function create(data) {
	    	
	    	var createPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + TaxonomyVocabularyResourceConstant.resourcePath;

	    	var createData 	= { 
    				term : data 
    		};

    		return BaseResource.create( createData, createPath,  TaxonomyVocabularyChannel.pubCreateConfirmed, TaxonomyVocabularyChannel.pubCreateFailed);

	    };
	        
	    /**
	     * update
	     * 
	     * Update a term
	     * 
	     * Method: PUT
	     * Url: http://drupal_instance/api_endpoint/taxonomy_vocabulary/{TID}
	     * 
	     * @params  {Object} data The requests data
	     * 			@key 	{Integer} tid The unique identifier for this taxonomy term., required:true, source:path
	     * 			@key 	{Array}  data The taxonomy term data to update, required:true, source:post body
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function update(data) {
	    	
	    	var updatePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + TaxonomyVocabularyResourceConstant.resourcePath + '/' + data.tid;
	    	
    		var updateData 	= {term : data};
    		
    		return BaseResource.update( updateData, updatePath, TaxonomyVocabularyChannel.pubUpdateConfirmed, TaxonomyVocabularyChannel.pubUpdateFailed);

	    };
	    
	    /**
	     * delete
	     * 
	     * Delete the term
	     * 
	     * Method: DELETE
	     * Url: http://drupal_instance/api_endpoint/taxonomy_vocabulary/{TID}
	     * 
	     * @params  {Object} data the requests data
	     * 			@key 	{Integer} tid The id of the taxonomy_vocabulary to delete, required:true, source:path
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function _delete(data) {
	    	var deletePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + TaxonomyVocabularyResourceConstant.resourcePath + '/' + data.tid
	    	return BaseResource.delete(deletePath, TaxonomyVocabularyChannel.pubDeleteConfirmed, TaxonomyVocabularyChannel.pubDeleteFailed);
	    };
	    
	    /**
	     * index
	     * 
	     * List all taxonomy_vocabularys
	     * 
	     * Method: GET
		 * Url: http://drupal_instance/api_endpoint/taxonomy_vocabulary
		 * 
		 * @params  {Object} data the requests data
		 * 		@key 	{Integer} page The zero-based index of the page to get. defaults to 0., required:false, source:param
		 * 		@key 	{Integer} pagesize Number of records to get per page., required:false, source:param
		 * 		@key 	{String} fields The fields to get., required:false, source:param
		 * 		@key 	{Array} parameters Parameters, required:false, source:param
		 * 		
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function index(data) {
	    	var indexPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + TaxonomyVocabularyResourceConstant.resourcePath + '/';
	    	return BaseResource.index(data, indexPath,TaxonomyVocabularyChannel.pubIndexConfirmed,  TaxonomyVocabularyChannel.pubIndexFailed);
	    };
	    
		/**
		 * getTree
		 * 
		 * Returns the CSRF token of the current session.
		 * 
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/taxonomy_vocabulary/token 
		 * 
		 * @return 	{Promise}
		 * 
		**/
		function getTree(data) {
			var  pathToGetTree = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + TaxonomyVocabularyResourceConstant.resourcePath + '/' + TaxonomyVocabularyResourceConstant.actions.getTree,
				 requestConfig = {
			     	url		: pathToGetTree,
			     	method	: 'POST',
			     	data : data
				};
			
			return BaseResource.request(requestConfig,TaxonomyVocabularyChannel.pubGetTreeConfirmed,  TaxonomyVocabularyChannel.pubGetTreeFailed);

		};
					
	};

})();