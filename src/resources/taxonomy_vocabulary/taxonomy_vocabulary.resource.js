;(function() {
    'use strict';

	/**
	 * TaxonomyVocabulary Resource Modules
	 * 
	 * see sourcecode in services/resources/taxonomy_vocabulary_resource.inc
	**/
    angular.module('d7-services.resources.taxonomy_vocabulary.resource', ['d7-services.commons.configurations', 'd7-services.resources.taxonomy_vocabulary.resourceConstant', 'd7-services.resources.taxonomy_vocabulary.channel', 'd7-services.commons.baseResource'])
    
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
			retrieveByMachineName : retrieveByMachineName
        	
        };
        
        return taxonomy_vocabularyResourceService;

        ////////////
        
        /**
		 * retrieve
		 * 
		 * Retrieve a taxonomy vocabulary
		 * 
		 * Method: GET 
		 * Url: http://drupal_instance/api_endpoint/taxonomy_vocabulary/{TID}
		 * 
		 * @params  {Object} data The requests data
		 * 			@key 	{Integer} tid The vid of the taxonomy vocabulary to get, required:true, source:path
		 * 
		 * @return 	{Promise} A taxonomy_vocabulary object
		 * 
		**/
    	function retrieve(data) {
    		var retrievePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + TaxonomyVocabularyResourceConstant.resourcePath + '/' + data.vid;
    		return BaseResource.retrieve( retrievePath,TaxonomyVocabularyChannel.pubRetrieveConfirmed,  TaxonomyVocabularyChannel.pubRetrieveFailed);
	    };
	    
	    /**
	     * create
	     * 
	     * Create a taxonomy vocabulary
	     * This function uses drupal_form_submit() and as such expects all input to match
	     * the submitting form in question.
	     * 
	     * Method: POST
	     * Url: http://drupal_instance/api_endpoint/taxonomy_vocabulary
	     * 
	     * @params  {Object} data The vid of the taxonomy vocabulary to get, required:true, source:post body
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
	    			vocabulary : data 
    		};

    		return BaseResource.create( createData, createPath,  TaxonomyVocabularyChannel.pubCreateConfirmed, TaxonomyVocabularyChannel.pubCreateFailed);

	    };
	        
	    /**
	     * update
	     * 
	     * Update a taxonomy vocabulary
	     * 
	     * Method: PUT
	     * Url: http://drupal_instance/api_endpoint/taxonomy_vocabulary/{TID}
	     * 
	     * @params  {Object} data The requests data
	     * 			@key 	{Integer} vid The unique identifier for this taxonomy vocabulary., required:true, source:path
	     * 			@key 	{Array}  vocabulary The taxonomy vocabulary data to update, required:true, source:post body
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function update(data) {
	    	
	    	var updatePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + TaxonomyVocabularyResourceConstant.resourcePath + '/' + data.vid;
	    	
    		var updateData 	= {vocabulary : data};
    		
    		return BaseResource.update( updateData, updatePath, TaxonomyVocabularyChannel.pubUpdateConfirmed, TaxonomyVocabularyChannel.pubUpdateFailed);

	    };
	    
	    /**
	     * delete
	     * 
	     * Delete a taxonomy vocabulary
	     * 
	     * Method: DELETE
	     * Url: http://drupal_instance/api_endpoint/taxonomy_vocabulary/{TID}
	     * 
	     * @params  {Object} data the requests data
	     * 			@key 	{Integer} tid The id of the taxonomy vocabulary to delete, required:true, source:path
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
	     * List all taxonomy vocabularies
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
		 * Returns a full list of taxonomy terms.
		 *
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/taxonomy_vocabulary/getTree
		 *
		 * @params  {Object} data the requests data
		 * 		@key 	{Integer} vid The vocabulary id to retrieve., separated by comma., required:true, source:post body
		 * 		@key 	{Integer} parent The term ID under which to generate the tree. If 0, generate the tree for the entire vocabulary., required:false, source:post body
		 * 		@key 	{Integer} maxdepth The number of levels of the tree to return. Leave NULL to return all levels., required:false, source:post body
		 * 		@key 	{Integer} load_entities Whether the tree of terms should contain full term entity objects. If 1 (TRUE), a full entity load will occur on the term objects. Otherwise they are partial objects to save execution time and memory consumption. Defaults to 0 (FALSE)., required:false, source:post body
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

		/**
		 * retrieveByMachineName
		 *
		 * Returns a vocabulary based on machine name.
		 *
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/taxonomy_vocabulary/retrieveByMachineName
		 *
		 * @params  {Object} data the requests data
		 * 		@key 	{String} vid The vocabulary id to retrieve., required:true, source:post body
		 *
		 * @return 	{Promise}
		 *
		 **/
		function retrieveByMachineName(data) {
			var  pathToRetrieveByMachineName = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + TaxonomyVocabularyResourceConstant.resourcePath + '/' + TaxonomyVocabularyResourceConstant.actions.retrieveByMachineName,
				requestConfig = {
					url		: pathToRetrieveByMachineName,
					method	: 'POST',
					data : data
				};

			return BaseResource.request(requestConfig,TaxonomyVocabularyChannel.pubRetrieveByMachineNameConfirmed,  TaxonomyVocabularyChannel.pubRetrieveByMachineNameFailed);

		};
					
	};

})();