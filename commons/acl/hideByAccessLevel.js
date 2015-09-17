;(function() {
    'use strict';

    angular
        .module('commons.acl.hideByAccessLeve', ['ngDrupal7Services-3_x.commons.authentication.channel', 'ngDrupal7Services-3_x.commons.authentication.service'])
        .directive('hideByAccessLeve', hideByAccessLeve);

    /**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
    hideByAccessLeve.$inject = ['AuthenticationChannel', 'AuthenticationService'];

    /** @ngInject */
    function hideByAccessLeve(AuthenticationChannel, AuthenticationService) {

        return {
        	restrict: 'A',
            link: function($scope, element, attrs) {
            	
            	$scope.user = AuthenticationService.getCurrentUser();
            	var prevDisp = element.css('display')
                    , userRoles = $scope.user.roles 
                    , accessLevel;

                AuthenticationChannel.subAuthenticationCurrentUserUpdated($scope, currentUserUpdatedHandler);

                attrs.$observe('accessLevel', function(al) {
                	   var parsed = [];
                    if(al) 
                    {
                    	accessLevel = $scope.$eval(al);
                	}
                    updateCSS();
                });

                function updateCSS() {
                    if(userRoles && accessLevel) {
                        if(!AccessControlService.authorize(accessLevel))
                            element.css('display', 'none');
                        else
                            element.css('display', prevDisp);
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