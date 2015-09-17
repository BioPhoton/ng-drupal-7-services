/**
 * AccessControlModule
 * 
 */
var accessControlModule = angular.module('ngDrupal7Services-3_x.commons.accesss-control', ['ApiAuthModules']);


/**
 * AccessControlService
 * 
 */
accessControlModule.service('AccessControlService', function($rootScope, $http, $q, ApiAuthService) {
	
	var authorize = function(accessLevel, roles) {
		 //if no user is given set unauthorized user
		 currentUser = ApiAuthService.getCurrentUser();
		 //
	     if(roles === undefined) {
			roles = currentUser.roles; 
         }
	    
	     //
	     if(accessLevel == '*') { return true;}
	     
	     var isGranted = false;
		 for (var i = 0; i < accessLevel.length; i++) {
			 for (var prop in roles) {
				if(accessLevel[i] == currentUser.roles[prop]) {
					 isGranted = true;
				}
			 }
	     }
       return isGranted;
	};
	
	return {
		authorize : authorize,
	}
	
});


