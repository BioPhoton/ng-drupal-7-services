;(function() {
    'use strict';

    angular.module('d7-services.commons', 
    		['d7-services.commons.authentication', 
    		 'd7-services.commons.http', 
    		 'd7-services.commons.directives',
             
    		 'd7-services.commons.baseChannel', 
    		 'd7-services.commons.baseResource', 
    		 'd7-services.commons.configurations', 
    		 'd7-services.commons.helperService', 
    		 'd7-services.commons.validationConstant']);

})();