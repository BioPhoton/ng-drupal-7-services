;(function() {
    'use strict';

	/**
	 * Comment Resource Modules
	 * 
	 * see sourcecode in services/resources/comment_resource.inc
	**/
    angular.module('d7-services.resources.comment.resource', ['d7-services.commons.configurations', 'd7-services.resources.comment.resourceConstant', 'd7-services.resources.comment.channel', 'd7-services.commons.baseResource'])
    
    /**
	 * CommentResource
	 * 
	 * This service mirrors the Drupal comment resource of the services 3.x module.
	 * To use this you have to set following line in your Drupal CORS module settings
	 * your_api_endpoint/comment/*|<mirror>|POST|Content-Type,Authorization|true
	 * 
	**/
    .factory('CommentResource', CommentResource);

    /**
	 * Manually identify dependencies for minification-safe code
	 * 
	**/
    CommentResource.$inject = ['$http', 'BaseResource', 'DrupalApiConstant', 'CommentResourceConstant', 'CommentChannel'];
    
	/** @ngInject */
	function CommentResource($http, BaseResource, DrupalApiConstant, CommentResourceConstant, CommentChannel) { 
		
		//setup and return service            	
        var commentResourceService = {
        	//CRUD operations
        	retrieve 	: retrieve,
    		create 		: create,
    		update 		: update,
    		delete 		: _delete,
    	    index 		: index,
    	    //Actions
    	    countAll	: countAll,
    	    countNew	: countNew
        	
        };
        
        return commentResourceService;

        ////////////
        
        /**
		 * retrieve
		 * 
		 * Retrieve a comment
		 * 
		 * Method: GET 
		 * Url: http://drupal_instance/api_endpoint/comment/{CID}
		 * 
		 * @params  {Object} data The requests data
		 * 			@key 	{Integer} cid The cid of the comment to retrieve., required:true, source:path
		 * 
		 * @return 	{Promise} A comment object
		 * 
		**/
    	function retrieve(data) {
    		var retrievePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + CommentResourceConstant.resourcePath + '/' + data.cid;
    		return BaseResource.retrieve( retrievePath,CommentChannel.pubRetrieveConfirmed,  CommentChannel.pubRetrieveFailed);
	    };
	    
	    /**
	     * create
	     * 
	     * Create a comment
	     * This function uses drupal_form_submit() and as such expects all input to match
	     * the submitting form in question.
	     * 
	     * Method: POST
	     * Url: http://drupal_instance/api_endpoint/comment
	     * 
	     * @params  {Object} comment The data of the comment to create, required:true, source:post body
	     * 
		 *
		 *  Roles can be passed in a roles property which is an associative
		 *  array formatted with '<role id>' => '<role id>', not including the authenticated comment role, which is given by default.
	     * 
	     * @return 	{Promise} The comment object of the newly created comment.
	     *
	    **/
	    function create(data) {
	    	
	    	var createPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + CommentResourceConstant.resourcePath;

	    	var createData 	= { 
	    		comment : data 
    		};

    		return BaseResource.create( createData, createPath,  CommentChannel.pubCreateConfirmed, CommentChannel.pubCreateFailed);

	    };
	        
	    /**
	     * update
	     * 
	     * Update a comment
	     * 
	     * Method: PUT
	     * Url: http://drupal_instance/api_endpoint/comment/{CID}
	     * 
	     * @params  {Object} data The requests data
	     * 			@key 	{Integer} cid The unique identifier for this comment., required:true, source:path
	     * 			@key 	{Array}  data The comment object with updated information, required:true, source:post body
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function update(data) {
	    	
	    	var updatePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + CommentResourceConstant.resourcePath + '/' + data.cid;
	    	
	    	delete data.cid
    		var updateData 	= {comment : data};
    		
    		return BaseResource.update( updateData, updatePath, CommentChannel.pubUpdateConfirmed, CommentChannel.pubUpdateFailed);

	    };
	    
	    /**
	     * delete
	     * 
	     * Delete the comment
	     * 
	     * Method: DELETE
	     * Url: http://drupal_instance/api_endpoint/comment/{CID}
	     * 
	     * @params  {Object} data the requests data
	     * 			@key 	{Integer} cid The id of the comment to delete, required:true, source:path
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function _delete(data) {
	    	var deletePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + CommentResourceConstant.resourcePath + '/' + data.cid
	    	return BaseResource.delete(deletePath, CommentChannel.pubDeleteConfirmed, CommentChannel.pubDeleteFailed);
	    };
	    
	    /**
	     * index
	     * 
	     * List all comments
	     * 
	     * Method: GET
		 * Url: http://drupal_instance/api_endpoint/comment
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
	    	var indexPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + CommentResourceConstant.resourcePath + '/';
	    	return BaseResource.index(data, indexPath,CommentChannel.pubIndexConfirmed,  CommentChannel.pubIndexFailed);
	    };
	    
		/**
		 * countAll
		 * 
		 * Return number of comments on a given node.
		 * 
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/comment/countAll
		 * 
		 * @params  {Object} data the requests data
		 * 		@key 	{Integer} nid The node id to count all comments., separated by comma., required:true, source:post body	
		 * 
		 * @return 	{Promise}
		 * 
		**/
		function countAll(data) {
			var  pathTocountAll = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + CommentResourceConstant.resourcePath + '/' + CommentResourceConstant.actions.countAll,
				 requestConfig = {
			     	url		: pathTocountAll,
			     	method	: 'POST',
			     	data : data
				};
			
			
			
			return BaseResource.request(requestConfig,CommentChannel.pubCountAllConfirmed,  CommentChannel.pubCountAllFailed);

		};
		
		/**
		 * countNew
		 * 
		 * Returns number of new comments on a given node since a given timestamp.
		 * 
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/comment/countNew
		 * 
		 * @params  {Object} data the requests data
		 * 		@key 	{Integer} cid The node id to load comments for., separated by comma., required:true, source:post body
		 * 		@key 	{Integer} since Timestamp to count from (defaults to time of last user acces to node)., required:false, source:post body	
		 * 
		 * @return 	{Promise}
		 * 
		**/
		function countNew(data) {
			var  pathTocountNew = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + CommentResourceConstant.resourcePath + '/' + CommentResourceConstant.actions.countNew,
				 requestConfig = {
			     	url		: pathTocountNew,
			     	method	: 'POST',
			     	data : data
				};

			return BaseResource.request(requestConfig,CommentChannel.pubCountNewConfirmed,  CommentChannel.pubCountNewFailed);

		};
					
	};

})();