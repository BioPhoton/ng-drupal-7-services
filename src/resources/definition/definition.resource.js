;(function() {
    'use strict';

	/**
	 * Definition Resource Modules
	 * 
	 * see sourcecode in services/resources/definition_resource.inc
	**/
    angular.module('d7-services.resources.definition.resource', ['d7-services.commons.configurations', 'd7-services.resources.definition.resourceConstant', 'd7-services.resources.definition.channel', 'd7-services.commons.baseResource'])
    
    /**
	 * DefinitionResource
	 * 
	 * This service mirrors the Drupal definition resource of the services 3.x module.
	 * To use this you have to set following line in your Drupal CORS module settings
	 * your_api_endpoint/definition/*|<mirror>|POST|Content-Type,Authorization|true
	 * 
	**/
    .factory('DefinitionResource', DefinitionResource);

    /**
	 * Manually identify dependencies for minification-safe code
	 * 
	**/
    DefinitionResource.$inject = ['$http', 'BaseResource', 'DrupalApiConstant', 'DefinitionResourceConstant', 'DefinitionChannel'];
    
	/** @ngInject */
	function DefinitionResource($http, BaseResource, DrupalApiConstant, DefinitionResourceConstant, DefinitionChannel) { 
		
		//setup and return service            	
        var definitionResourceService = {
        	//CRUD operations
    	    index 		: index
        };
        
        return definitionResourceService;

        ////////////

	    /**
	     * index
	     * 
	     * List all definitions
	     * 
	     * Method: GET
		 * Url: http://drupal_instance/api_endpoint/definition
		 * 
		 * @params  {Object} data the requests data
		 *
	     * 
	     * @return 	{Promise}
	     *
	    **/
	    function index() {
	    	var indexPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + DefinitionResourceConstant.resourcePath + '/';
	    	return BaseResource.retrieve(indexPath, DefinitionChannel.pubIndexConfirmed, DefinitionChannel.pubIndexFailed);
	    };

	};

})();