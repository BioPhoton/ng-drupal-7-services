;(function() {
	'use strict';

	/**
	 * @ngdoc service
	 * @name d7-services.commons.helperService:DrupalHelperService
	 * @description
	 * An abstract resource providing retrieve, create, update, delete and index functions.
	 * This service is used to handle the resources basic get put pust delete operations.
	 * @requires d7-services.commons.configurations:DrupalApiConstant
	 */
	angular.module('d7-services.commons.helperService', ['d7-services.commons.configurations'])
		   .factory('DrupalHelperService', DrupalHelperService);

	DrupalHelperService.$inject = ['DrupalApiConstant'];

	/** @ngInject */
	function DrupalHelperService(DrupalApiConstant) {

        var drupalHelperService = {
        		getApiPath		: getApiPath,
        		getDrupalPath	: getDrupalPath,
        		getPathToImgByStyle : getPathToImgByStyle,
        		structureField 	: structureField
        };
        
        return drupalHelperService;

        ////////////

		/**
		 * @ngdoc method
		 * @name getApiPath
		 * @methodOf d7-services.commons.helperService:DrupalHelperService
		 * @description
		 * Helper to get path to api
		 *
		 * @return {String} Path to api
		 *
		 * @example
		 * Create path to resource
		 * <pre>
		 * angular
		 *  .module('myModule', ['d7-services.commons'])
		 *  .controller('myController',function ($scope,DrupalHelperService) {
		 *    var requestConfig = {
		 *    	url 	: DrupalHelperService.getApiPath()+'resource?param=test',
		 *		method 	:'GET'
		 *    };
		 * }
		 * </pre>
		 */
        function getApiPath() {
        	return DrupalApiConstant.drupal_instance +  DrupalApiConstant.api_endpoint;
        }

		/**
		 * @ngdoc method
		 * @name getDrupalPath
		 * @methodOf d7-services.commons.helperService:DrupalHelperService
		 * @description
		 * Helper to get path to drupal server
		 *
		 * @return {String} Path to drupal server
		 *
		 * @example
		 * Create path to resource
		 * <pre>
		 * angular
		 *  .module('myModule', ['d7-services.commons'])
		 *  .controller('myController',function ($scope,DrupalHelperService) {
		 *    var DrupalHelperService.getDrupalPath()+'resource?param=test';
		 * }
		 * </pre>
		 */
        function getDrupalPath() {
        	return DrupalApiConstant.drupal_instance;
        }

		//
		/**
		 * @ngdoc method
		 * @name getPathToImgByStyle
		 * @methodOf d7-services.commons.helperService:DrupalHelperService
		 * @description
		 * Helper to get full path to image style.
		 *
		 * @param {String} style - Path segment from you image style path with out the "/". ("medium").
		 *   Image styles are configurable in constant.
		 *   @see (link:d7-services.commons.configurations:DrupalApiConstant)
		 * @param {String} [isPrivate] - whether the image is in your public our private folder. Default is public.
		 *
		 * @return {String} Path to api
		 *
		 * @example
		 * Create path to resource
		 * <pre>
		 * angular
		 *  .module('myModule', ['d7-services.commons'])
		 *  .controller('myController',function ($scope,DrupalHelperService) {
		 *
		 *    var imgPath = DrupalHelperService.getPathToImgByStyle()+'image_name_0.png';
		 * }
		 * </pre>
		 */
        function getPathToImgByStyle(style, isPrivate) {
			return  getDrupalPath() + DrupalApiConstant.filesPath+DrupalApiConstant.imageStylesPath+style+'/'+ ( (isPrivate)?DrupalApiConstant.privateFilePath:DrupalApiConstant.publicFilePath );
        }
        
        
       
		/**
    	 * https://github.com/jbeuckm/drupal-client/blob/master/lib/field.js
    	 * Create the basic field structure for uploading a field.
    	 * 
    	 * Example input output 
    	 * 
    	 * String:
    	 * IN:
    	 * OUT: 
    	 * 
    	 * Object:
    	 * IN: 	{ value : 'foobar foo', summary : 'foobar' } 
    	 * OUT: 	{ und : [{ value : 'foobar foo', summary : 'foobar' }]} 
    	 * 
    	 */
        //@TODO refactore and add language support
        function structureField(value, label, language) {
    	  // record optional label string
          // default is "value"
    	  var	prepatedData = undefined,
    	  		label = label || "value",
    	  		language = (language !== undefined)?language:DrupalApiConstant.LANGUAGE_NONE;    	  

    	  if (angular.isObject(value)) {
    		  prepatedData =  {};
    		  prepatedData[language] = [value];
    	  }
    	  
    	  return prepatedData;

    	  if (value instanceof Date) {

    	    var prepatedData = {
    	      value: {
    	        date: (value.getMonth()+1)+'/'+value.getDate()+'/'+value.getFullYear()+' - '+value.getHours()+':'+value.getMinutes()+':'+value.getSeconds()
    	      }
    	    };

    	    return {
    	    	und: [
    	    	   prepatedData
    	      ]
    	    };
    	    
    	  } 
    	  
    	  ////
    	  
    	  
    	// record optional label string or default to "value"
    	  var label = label || "value";
    	  var language_key = (language)? function() {return language}:function() {return baseResourceConfig.LANGUAGE_NONE};

    	  if (angular.isArray(value)) {

    	    var field_array = [];
    	    for (var i= 0, l=value.length; i<l; i++) {
    	      var item = {};
    	      item[label] = value[i];

    	      field_array.push(item);
    	    }
    	    return {
    	      und: field_array
    	    };
    	  }
    	  
    	  if (angular.isObject(value)) {

      	    var field_array = [];
      	    for (var i= 0, l=value.length; i<l; i++) {
      	      var item = {};
      	      item[label] = value[i];

      	      field_array.push(item);
      	    }
      	    return {
      	      und: field_array
      	    };
      	  }
    	  
    	  
    	  if (value instanceof Date) {

    	    var obj = {
    	      value: {
    	        date: (value.getMonth()+1)+'/'+value.getDate()+'/'+value.getFullYear()+' - '+value.getHours()+':'+value.getMinutes()+':'+value.getSeconds()
    	      }
    	    };

    	    return {
    	    	und: [
    	        obj
    	      ]
    	    };
    	  }

    	  // field value given with label(s) already built
    	  if (typeof value == "object") {
    	    return {
    	    	und: [
    	        value
    	      ]
    	    }
    	  }
    	  
    	  
        }
        //

    	
	};

})();