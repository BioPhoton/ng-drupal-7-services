(function() {
	'use strict';

	/**
	 * System Channel Module
	 */
	angular.module('ngDrupal7Services-3_x.commons.baseResource', ['ngDrupal7Services-3_x.commons.configurations'])
		   .factory('baseResource', baseResource);

	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	baseResource.$inject = ['$http', '$q', 'DrupalApiConstant'];
	
	/**
	 * The resource basic functions
	 * 
	**/
	/** @ngInject */
	function baseResource($http, $q, DrupalApiConstant) {
		
		var baseResourceService = {
			prepareGetParams : prepareGetParams,	
			preparePostData: preparePostData,
			//base 
			request 	: request,
			retrieve 	: retrieve,
			create 		: create,
			update 		: update,
			delete 		: _delete,
			index 		: index
		};
       
        return baseResourceService;

        ////////////
        
        /**
         * request
         * 
         * generic function for drupals retrieve request
         * 
         * @param {Object} data The requests data
         * @param {Object} requestConfig The requests url
         * @param {Function} pubError The requests error publish function
         * @param {Function} pubSuccess The requests success publish function
         * 
         * @return {Promise} Promise of the retrieve request
         * 
         */
        function request(requestConfig, pubError, pubSuccess) {

	    	var errors = [];		
	    	
	    	if(errors.length != 0) {
	    		pubError(errors)
	    		return $q.reject(errors);
	    	};
			
    		return $http(requestConfig)
		    	.success(function(responseData, status, headers, config){
		    		console.log(responseData, status, headers, config); 
		    		pubSuccess(responseData);
		    	})
		    	.error(function(responseError, status, headers, config){
		    		console.log(responseError, status, headers, config); 
		    		pubError(responseError);
		    	});
        	
        };
        
        /**
         * retrieve
         * 
         * generic function for drupals retrieve request
         * 
         * @param {String} retrievePath The requests url
         * @param {Function} pubError The requests error publish function
         * @param {Function} pubSuccess The requests success publish function
         * 
         * @return {Promise} Promise of the retrieve request
         * 
         */
        function retrieve(retrievePath, pubError, pubSuccess) {
        	
        	var requestConfig = {
    				url 	: retrievePath,
	    			method 	:'GET'
	    	};
        	
        	return request(requestConfig, pubError, pubSuccess);

        };
        
        /**
         * create
         * 
         * generic function for drupals create request
         * 
         * @param {Object} data The requests data
         * @param {String} createPath The requests url
         * @param {Function} pubError The requests error publish function
         * @param {Function} pubSuccess The requests success publish function
         * 
         * @return {Promise} Promise of the create request
         * 
         */
        function create( data, createPath, pubError, pubSuccess) {
        	
        	var requestConfig = {
    				url 	: createPath,
	    			method 	: 'POST',
	    			data    : data
	    	};
   
        	return request(requestConfig, pubError, pubSuccess);
        };
        
        /**
         * update
         * 
         * generic function for drupals update request
         * 
         * @param {Object} data The requests data
         * @param {String} updatePath The requests url
         * @param {Function} pubError The requests error publish function
         * @param {Function} pubSuccess The requests success publish function
         * 
         * @return {Promise} Promise of the update request
         * 
         */
        function update( data, updatePath, pubError, pubSuccess) {
        	
        	var requestConfig = {
    				url 	: updatePath,
    				method 	: 'PUT',
    				data 	: data,
    		};
   
        	return request(requestConfig, pubError, pubSuccess);
        };
        
        /**
         * delete
         * 
         * generic function for drupals delete request
         * 
         * @param {String} deletePath The requests url
         * @param {Function} pubError The requests error publish function
         * @param {Function} pubSuccess The requests success publish function
         * 
         * @return {Promise} Promise of the delete request
         * 
         */
        function _delete( deletePath, pubError, pubSuccess) {
        	
        	var requestConfig = {
    				url 	: deletePath,
    				method 	: 'DELETE'
    		};
   
        	return request(requestConfig, pubError, pubSuccess);
        };
        
        
        /**
         * index
         * 
         * generic function for drupals delete request
         * 
         * @param {String} deletePath The requests url
         * @param {Function} pubError The requests error publish function
         * @param {Function} pubSuccess The requests success publish function
         * 
         * @return {Promise} Promise of the delete request
         * 
         */
        function index(data, indexPath, pubError, pubSuccess) {
        	
        	var options = {};
        	//prepare index options
        	if(data.page !== '') {options.page = data.page}
        	if(data.pagesize) {options.pagesize = data.pagesize}
          	if(Object.keys(data.parameters).length > 0 ) {options.parameters = data.parameters}
        	if(Object.keys(data.fields).length > 0 ) {options.fields = data.fields}
        	
        	if(options) {
    			indexPath += '?' + prepareIndexGetParams(options);
    		}

        	var requestConfig = {
    				url 	: indexPath,
    				method 	:'GET'
    		};
   
        	return request(requestConfig, pubError, pubSuccess);
        };
 
        /**
         * prepareIndexGetParams
         * 
         * @param {OBJECT} options The index options.
         * 		  @key {Integer} page The pagenumber to start
         * 		  @key {Integer} pagesize The number of entries per page
         * 
        **/
        function prepareIndexGetParams(options) {
        	var type = '',
    			getParamsString = '',
    			prepaeredParams = '';
        	console.log(options); 
        	if(!options)  { return ''; }

    		//prepare and set optional params
    		angular.forEach(options, function(value , key) {
    			if(key === 'parameters') { type = 'array_key_value'; }
    			else if(key === 'fields') { type = 'array'; }
    			
    			prepaeredParams = prepareGetParams(value, key, type)
    			console.log(prepaeredParams); 

    			getParamsString += (getParamsString == '')?prepaeredParams:'&'+prepaeredParams;
    			
    			prepaeredParams = '';
    	        type = '';
    	    });
    		
    		return getParamsString;
        };
        
        /**
         * 
         * preparePostData
         * 
         * Formats the JSON depending on format param
         * 
         * @param {Object} values The value to format
         * @param {String} format The new format of the value param
         * 
         * @return {Array} formated data
         */
         function preparePostData(values, format) {
        	 var postData = undefined,
	            formats = { 
	      			 'array_of_keys' : true,
	      			 'array_of_values' : true
	            };
        	 
        	//validate format
     		if(!formats[format]) { return '';  }
     		
     		//array
    		//example: ["3", "asfasf"], 
    		if(format === 'array_of_keys' && Object.keys(values).length > 0) {
    		
    			var arrayValues = [];
    			angular.forEach(values, function(value, k) {
    				if(value !== false) { this.push(k); }
    			}, arrayValues);	
    			if(arrayValues.length) { postData = arrayValues; }
    			return postData;
    		}
    		
    		if(format === 'array_of_values' && Object.keys(values).length > 0) {
        		
    			var arrayValues = [];
    			angular.forEach(values, function(value, k) {
    				if(value !== false) { this.push(value); }
    			}, arrayValues);	
    			if(arrayValues.length) { postData = arrayValues; }
    			return postData;
    		}
 
         }
        
        /**
         * 
         * prepareGetParam
         * 
         * Formats the JSON depending on formata and key param
         * 
         * @param {Object} values The value to format
         * @param {String} key The name of key to use in formated output
         * @param {String} format The new format of the value param
         * 
         * @return {String} formated data
         */
         function prepareGetParams(values, key, format) {
        	 console.log(values, key, format); 
            var getParams = [],
	            formats = { 
	      			  'array' : true,
	      			  'array_keys' : true,
	      			  'array_key_value' : true,
	      			  'json' : true,
	            };
        	
    		//validate key
    		if(key) { 
    			key = (key)?key:false;
    			if(key === false) {return false;}
    		} else { return false; }
    		
    		//validate values
    		values = (values || values === 0)?values:false;
    		
    		//validate values
    		if(values === false) {return false;}
    		//if no json or length 0 and no int
    		else if (parseInt(values) === NaN) { 
    			if(Object.keys(values).length <= 0) {
    				return false; 
    			}
    		}
    		
    		//normal param
    		if(!format) {
    			if(values || values === 0) { getParams = key + '=' + values; }
    			return getParams;
    		}
    		
    		//validate format
    		if(!formats[format]) { return '';  }
    		
    		//json
    		//example: exposed_filter=value
    		if(format === 'json') {
    			angular.forEach(values, function(value, k) {
    				if(value) { getParams.push(k + '=' + value) }
    			});
    			return getParams.join('&');
    		}
    		//array
    		//example: fields=value1, vaule2, value3, 
    		if(format === 'array' && Object.keys(values).length > 0) {
    		
    			var arrayValues = [];
    			angular.forEach(values, function(value, k) {
    				if(value !== false) { this.push(k); }
    			}, arrayValues);	
    			if(arrayValues.length) { getParams.push(key + '=' + arrayValues.join(',')); }
    			return getParams.join('&');
    		}
    		//array_keys
    		//example: exposed_filter1=key1
    		if(format === 'array_keys') {
    			angular.forEach(values, function(value, k) {
    				if(value) { getParams.push(key + '=' + k) }
    			});
    			return getParams.join('&');
    		}

    		//array_key_value
    		//example: parameters[key1]=value1
    		if(format === 'array_key_value') {
    			
    			angular.forEach(values, function(value, k) {
    				if(value) { getParams.push(key+"["+k+"]="+ value); }
    			});
    			return getParams.join('&');
    		}
    		
    	};

        
	};

})();