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
    		delete 		: _delete,
    	    index 		: index,
    	    //Actions
    	    createRaw		: createRaw,
        };
        
        return fileResourceService;

        ////////////
        
        /**
		 * retrieve
		 * 
		 * Retrieve a file
		 * 
		 * Method: GET 
		 * Url: http://www.drupalionic.org/drupal_test/api/v1/file/{FID}
		 * 
		 * @params  {Object} data The requests data
		 * 			@key 	{Integer} fid FID of the file to be loaded, required:true, source:path
		 * 			@key 	{Integer} file_contents To return file contents or not., required:false, source:param
		 * 			@key 	{Integer} image_styles To return image styles or not., required:false, source:param
		 * 
		 * @return 	{Promise} A file object
		 * 
		**/
    	function retrieve(data) {
    		var retrievePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + FileResourceConstant.resourcePath + '/' + data.fid;
    		
    		if( data.file_contents || data.file_contents == 0 || data.image_styles || data.image_styles == 0 ) {
    			retrievePath += '?';
	    	}
	    	
	    	//optional data
    		if(data.file_contents || data.file_contents == 0) {
    			retrievePath += 'file_contents='+((data.file_contents)?1:0)+',';
    		}
    		
    		if(data.image_styles || data.image_styles == 0 ) {
    			retrievePath += 'image_styles='+((data.image_styles)?1:0)+',';
    		}
    		
    		
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
	    	
	    	var createPath 	= DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + FileResourceConstant.resourcePath,
	    		formData 	= new FormData();

    		
    		if(data.filename) {formData.append('filename', data.filename);}
    		if(data.file) {formData.append('file', data.file);}
    		if(data.filesize) {formData.append('filesize', "" + data.filesize);}
    		if(data.image_file_name) {formData.append('filepath', DrupalApiConstant.publicFilePath + data.image_file_name); }
    		
    		var requestConfig = {
    				method : 'POST',
    				url : createPath,
					transformRequest: angular.identity,
					headers: {'Content-Type': undefined},
					data: formData
			}
    		
    		return baseResource.request(requestConfig, FileChannel.pubCreateConfirmed, FileChannel.pubCreateFailed);

	    };
	        
	    
	    /**
	     * delete
	     * 
	     * Delete a file
	     * 
	     * Method: DELETE
	     * Url: http://drupal_instance/api_endpoint/file/{FID}
	     * 
	     * @params  {Object} data the requests data
	     * 			@key 	{Integer} fid The id of the file to delete, required:true, source:path
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function _delete(data) {
	    	var deletePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + FileResourceConstant.resourcePath + '/' + data.fid
	    	return baseResource.delete(deletePath, FileChannel.pubDeleteConfirmed,  FileChannel.pubDeleteFailed);
	    };
	    
	    /**
	     * index
	     * 
	     * List all files
	     * 
	     * Method: GET
		 * Url: http://drupal_instance/api_endpoint/file
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
	    
	    
	    /**
	     * createRaw
	     * 
	     * Create a file with raw data.
	     * 
	     * Method: POST 
		 * Url: http://drupal_instance/api_endpoint/file/create_raw
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function createRaw(data) {
	    	var createRawPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + FileResourceConstant.resourcePath + '/create_raw';
	    	return baseResource.request(null, createRawPath, FileChannel.pubIndexConfirmed, FileChannel.pubIndexFailed);
	    };
	    
	}

})();