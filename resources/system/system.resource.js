(function() {
    'use strict';

	/**
	 * System Resource Modules
	**/
    angular
    .module('ngDrupal7Services-3_x.resources.system.resource', ['ngDrupal7Services-3_x.commons.configurations', 'ngDrupal7Services-3_x.resources.system.resourceConstant', 'ngDrupal7Services-3_x.resources.system.channel'])
    
    /**
	 * SystemResource
	 * 
	 * This service mirrors the Drupal system resource of the services 3.x module.
	 * To use this you have to set following line in your Drupal CORS module settings
	 * your_api_endpoint/system/*|<mirror>|POST|Content-Type,Authorization|true
	 * 
	**/
    .service('SystemResource', SystemResource);


/** @ngInject */

function SystemResource($http, $q, DrupalApiConstant, SystemResourceConstant, SystemChannel) { 
	/*
	 * connect
	 * 
	 * Returns the details of currently logged in user.
	 * 
	 * Method: POST 
	 * Url: http://drupal_instance/api_endpoint/system/connect
	 * Headers: Content-Type:application/json
	 * 
	 * @return 	{Promise}
	 * 
	 */
	var connect = function() {
		
		var connectPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + SystemResourceConstant.resourcePath + '/' + SystemResourceConstant.actions.connect,
		defer = $q.defer(),
		requestConfig = {
				method :'POST',
				url : connectPath,
				headers : {
					"Content-Type"	: "application/json",
				}
		};
		
		$http(requestConfig)
		.success(function(responseData, status, headers, config){
			SystemChannel.publishSystemConnectConfirmed(responseData);
			defer.resolve(responseData);
		})
		.error(function(responseData, status, headers, config){
			SystemChannel.publishSystemConnectFailed(responseData);
			defer.reject(responseData);
		});
		
		return defer.promise;

	};
	
	/*
	 * get_variable
	 * 
	 * Returns the value of a system variable using variable_get().
	 * Method: POST
	 * Url: http://drupal_instance/api_endpoint/system/get_variable
	 * Headers: Content-Type:application/json
	 * 
	 * @param 	{String} name The name of the variable to return, required:true, source:post body
	 * @param 	{String} _default The default value to use if this variable has never been set, required:false, source:post body
	 * 
	 * @return 	{Promise}
	 *
	 */
	var get_variable = function(data){
		
		var getVariablePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + SystemResourceConstant.resourcePath + '/' + SystemResourceConstant.actions.get_variable,
		defer = $q.defer(),
		requestConfig = {
				method 	:'POST',
				url 	: getVariablePath,
				headers : {
					"Content-Type"	: "application/json",
				},
				data 	: {
					name : data.name,
					default : data._default
				}
		},
		errors = [];
		
		if(!data._default) {
			delete requestConfig.data.default;
		}
		
		//basic validation
		if(!data.name) { 
			errors.push('Param name is required.');
		}
		
		if(errors.length != 0) {
			SystemChannel.publishSystemGetVariableFailed(errors);
			defer.reject(errors); 
			return defer.promise;
		}
		
		$http(requestConfig)
		.success(function(responseData, status, headers, config){
			SystemChannel.publishSystemGetVariableConfirmed(responseData);
			defer.resolve(responseData);
		})
		.error(function(responseData, status, headers, config){
			SystemChannel.publishSystemGetVariableFailed(responseData);
			defer.reject(responseData);
		});
		
		return defer.promise;
	};
	
	/*
	 * set_variable
	 * 
	 * Returns the value of a system variable using variable_get().
	 * Method: POST
	 * Url: http://drupal_instance/api_endpoint/system/get_variable
	 * Headers: Content-Type:application/json
	 * 
	 * @param 	{String} name The name of the variable to set, required:true, source:post body
	 * @param 	{String} value The value to set, required:true, source:post body
	 * 
	 * @return 	{Promise}
	 * 
	 */
	var set_variable = function(data){
		var setVariablePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + SystemResourceConstant.resourcePath + '/' + SystemResourceConstant.actions.set_variable,
		defer = $q.defer(),
		requestConfig = {
				method 	:'POST',
				url 	: setVariablePath,
				headers : {
					"Content-Type"	: "application/json",
				},
				data 	: {
					name 	: data.name,
					value 	: data.value
				}
		},
		errors = [];
		
		//basic validation
		if(!data.name) { errors.push('Param name is required.'); }
		if(!data.value) { errors.push('Param value is required.');}
				
		if(errors.length != 0) {
			SystemChannel.publishSystemSetVariableFailed({data: errors});
			defer.reject(errors); 
			return defer.promise;
		}
		
		
		$http(requestConfig)
		.success(function(responseData, status, headers, config){
			SystemChannel.publishSystemSetVariableConfirmed(responseData);
			defer.resolve(responseData);
		})
		.error(function(responseData, status, headers, config){
			SystemChannel.publishSystemSetVariableFailed(responseData);
			defer.reject(responseData);
		});
		
		return defer.promise;
	};
	
	/*
	 * del_variable
	 * 
	 * Deletes a system variable using variable_del().
	 * Method: POST
	 * Url: http://drupal_instance/api_endpoint/system/get_variable
	 * Headers: Content-Type:application/json
	 * 
	 * @param 	{String} name The name of the variable to delete, required:true, source:post body
	 * 
	 * @return 	{Promise}
	 * 
	 */
	var del_variable = function(data){
		var delVariablePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + SystemResourceConstant.resourcePath + '/' + SystemResourceConstant.actions.del_variable,
		defer = $q.defer(),
		requestConfig = {
				method 	:'POST',
				url 	: delVariablePath,
				headers : {
					"Content-Type"	: "application/json",
				},
				data 	: {
					name : data.name
				}
		},
		errors = [];
		
		//basic validation
		if(!data.name) { 
			errors.push('Param name is required.');
		}
		
		if(errors.length != 0) {
			SystemChannel.publishSystemDelVariableFailed(errors);
			defer.reject(errors); 
			return defer.promise;
		}
		
		$http(requestConfig)
		.success(function(responseData, status, headers, config){
			SystemChannel.publishSystemDelVariableConfirmed(responseData);
			defer.resolve(responseData);
		})
		.error(function(responseData, status, headers, config){
			SystemChannel.publishSystemDelVariableFailed(responseData);
			defer.reject(responseData);
		});
		
		return defer.promise;
	};

	//public methods	
	return {
		connect 		: connect,
		get_variable 	: get_variable,
		set_variable 	: set_variable,
		del_variable 	: del_variable
	};

};
 
SystemResource.$inject = ['$http', '$q', 'DrupalApiConstant', 'SystemResourceConstant', 'SystemChannel'];

})();