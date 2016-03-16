;
(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name d7-services.commons.baseResource:BaseResource
   * @description
   * An abstract resource providing retrieve, create, update, delete and index functions.
   * This service is used to handle the resources basic get put pust delete operations.
   * @requires d7-services.commons.configurations:DrupalApiConstant
   */
  angular.module('d7-services.commons.baseResource', ['d7-services.commons.configurations'])
    .factory('BaseResource', BaseResource);

  BaseResource.$inject = ['$http', '$q'];

  /** @ngInject */
  function BaseResource($http, $q) {

    var BaseResourceService = {
      prepareGetParams: prepareGetParams,
      preparePostData: preparePostData,
      //base
      request: request,
      retrieve: retrieve,
      create: create,
      update: update,
      delete: _delete,
      index: index
    };

    return BaseResourceService;

    ////////////

    /**
     * @ngdoc method
     * @name request
     * @methodOf d7-services.commons.baseResource:BaseResource
     * @description
     * Generic function for http requests that emits events on success and on error
     *
     * @param {Object} requestConfig - The requests url
     * @param {Function} [pubSuccess] - The requests success publish function
     * @param {Function} [pubError] - The requests error publish function
     *
     * @return {Promise} Promise of the retrieve request
     *
     * @example
     * Fire a request with the request function
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.commons'])
     *  .controller('myController',function ($scope,BaseResource) {
     *    var requestConfig = {
     *    	url 	: 'path/to/resource?param=test',
     *			method 	:'GET'
     *    };
     *    var pubSuccess = function(success){...};
     *    var pubError = function(error){...};
     *
     *    BaseResource.request().then(function(success){...}, function(error){...});
     * }
     * </pre>
     */
    function request(requestConfig, pubSuccess, pubError) {

      var errors = [];

      if (errors.length != 0) {
        pubError(errors);
        return $q.reject(errors);
      }


      return $http(requestConfig)
        .success(function (responseData, status, headers, config) {
          if (typeof pubSuccess === 'function') {
            pubSuccess(responseData);
          }

        })
        .error(function (responseError, status, headers, config) {
          if (typeof pubError === 'function') {
            pubError(responseError);
          }
        });

    }

    /**
     * @ngdoc method
     * @name retrieve
     * @methodOf d7-services.commons.baseResource:BaseResource
     * @description
     * Generic function for drupals retrieve request. The request will use the GET operator
     *
     * @param {String} retrievePath - The requests url
     * @param {Function} [pubSuccess] - The requests success publish function
     * @param {Function} [pubError] - The requests error publish function
     *
     * @return {Promise} Promise of the retrieve request
     *
     * @example
     * Fire a request with the retrieve function.
     *
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.commons'])
     *  .controller('myController',function ($scope,BaseResource) {
     *    var requestConfig = {
     *    	url 	: 'path/to/resource?param=test',
     *			method 	:'GET'
     *    };
     *    var pubSuccess = function(success){...};
     *    var pubError = function(error){...};
     *
     *    BaseResource.retrieve().then(function(success){...}, function(error){...});
     * }
     * </pre>
     *
     */
    function retrieve(retrievePath, pubSuccess, pubError) {

      var requestConfig = {
        url: retrievePath,
        method: 'GET'
      };

      return request(requestConfig, pubSuccess, pubError);

    }

    /**
     * @ngdoc method
     * @name create
     * @methodOf d7-services.commons.baseResource:BaseResource
     * @description
     * Generic function for drupals create request. The request will use the POST operator
     *
     * @param {Object} data - The requests data
     * @param {String} createPath - The requests url
     * @param {Function} [pubSuccess] - The requests success publish function
     * @param {Function} [pubError] - The requests error publish function
     *
     * @return {Promise} Promise of the create request
     *
     * @example
     * Fire a request with the create function.
     *
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.commons'])
     *  .controller('myController',function ($scope,BaseResource) {
     *    var data 	= {...},
     *    		path = 'path/to/resource',
     *    	  pubSuccess = function(success){...},
     *    	  pubError = function(error){...};
     *
     *    BaseResource.create(data, path, pubSuccess, pubError).then(function(success){...}, function(error){...});
     * }
     * </pre>
     *
     */
    function create(data, createPath, pubSuccess, pubError) {

      var requestConfig = {
        url: createPath,
        method: 'POST',
        data: data
      };

      return request(requestConfig, pubSuccess, pubError);
    }

    /**
     * @ngdoc method
     * @name update
     * @methodOf d7-services.commons.baseResource:BaseResource
     * @description
     * Generic function for drupals update request. The request will use the PUT operator.
     *
     * @param {Object} data - The requests data
     * @param {String} updatePath - The requests url
     * @param {Function} [pubSuccess] - The requests success publish function
     * @param {Function} [pubError] - The requests error publish function
     *
     * @return {Promise} Promise of the update request
     *
     * @example
     * Fire a request with the update function.
     *
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.commons'])
     *  .controller('myController',function ($scope,BaseResource) {
     *    var data 	= {...},
     *    		path = 'path/to/resource',
     *    	  pubSuccess = function(success){...},
     *    	  pubError = function(error){...};
     *
     *    BaseResource.update(data, path, pubSuccess, pubError).then(function(success){...}, function(error){...});
     * }
     * </pre>
     */
    function update(data, updatePath, pubSuccess, pubError) {

      var requestConfig = {
        url: updatePath,
        method: 'PUT',
        data: data
      };

      return request(requestConfig, pubSuccess, pubError);
    }

    /**
     * @ngdoc method
     * @name delete
     * @methodOf d7-services.commons.baseResource:BaseResource
     * @description
     * Generic function for drupals delete request. The request will use the DELETE operator.
     *
     * @param {String} deletePath - The requests url
     * @param {Function} [pubSuccess] - The requests success publish function
     * @param {Function} [pubError] - The requests error publish function
     *
     * @return {Promise} Promise of the delete request
     *
     * @example
     * Fire a request with the delete function.
     *
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.commons'])
     *  .controller('myController',function ($scope,BaseResource) {
     *    var path = 'path/to/resource',
     *    	  pubSuccess = function(success){...},
     *    	  pubError = function(error){...};
     *
     *    BaseResource.delete(path, pubSuccess, pubError).then(function(success){...}, function(error){...});
     * }
     * </pre>
     */
    function _delete(deletePath, pubSuccess, pubError) {

      var requestConfig = {
        url: deletePath,
        method: 'DELETE'
      };

      return request(requestConfig, pubSuccess, pubError);
    }


    /**
     * @ngdoc method
     * @name index
     * @methodOf d7-services.commons.baseResource:BaseResource
     * @description
     * Generic function for drupals delete request.
     * The request will use the GET operator. It also formats all params for drupals index function
     *
     * @param {Object} data - The index retrieve data
     * @param {String} indexPath - The requests url
     * @param {Function} [pubSuccess] - The requests success publish function
     * @param {Function} [pubError] - The requests error publish function
     *
     * @return {Promise} Promise of the delete request
     *
     * @example
     * Fire a request with the index function.
     *
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.commons'])
     *  .controller('myController',function ($scope,BaseResource) {
     *    var data 	= {...},
     *    		path = 'path/to/resource',
     *    	  pubSuccess = function(success){...},
     *    	  pubError = function(error){...};
     *
     *    BaseResource.index(data, path, pubSuccess, pubError).then(function(success){...}, function(error){...});
     * }
     * </pre>
     */
    function index(data, indexPath, pubSuccess, pubError) {

      var options = {};
      //prepare index options
      if (data.page !== '') {options.page = data.page}
      if (data.pagesize) {options.pagesize = data.pagesize}
      if (Object.keys(data.parameters).length > 0) {options.parameters = data.parameters}
      if (Object.keys(data.fields).length > 0) {options.fields = data.fields}

      if (options) {
        indexPath += '?' + prepareIndexGetParams(options);
      }

      var requestConfig = {
        url: indexPath,
        method: 'GET'
      };

      return request(requestConfig, pubSuccess, pubError);
    }

    /**
     * @ngdoc method
     * @name prepareIndexGetParams
     * @methodOf d7-services.commons.baseResource:BaseResource
     * @description
     * Prepares the options for an index request
     *
     * @param {Object} options - The index options.
     * @param {integer} options.page - The pagenumber to start
     * @param {integer} options.pagesize - The number of entries per page
     * @param {object} options.fields - The fields to retrieve
     * @param {object} options.parameters - The parameters in fields to search
     *
     * @return {String} formated params as string or empty string
     *
     * @example
     * Prepare an object for drupals index request. This request is uses the GET operator
     *
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.commons'])
     *  .controller('myController',function ($scope,BaseResource) {
     *    var data 	= prepareIndexGetParams({...});
     *    		path = 'path/to/resource';
     *
     *    BaseResource.index(data, path);
     * }
     * </pre>
     */
    function prepareIndexGetParams(options) {
      var type = '',
        getParamsString = '',
        prepaeredParams = '';

      if (!options) { return ''; }

      //prepare and set optional params
      angular.forEach(options, function (value, key) {
        if (key === 'parameters') { type = 'array_key_value'; }
        else if (key === 'fields') { type = 'array'; }

        prepaeredParams = prepareGetParams(value, key, type);

        getParamsString += (getParamsString == '') ? prepaeredParams : '&' + prepaeredParams;

        prepaeredParams = '';
        type = '';
      });

      return getParamsString;
    }

    /**
     * @ngdoc method
     * @name preparePostData
     * @methodOf d7-services.commons.baseResource:BaseResource
     * @description
     * Formats the JSON depending on format param
     *
     * @param {Object} values The value to format
     * @param {String} format The new format of the value param
     *
     * @return {Array} formatted data
     *
     * @example
     * Prepares data for request.
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.commons'])
     *  .controller('myController',function ($scope,BaseResource) {
     *    var data = {...},
     *			  format : 'array_of_keys':
     *
     *    var prepData = BaseResource.preparePostData(data, format);
     *
     *    Baseresource.create(prepData, 'path/to/api/resource')
     * }
     * </pre>
     */
    function preparePostData(values, format) {
      var postData = undefined,
        formats = {
          'array_of_keys': true,
          'array_of_values': true
        };

      //validate format
      if (!formats[format]) { return false; }

      //array
      //example: ["3", "asfasf"],
      if (format === 'array_of_keys' && Object.keys(values).length > 0) {

        var arrayValues = [];
        angular.forEach(values, function (value, k) {
          if (value !== false) { this.push(k); }
        }, arrayValues);
        if (arrayValues.length) { postData = arrayValues; }
        return postData;
      }

      if (format === 'array_of_values' && Object.keys(values).length > 0) {

        var arrayValues = [];
        angular.forEach(values, function (value, k) {
          if (value !== false) { this.push(value); }
        }, arrayValues);
        if (arrayValues.length) { postData = arrayValues; }
        return postData;
      }

    }


    //key=value
    //key=value1,value2,value3
    //kex=objName[key]=


    /**
     * @ngdoc method
     * @name prepareGetParam
     * @methodOf d7-services.commons.baseResource:BaseResource
     * @description
     * Formats the JSON depending on format and key param
     *
     * @param {Object} values The value to format
     * @param {String} key The name of key to use in formatted output
     * @param {String} format The new format of the value param
     *
     * @return {String} formatted data
     *
     * @example
     * Prepares data for request.
     * <pre>
     * angular
     *  .module('myModule', ['d7-services.commons'])
     *  .controller('myController',function ($scope,BaseResource) {
     *    var data = {...},
     *			  format : 'array_of_keys':
     *
     *    var prepData = BaseResource.prepareGetParams(data, 'keyName',format);
     *
     *    BaseResource.retrieve(prepData, 'path/to/api/resource');
     * }
     * </pre>
     */
    function prepareGetParams(values, key, format) {

      var getParams = [],
        formats = {
          'array': true,
          'array_keys': true,
          'array_key_value': true,
          'json': true
        };

      //validate key
      if (key) {
        key = (key) ? key : false;
        if (key === false) {return;}
      } else { return; }

      //validate values
      values = (values || values === 0) ? values : undefined;

      //validate values
      if (values === undefined) {return;}
      //if no json or length 0 and no int
      else if (parseInt(values) == NaN) {
        if (Object.keys(values).length <= 0) {
          return;
        }
      }

      //normal param
      if (!format) {
        if (values || values === 0) { getParams = key + '=' + values; }
        return getParams;
      }

      //validate format
      if (!formats[format]) { return; }

      //json
      //example: exposed_filter=value
      if (format === 'json') {
        angular.forEach(values, function (value, k) {
          if (value) { getParams.push(k + '=' + value) }
        });
        return getParams.join('&');
      }
      //array
      //example: fields=value1, vaule2, value3,
      if (format === 'array' && Object.keys(values).length > 0) {

        var arrayValues = [];
        angular.forEach(values, function (value, k) {
          if (value !== false) { this.push(k); }
        }, arrayValues);
        if (arrayValues.length) { getParams.push(key + '=' + arrayValues.join(',')); }
        return getParams.join('&');
      }
      //array_keys
      //example: exposed_filter1=key1
      if (format === 'array_keys') {
        angular.forEach(values, function (value, k) {
          if (value) { getParams.push(key + '=' + k) }
        });
        return getParams.join('&');
      }

      //array_key_value
      //example: parameters[key1]=value1
      if (format === 'array_key_value') {

        angular.forEach(values, function (value, k) {
          if (value) { getParams.push(key + "[" + k + "]=" + value); }
        });
        return getParams.join('&');
      }

    }


  }

})();