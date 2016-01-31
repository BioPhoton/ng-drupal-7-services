(function() {
    'use strict';

    /**
	 *  Constants for authenticationService 
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	**/
    
    //setup constant
    
    //default roles
    var anonymous_user 		= { 
	    					'id' 	: 1,
				    		'role' 	: "anonymous user"
				    		},
		authenticated_user = { 
							'id' 	: 2,
				    		'role' 	: "authenticated user"
				    		},
	    administrator 		= { 
								'id' 	: 3,
					    		'role' 	: "administrator"
					    	};
    //default access levels
	var publicLevel = "*",
		anonLevel = {},
		userLevel = {},
		adminLevel = {};
		
		anonLevel[anonymous_user.id] 		= anonymous_user.role;
		userLevel[authenticated_user.id] 	= authenticated_user.role;
		adminLevel[administrator.id ] 		= administrator.role;
			
	var	AuthenticationServiceConstant =  {
			//the drupals guest user obj
			anonymousUser : {
					"uid"		: 0,
					"roles"		: {},
					"cache"		: 0,
					"timestamp"	: Date.now()
			},
			//default drupal roles key is role id
	   		roles : {},
	        //default access levels
	        //here you can grand access for role groups
	        accessLevels : {
	            'public' : publicLevel,
	            'anon':  [anonLevel],
	            'user' : [userLevel],
	            'admin': [adminLevel]
	        }	
    };
    
    AuthenticationServiceConstant.anonymousUser.roles[anonymous_user.id] = anonymous_user.role;
    
    AuthenticationServiceConstant.roles[anonymous_user.id] = anonymous_user.role;
	AuthenticationServiceConstant.roles[authenticated_user.id] = authenticated_user.role;
	AuthenticationServiceConstant.roles[administrator.id] = administrator.role;
	
	/**
	 * API authentication service constant
	**/
	angular
	    .module('d7-services.commons.authentication.serviceConstant', [])
	    .constant("AuthenticationServiceConstant", AuthenticationServiceConstant);

})();