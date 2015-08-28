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

function SystemResource($http, $q, drupalApiConstant, SystemResourceConstant, SystemChannel) { 
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
		
		var connectPath = drupalApiConstant.drupal_instance + drupalApiConstant.api_endpoint + SystemResourceConstant.resourcePath + '/' + SystemResourceConstant.actions.connect,
		defer = $q.defer(),
		requestConfig = {
				method :'POST',
				url : connectPath,
				headers : {
					"Content-Type"	: "application/json",
				}
		};
		
		$http(requestConfig)
		.success(function(data, status, headers, config){
			SystemResourceChannel.publishSystemConnectConfirmed(data);
			defer.resolve(data);
		})
		.error(function(data, status, headers, config){
			SystemResourceChannel.publishSystemConnectFailed(data);
			defer.reject(data);
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
	var get_variable = function(name, _default){
		
		var getVariablePath = drupalApiConstant.drupal_instance + drupalApiConstant.api_endpoint + SystemResourceConstant.resourcePath + '/' + SystemResourceConstant.actions.get_variable,
		defer = $q.defer(),
		requestConfig = {
				method 	:'POST',
				url 	: getVariablePath,
				headers : {
					"Content-Type"	: "application/json",
				},
				data 	: {
					name : name
				}
		},
		errors = [];
		
		if(!name) { 
			errors.push('Param name is required.');
		}
		
		if(errors.length != 0) {
			SystemResourceChannel.publishSystemGetVariableFailed(errors);
			defer.reject(errors); 
			return defer.promise;
		}
		
		$http(requestConfig)
		.success(function(value, status, headers, config){
			SystemResourceChannel.publishSystemGetVariableConfirmed(value);
			defer.resolve(data);
		})
		.error(function(data, status, headers, config){
			SystemResourceChannel.publishSystemGetVariableFailed(data);
			defer.reject(data);
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
	var set_variable = function(name, value){
		var setVariablePath = drupalApiConstant.drupal_instance + drupalApiConstant.api_endpoint + SystemResourceConstant.resourcePath + '/' + SystemResourceConstant.actions.set_variable,
		defer = $q.defer(),
		requestConfig = {
				method 	:'POST',
				url 	: setVariablePath,
				headers : {
					"Content-Type"	: "application/json",
				},
				data 	: {
					name 	: name,
					value 	: value
				}
		},
		errors = [];

		if(!value) { errors.push('Param value is required.');}
		if(!name) { errors.push('Param name is required.'); }
		
		if(errors.length != 0) {
			SystemResourceChannel.publishSystemSetVariableFailed({data: errors});
			defer.reject(errors); 
			return defer.promise;
		}
		
		
		$http(requestConfig)
		.success(function(data, status, headers, config){
			SystemResourceChannel.publishSystemSetVariableConfirmed({name: name, value: value});
			defer.resolve(data);
		})
		.error(function(data, status, headers, config){
			SystemResourceChannel.publishSystemSetVariableFailed({name: name, value: value});
			defer.reject(data);
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
	var del_variable = function(name){
		var delVariablePath = drupalApiConstant.drupal_instance + drupalApiConstant.api_endpoint + SystemResourceConstant.resourcePath + '/' + SystemResourceConstant.actions.del_variable,
		defer = $q.defer(),
		requestConfig = {
				method 	:'POST',
				url 	: delVariablePath,
				headers : {
					"Content-Type"	: "application/json",
				},
				data 	: {
					name : name
				}
		},
		errors = [];
		
		if(!name) { 
			errors.push('Param name is required.');
		}
		
		if(errors.length != 0) {
			SystemResourceChannel.publishSystemDelVariableFailed(errors);
			defer.reject(errors); 
			return defer.promise;
		}
		
		$http(requestConfig)
		.success(function(data, status, headers, config){
			SystemResourceChannel.publishSystemDelVariableConfirmed(name);
			defer.resolve(data);
		})
		.error(function(data, status, headers, config){
			SystemResourceChannel.publishSystemDelVariableFailed(data);
			defer.reject(data);
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

SystemResource.$inject = ['$http', '$q', 'drupalApiConstant', 'SystemResourceConstant', 'SystemChannel' ];

})();