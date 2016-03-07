;(function() {
    'use strict';

	/**
	 * Node Resource Modules
	 * 
	 * see sourcecode in services/resources/node_resource.inc
	**/
    angular.module('d7-services.resources.node.resource', ['d7-services.commons.configurations', 'd7-services.resources.node.resourceConstant', 'd7-services.resources.node.channel', 'd7-services.commons.baseResource'])
    
    /**
	 * NodeResource
	 * 
	 * This service mirrors the Drupal node resource of the services 3.x module.
	 * To use this you have to set following line in your Drupal CORS module settings
	 * your_api_endpoint/node/*|<mirror>|POST|Content-Type,Authorization|true
	 * 
	**/
    .factory('NodeResource', NodeResource);

    /**
	 * Manually identify dependencies for minification-safe code
	 * 
	**/
    NodeResource.$inject = ['$http', 'BaseResource', 'DrupalApiConstant', 'NodeResourceConstant', 'NodeChannel'];
    
	/** @ngInject */
	function NodeResource($http, BaseResource, DrupalApiConstant, NodeResourceConstant, NodeChannel) { 
		
		//setup and return service            	
        var nodeResourceService = {
        	//CRUD operations
        	retrieve 	: retrieve,
    		create 		: create,
    		update 		: update,
    		delete 		: _delete,
    	    index 		: index,
    	    //Actions
    	    files		: files,
			comments 	: comments,
			attachFile : attachFile
        };
        
        return nodeResourceService;

        ////////////
        
        /**
		 * retrieve
		 * 
		 * Retrieve a node
		 * 
		 * Method: GET 
		 * Url: http://drupal_instance/api_endpoint/node/{NID}
		 * 
		 * @params  {Object} data The requests data
		 * 			@key 	{Integer} nid NID of the node to be loaded, required:true, source:path
		 * 
		 * @return 	{Promise} A node object
		 * 
		**/
    	function retrieve(data) {
    		var retrievePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + NodeResourceConstant.resourcePath + '/' + data.nid;
    		return BaseResource.retrieve( retrievePath,NodeChannel.pubRetrieveConfirmed,  NodeChannel.pubRetrieveFailed);
	    };
	    
	    /**
	     * create
	     * 
	     * Create a new node.
	     * This function uses drupal_form_submit() and as such expects all input to match
	     * the submitting form in question.
	     * 
	     * Method: POST
	     * Url: http://drupal_instance/api_endpoint/node
	     * 
	     * @params  {Object} data The data of the node to create, required:true, source:post body
	     * 
	     * 
	     * @return 	{Promise} The node object of the newly created node.
	     *
	    **/
	    function create(data) {
	    	
	    	var createPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + NodeResourceConstant.resourcePath,
	    		createData 	= {
					node : data
				};

    		return BaseResource.create( createData, createPath, NodeChannel.pubCreateConfirmed, NodeChannel.pubCreateFailed);

	    };
	        
	    /**
	     * update
	     * 
	     * Update a node
	     * 
	     * Method: PUT
	     * Url: http://drupal_instance/api_endpoint/node/{NID}
	     * 
	     * @params  {Object} data The requests data
	     * 			@key 	{Integer} nid Unique identifier for this node, required:true, source:path
	     * 			@key 	{Array}  data The node object with updated information, required:true, source:post body
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function update(data) {
	    	
	    	var updatePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + NodeResourceConstant.resourcePath + '/' + data.nid;
	    	
	    	delete data.nid;
    		var updateData = { node: data };
    		
    		
    		return BaseResource.update( updateData, updatePath, NodeChannel.pubUpdateConfirmed, NodeChannel.pubUpdateFailed);

	    };
	    
	    /**
	     * delete
	     * 
	     * Delete a node
	     * 
	     * Method: DELETE
	     * Url: http://drupal_instance/api_endpoint/node/{NID}
	     * 
	     * @params  {Object} data the requests data
	     * 			@key 	{Integer} nid The id of the node to delete, required:true, source:path
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function _delete(data) {
	    	var deletePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + NodeResourceConstant.resourcePath + '/' + data.nid
	    	return BaseResource.delete(deletePath, NodeChannel.pubDeleteConfirmed,  NodeChannel.pubDeleteFailed);
	    };
	    
	    /**
	     * index
	     * 
	     * List all nodes
	     * 
	     * Method: GET
		 * Url: http://drupal_instance/api_endpoint/node
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
	    	var indexPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + NodeResourceConstant.resourcePath + '/';
	    	return BaseResource.index(data, indexPath, NodeChannel.pubIndexConfirmed, NodeChannel.pubIndexFailed);
	    };
	    
	    /**
	     * files
	     * 
	     * This method returns files associated with a node.
	     * 
	     * Method: GET
	     * Url: http://drupal_instance/api_endpoint/node/files/{NID}/{FILE_CONTENTS}/{IMAGE_STYLES}
	     * 
	     * @params  {Object} data the requests data
	     * 			 @key {Integer} nid The nid of the node whose files we are getting, required:true, source:path
		 * 		     @key {Integer} file_contents To return file contents or not., required:false, source:path
		 * 			 @key {Integer} image_styles To return image styles or not., required:false, source:path
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function files(data) {
	    	var filesPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + NodeResourceConstant.resourcePath + '/' + data.nid + '/' + NodeResourceConstant.actions.files;
	    	
    		//set file_contents value
    		filesPath += '/'+( (data.file_contents)?1:0);
    		//set image_styles value
    		filesPath += '/'+( (data.image_styles)?1:0);
	    	
	    	var requestConfig = {
	    			url : filesPath,
	    			method : 'GET'
	    	}
	    	
	    	return BaseResource.request(requestConfig, NodeChannel.pubFilesConfirmed, NodeChannel.pubFilesFailed);
	    	
	    };
	    
	    /**
	     * comments
	     * 
	     * This method returns the number of new comments on a given node.
	     * 
	     * Method: GET
	     * Url: http://drupal_instance/api_endpoint/node/comments/{NID}
	     * 
	     * @params  {Object} data the requests data
	     * 			@key {Integer} nid The node id to load comments for., required:true, source:path
		 * 			@key {Integer} count Number of comments to load., required:false, source:param
		 * 			@key {Integer} offset If count is set to non-zero value, you can pass also non-zero value for start. For example to get comments from 5 to 15, pass count=10 and start=5., required:false, source:param
		 * 
	     * @return 	{Promise}
	     *
	    **/
	    function comments(data) {
	    
	    	var commentsPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + NodeResourceConstant.resourcePath + '/' + data.nid + '/' + NodeResourceConstant.actions.comments,
	    		requestConfig = {
	    			url : commentsPath,
	    			method : 'GET'
	    		};
	    	
	    	if( data.count || data.count == 0 || data.offset || data.offset == 0 ) {
	    		commentsPath += '?';
	    	}
	    	
	    	//optional data
    		if(data.count || data.count == 0) {
    			commentsPath += 'count='+data.count+',';
    		}
    		//@TODO check if we need count set to non-zero to use offset value
    		if(data.offset || data.offset == 0 ) {
    			commentsPath += 'offset='+data.offset+',';
    		}

	    	return BaseResource.request(requestConfig, NodeChannel.pubCommentsConfirmed, NodeChannel.pubCommentsFailed);
		
	    };
	    
	    /**
	     * attachFile
	     * 
	     * This method returns the number of new comments on a given node.
	     * 
	     * Method: POST 
	     * Url: http://drupal_instance/api_endpoint/node/attach_file/{NID}
	     * 
	     * @params  {Object} data the requests data
	     * 			@key {Integer} nid The nid of the node to attach a file to, required:true, source:path
		 * 			@key {Sting} field_name The file field name, required:true, source:post body
		 * 			@key {Integer} attach Attach the file(s) to the node. If FALSE, this clears ALL files attached, and attaches the files, required:false, source:post body
		 * 			@key {Array} field_values The extra field values, required:false, source:post body
		 * 
	     * @return 	{Promise}
	     *
	    **/
	    function attachFile(data) {
	    	//@TODO check how it works
	    	
	    	var attachFilePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + NodeResourceConstant.resourcePath + '/' + data.nid + '/' + NodeResourceConstant.actions.attachFile,
	    		requestConfig = {
	    			url : attachFilePath,
	    			method : 'POST ',
	    			data : {
	    				field_name 		: field_name,
	    				attach 			: data.attach,
		    			field_values 	: data.field_values
	    			}
	    		};
	    	
	    	return BaseResource.request(attachFilePath, NodeChannel.pubAttachFileConfirmed, NodeChannel.pubAttachFileFailed);
	    };
		
					
	};

})();
