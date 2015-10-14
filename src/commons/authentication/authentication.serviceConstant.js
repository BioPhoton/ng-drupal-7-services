(function() {
    'use strict';

    /**
	 *  Constants for authenticationService 
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	**/
	var AuthenticationServiceConstant =  {
		//the drupals guest user obj
		anonymousUser : {
				"uid"		: 0,
				"roles"		: {
								"1" : "anonymous user"
							  },
				"cache"		: 0,
				"timestamp"	: Date.now()
		}
			
	};
	
	
    
	/**
	 * API authentication service constant
	**/
	angular
	    .module('ngDrupal7Services-3_x.commons.authentication.serviceConstant', [])
	    .constant("AuthenticationServiceConstant", AuthenticationServiceConstant);

})();