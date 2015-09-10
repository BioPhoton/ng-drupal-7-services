;(function() {
    'use strict';

    /**
	 *  Constants for Drupal Services 3.x API
	 */
	var ValidationConstant =  {
		    //validation errors
			//if data not given
	    	isRequired : 'Param %s is required.',
	    	isInteger : 'Param %s has to be an integer.'	
	};
    
	/**
	 *  ValidationConstant Module
	 */
	angular
	    .module('ngDrupal7Services-3_x.commons.validationConstant', [])
	    .constant("ValidationConstant", ValidationConstant);
	

})();
