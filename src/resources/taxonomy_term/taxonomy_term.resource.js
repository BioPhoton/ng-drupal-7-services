;(function() {
    'use strict';

	/**
	 * TaxonomyTerm Resource Modules
	 * 
	 * see sourcecode in services/resources/taxonomy_term_resource.inc
	**/
    angular.module('d7-services.resources.taxonomy_term.resource', ['d7-services.commons.configurations', 'd7-services.resources.taxonomy_term.resourceConstant', 'd7-services.resources.taxonomy_term.channel', 'd7-services.commons.baseResource'])
    
    /**
	 * TaxonomyTermResource
	 * 
	 * This service mirrors the Drupal taxonomy_term resource of the services 3.x module.
	 * To use this you have to set following line in your Drupal CORS module settings
	 * your_api_endpoint/taxonomy_term/*|<mirror>|POST|Content-Type,Authorization|true
	 * 
	**/
    .factory('TaxonomyTermResource', TaxonomyTermResource);

    /**
	 * Manually identify dependencies for minification-safe code
	 * 
	**/
    TaxonomyTermResource.$inject = ['$http', 'BaseResource', 'DrupalApiConstant', 'TaxonomyTermResourceConstant', 'TaxonomyTermChannel'];
    
	/** @ngInject */
	function TaxonomyTermResource($http, BaseResource, DrupalApiConstant, TaxonomyTermResourceConstant, TaxonomyTermChannel) { 
		
		//setup and return service            	
        var taxonomy_termResourceService = {
        	//CRUD operations
        	retrieve 	: retrieve,
    		create 		: create,
    		update 		: update,
    		delete 		: _delete,
    	    index 		: index,
    	    //Actions
    	    selectNodes	: selectNodes,
        	
        };
        
        return taxonomy_termResourceService;

        ////////////
        
        /**
		 * retrieve
		 * 
		 * Retrieve a term
		 * 
		 * Method: GET 
		 * Url: http://drupal_instance/api_endpoint/taxonomy_term/{TID}
		 * 
		 * @params  {Object} data The requests data
		 * 			@key 	{Integer} tid TID of the taxonomy_term to get, required:true, source:path
		 * 
		 * @return 	{Promise} A taxonomy_term object
		 * 
		**/
    	function retrieve(data) {
    		var retrievePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + TaxonomyTermResourceConstant.resourcePath + '/' + data.tid;
    		return BaseResource.retrieve( retrievePath,TaxonomyTermChannel.pubRetrieveConfirmed,  TaxonomyTermChannel.pubRetrieveFailed);
	    };
	    
	    /**
	     * create
	     * 
	     * Create a term
	     * This function uses drupal_form_submit() and as such expects all input to match
	     * the submitting form in question.
	     * 
	     * Method: POST
	     * Url: http://drupal_instance/api_endpoint/taxonomy_term
	     * 
	     * @params  {Object} term The data of the taxonomy_term to create, required:true, source:post body
	     * 
		 *
		 *  Roles can be passed in a roles property which is an associative
		 *  array formatted with '<role id>' => '<role id>', not including the authenticated taxonomy_term role, which is given by default.
	     * 
	     * @return 	{Promise} The taxonomy_term object of the newly created taxonomy_term.
	     *
	    **/
	    function create(term) {
	    	
	    	var createPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + TaxonomyTermResourceConstant.resourcePath;

	    	var createData 	= { 
    				term : term 
    		};

    		return BaseResource.create( createData, createPath,  TaxonomyTermChannel.pubCreateConfirmed, TaxonomyTermChannel.pubCreateFailed);

	    };
	        
	    /**
	     * update
	     * 
	     * Update a term
	     * 
	     * Method: PUT
	     * Url: http://drupal_instance/api_endpoint/taxonomy_term/{TID}
	     * 
	     * @params  {Object} data The requests data
	     * 			@key 	{Integer} tid The unique identifier for this taxonomy term., required:true, source:path
	     * 			@key 	{Array}  data The taxonomy term data to update, required:true, source:post body
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function update(data) {
	    	
	    	var updatePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + TaxonomyTermResourceConstant.resourcePath + '/' + data.tid;
	    	
    		var updateData 	= {term : data};
    		
    		return BaseResource.update( updateData, updatePath, TaxonomyTermChannel.pubUpdateConfirmed, TaxonomyTermChannel.pubUpdateFailed);

	    };
	    
	    /**
	     * delete
	     * 
	     * Delete the term
	     * 
	     * Method: DELETE
	     * Url: http://drupal_instance/api_endpoint/taxonomy_term/{TID}
	     * 
	     * @params  {Object} data the requests data
	     * 			@key 	{Integer} tid The id of the taxonomy_term to delete, required:true, source:path
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function _delete(data) {
	    	var deletePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + TaxonomyTermResourceConstant.resourcePath + '/' + data.tid
	    	return BaseResource.delete(deletePath, TaxonomyTermChannel.pubDeleteConfirmed, TaxonomyTermChannel.pubDeleteFailed);
	    };
	    
	    /**
	     * index
	     * 
	     * List all taxonomy_terms
	     * 
	     * Method: GET
		 * Url: http://drupal_instance/api_endpoint/taxonomy_term
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
	    	var indexPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + TaxonomyTermResourceConstant.resourcePath + '/';
	    	return BaseResource.index(data, indexPath,TaxonomyTermChannel.pubIndexConfirmed,  TaxonomyTermChannel.pubIndexFailed);
	    };
	    
		/**
		 * selectNodes
		 * 
		 * Returns all nodes with provided taxonomy id.
		 * 
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/taxonomy_term/selectNodes
		 * 
		 * @params  {Object} data the requests data
		 * 		@key 	{Integer} tid The vocabulary ids to retrieve, separated by comma., required:true, source:post body
		 * 		@key 	{Integer} pager Whether the nodes are to be used with a pager (the case on most Drupal pages) or not (in an XML feed, for example)., required:false, source:post body
		 * 		@key 	{String} limit Maximum number of nodes to find., required:false, source:post body
		 * 		@key 	{Array} order The order clause for the query that retrieve the nodes., required:false, source:post body
		 * 		
		 * 
		 * @return 	{Promise}
		 * 
		**/
		function selectNodes(data) {
			var  pathToSelectNodes = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + TaxonomyTermResourceConstant.resourcePath + '/' + TaxonomyTermResourceConstant.actions.selectNodes,
				 requestConfig = {
			     	url		: pathToSelectNodes,
			     	method	: 'POST',
			     	data : data
				};
			
			
			
			return BaseResource.request(requestConfig,TaxonomyTermChannel.pubSelectNodesConfirmed,  TaxonomyTermChannel.pubSelectNodesFailed);

		};
					
	};

})();