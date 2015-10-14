;(function() {
    'use strict';

	/**
	 * System Resource Modules
	 * 
	 * see sourcecode in services/resources/system_resource.inc
	 * 
	**/
    angular.module('ngDrupal7Services-3_x.resources.system.resource', ['ngDrupal7Services-3_x.commons.configurations', 'ngDrupal7Services-3_x.commons.baseResource', 'ngDrupal7Services-3_x.resources.system.resourceConstant', 'ngDrupal7Services-3_x.resources.system.channel'])
    

    /**
	 * SystemResource
	 * 
	 * This service mirrors the Drupal system resource of the services 3.x module.
	 * To use this you have to set following line in your Drupal CORS module settings
	 * 
	**/
    .factory('SystemResource', SystemResource);

    /**
	 * Manually identify dependencies for minification-safe code
	 * 
	**/
    SystemResource.$inject = ['$http', 'DrupalApiConstant', 'baseResource', 'SystemResourceConstant', 'SystemChannel'];
    
	/** @ngInject */
	function SystemResource($http, DrupalApiConstant, baseResource, SystemResourceConstant, SystemChannel) { 
		
		//setup and return service            	
        var systemResourceService = {
			connect 		: connect,
			get_variable 	: get_variable,
			set_variable 	: set_variable,
			del_variable 	: del_variable
        };
        
        return systemResourceService;

        ////////////
        
        /**
		 * connect
		 * 
		 * Returns the details of currently logged in user.
		 * 
		 * Method: POST 
		 * Url: http://drupal_instance/api_endpoint/system/connect
		 * 
		 * @return 	{Promise} Object with session id, session name and a user object.
		 * 
		**/
        function connect() {
			
			//undefined check
	    	//data = (data)?data:{};
	    	
			//validation of params
	    	var errors = [];
	    	
			var connectPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + SystemResourceConstant.resourcePath + '/' + SystemResourceConstant.actions.connect,
				requestConfig = {
						method :'POST',
						url : connectPath
				};
			
			return baseResource.request(requestConfig,SystemChannel.pubConnectConfirmed,  SystemChannel.pubConnectFailed);
			
		};
		
		/**
		 * get_variable
		 * 
		 * Returns a persistent variable.
		 * Case-sensitivity of the variable_* functions depends on the database collation used. To avoid problems, always use lower case for persistent variable names.
		 * 
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/system/get_variable
		 * 
		 * @params  {Object} data the requests data
		 * 			@key 	{String} name The name of the variable to return, required:true, source:post body
		 * 			@key 	{String} _default The default value to use if this variable has never been set, required:false, source:post body
		 * 
		 * @return 	{Promise} The value of the variable. Unserialization is taken care of as necessary.
		 *
		**/
		function get_variable(data){
			
			//undefined check
	    	data = (data)?data:{};
			
			var getVariablePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + SystemResourceConstant.resourcePath + '/' + SystemResourceConstant.actions.get_variable,
				requestConfig = {
						method 	:'POST',
						url 	: getVariablePath,
						data 	: {
							name : data.name,
						}
				};
			
			return baseResource.request(requestConfig, SystemChannel.pubGetVariableConfirmed, SystemChannel.pubGetVariableFailed);
			
		};
		
		/**
		 * set_variable
		 * 
		 * Sets a persistent variable.
		 * Case-sensitivity of the variable_* functions depends on the database collation used. To avoid problems, always use lower case for persistent variable names.
		 * 
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/system/set_variable
		 * 
		 * @params  {Object} data the requests data
		 * 			@key 	{String} name The name of the variable to set, required:true, source:post body
		 * 			@key 	{String} value The value to set. This can be any PHP data type; these functions take care of serialization as necessary, required:true, source:post body
		 * 
		 * @return 	{Promise} True if successful false if not
		 * 
		**/
		function set_variable(data){
			
			//undefined check
	    	data = (data)?data:{};
	
			var setVariablePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + SystemResourceConstant.resourcePath + '/' + SystemResourceConstant.actions.set_variable,
				requestConfig = {
						method 	:'POST',
						url 	: setVariablePath,
						data 	: {
							name 	: data.name,
							value 	: data.value
						}
				};

			return baseResource.request(requestConfig, SystemChannel.pubSetVariableConfirmed, SystemChannel.pubSetVariableFailed);
			
		};
		
		/**
		 * del_variable
		 * 
		 * Unsets a persistent variable.
		 * Case-sensitivity of the variable_* functions depends on the database collation used. To avoid problems, always use lower case for persistent variable names.
		 * 
		 * Method: POST
		 * Url: http://drupal_instance/api_endpoint/system/del_variable
		 * 
		 * @params  {Object} data the requests data
		 * 			@key 	{String} name The name of the variable to undefine, required:true, source:post body
		 * 
		 * @return 	{Promise}
		 * 
		**/
		function del_variable(data){
			
			//undefined check
	    	data = (data)?data:{};
	    	
			var delVariablePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + SystemResourceConstant.resourcePath + '/' + SystemResourceConstant.actions.del_variable,
				requestConfig = {
						method 	:'POST',
						url 	: delVariablePath,
						data 	: {
							name : data.name
						}
				};
			
			return baseResource.request(requestConfig, SystemChannel.pubDelVariableConfirmed, SystemChannel.pubDelVariableFailed);

		};
	
	};

})();