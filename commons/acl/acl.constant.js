(function() {
    'use strict';

    /**
	 *  Constants for access control options
	 */
	var accessControlConstant = {
			//default drupal roles
	   		roles :[
	                'anonymous user',
	                'authenticated user',
	                'administrator'],
	        //default access levels
            accessLevels : {
                'public' : "*",
                'anon': ['anonymous user'],
                'user' : ['authenticated user'],
                'admin': ['administrator']
            };
    
	/**
	 *  AccessControlConstant Module
	 */
	angular
	    .module('ngDrupal7Services-3_x.commons.acl.constant', [])
	    .constant("accessControlConstant", accessControlConstant);
	

})();