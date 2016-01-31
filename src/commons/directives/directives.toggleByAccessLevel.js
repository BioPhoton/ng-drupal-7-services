;(function() {
    'use strict';

    angular
        .module('d7-services.commons.directives.toggleByAccesslevel', ['d7-services.commons.authentication.channel', 'd7-services.commons.authentication.service'])
        .directive('toggleByAccesslevel', toggleByAccesslevel);

    /**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
    toggleByAccesslevel.$inject = ['AuthenticationChannel', 'AuthenticationService'];

    /** @ngInject */
    function toggleByAccesslevel(AuthenticationChannel, AuthenticationService) {

        return {
        	restrict: 'A',
        	
            link: function($scope, element, attrs) {
            
            	$scope.user = AuthenticationService.getCurrentUser();
            	
            	var prevDisp = element.css('display')
                    , userRoles = $scope.user.roles 
                    , accessLevel,
                    toggleAction;
            	
            	if(attrs.toggleAction !== 'hide' && attrs.toggleAction !== 'show') {
            		toggleAction = "hide";
            	} else {
            		toggleAction = attrs.toggleAction;
            	}

                AuthenticationChannel.subCurrentUserUpdated($scope, currentUserUpdatedHandler);

                attrs.$observe('toggleByAccesslevel', function(al) {
                	var parsed = [];
                    if(al) 
                    {
                    	accessLevel = $scope.$eval(al);
                	}
                    
                    updateCSS();
                });

                ///////////////////////////////////////////////////
                
                //hide or shoe elem by toggleAction
                function updateCSS() {

                    if(userRoles && accessLevel) {

                    	if(toggleAction == 'hide') {
                    		
                    		if(!AuthenticationService.isAuthorized(accessLevel))
                                element.css('display', 'none');
                            else
                                element.css('display', prevDisp);
                    	} 
                    	else if(toggleAction == 'show') {
                    		
                    		if(!AuthenticationService.isAuthorized(accessLevel))
                    			element.css('display', prevDisp);
                            else
                            	element.css('display', 'none');
                    	}
                    	
                        
                    }
                };
                
                function currentUserUpdatedHandler(user){
                	$scope.user = user;
                    userRoles = $scope.user.roles;
                    updateCSS();
                };
                
            }
        };
        
        
    };


})();