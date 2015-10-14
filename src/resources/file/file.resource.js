;(function() {
    'use strict';

	/**
	 * File Resource Modules
	 * 
	 * see sourcecode in services/resources/file_resource.inc
	**/
    angular.module('ngDrupal7Services-3_x.resources.file.resource', ['ngDrupal7Services-3_x.commons.configurations', 'ngDrupal7Services-3_x.resources.file.resourceConstant', 'ngDrupal7Services-3_x.resources.file.channel', 'ngDrupal7Services-3_x.commons.baseResource'])
    
    /**
	 * FileResource
	 * 
	 * This service mirrors the Drupal file resource of the services 3.x module.
	 * To use this you have to set following line in your Drupal CORS module settings
	 * your_api_endpoint/file/*|<mirror>|POST|Content-Type,Authorization|true
	 * 
	**/
    .factory('FileResource', FileResource);

    /**
	 * Manually identify dependencies for minification-safe code
	 * 
	**/
    FileResource.$inject = ['$http', 'baseResource', 'DrupalApiConstant', 'FileResourceConstant', 'FileChannel'];
    
	/** @ngInject */
	function FileResource($http, baseResource, DrupalApiConstant, FileResourceConstant, FileChannel) { 
		
		//setup and return service            	
        var fileResourceService = {
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
        
        return fileResourceService;

        ////////////
        
        /**
		 * retrieve
		 * 
		 * Retrieve a file
		 * 
		 * Method: GET 
		 * Url: http://drupal_instance/api_endpoint/file/{CID}
		 * 
		 * @params  {Object} data The requests data
		 * 			@key 	{Integer} nid UID of the file to be loaded, required:true, source:path
		 * 
		 * @return 	{Promise} A file object
		 * 
		**/
    	function retrieve(data) {
    		var retrievePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + FileResourceConstant.resourcePath + '/' + data.nid;
    		return baseResource.retrieve( retrievePath,FileChannel.pubRetrieveConfirmed,  FileChannel.pubRetrieveFailed);
	    };
	    
	    /**
	     * create
	     * 
	     * Create a file with base64 encoded data
	     * 
	     * Method: POST
	     * Url: http://drupal_instance/api_endpoint/file
	     * 
	     * @params  {Array} file An array representing a file., required:true, source:post body
	     * 
	     * @return 	{Promise} The file object of the newly created file.
	     *
	    **/
	    function create(data) {
	    	
	    	var createPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + FileResourceConstant.resourcePath;

    		var createdata 	= {
    			file : data.file
			}
    		
    		if (data.roles) {
    			createdata.roles = baseResource.preparePostData(data.roles, 'array_of_values');
    		}
    		
    		return baseResource.create( createdata, createPath, FileChannel.pubCreateConfirmed, FileChannel.pubCreateFailed);

	    };
	        
	    /**
	     * update
	     * 
	     * Update a file
	     * 
	     * Method: PUT
	     * Url: http://drupal_instance/api_endpoint/file/{CID}
	     * 
	     * @params  {Object} data The requests data
	     * 			@key 	{Integer} nid Unique identifier for this file, required:true, source:path
	     * 			@key 	{Array}  data The file object with updated information, required:true, source:post body
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function update(data) {
	    	
	    	var updatePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + FileResourceConstant.resourcePath + '/' + data.nid;
	    	
    		var updateData 	= {
				name : data.name,
				mail : data.mail
			}
    		
    		return baseResource.update( updateData, updatePath, FileChannel.pubUpdateConfirmed, FileChannel.pubUpdateFailed);

	    };
	    
	    /**
	     * delete
	     * 
	     * Delete a file
	     * 
	     * Method: DELETE
	     * Url: http://drupal_instance/api_endpoint/file/{CID}
	     * 
	     * @params  {Object} data the requests data
	     * 			@key 	{Integer} nid The id of the file to delete, required:true, source:path
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function _delete(data) {
	    	var deletePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + FileResourceConstant.resourcePath + '/' + data.nid
	    	return baseResource.delete(deletePath, FileChannel.pubDeleteConfirmed,  FileChannel.pubDeleteFailed);
	    };
	    
	    /**
	     * index
	     * 
	     * List all files
	     * 
	     * Method: GET
		 * Url: http://drupal_instance/api_endpoint/file
		 * Headers: Content-Type:application/json
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
	    	var indexPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + FileResourceConstant.resourcePath + '/';
	    	return baseResource.index(data, indexPath, FileChannel.pubIndexConfirmed, FileChannel.pubIndexFailed);
	    };
	    


})();