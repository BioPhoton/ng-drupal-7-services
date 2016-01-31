;(function() {
    'use strict';
    
    /**
	 *  Constants for views request option names
	 *  
	 *  NOTE: if you want to change this constant do this in your app.js config section
	 */
	var ViewsOperatorsConstant =  {
			sort_operators : {
				asc		: "ASC",
				desc	: "DESC"
			},
			filter_operators : {
				is_less_than				: "<",
				is_less_than_or_equal_to	: "<=",
				is_equal_to					: "=",
				is_not_equal_to				: "!=",
				is_greater_than_or_equal_to	: ">=",
				is_greater_than				: ">",
				is_between					: "between",
				is_not_between				: "not+between",
				regular_expression			: "regular_expression"
	 		}
	};

	/**
	 * Views Constant Modules
	 */
	angular
	    .module('d7-services.resources.views.operatorsConstant', [])
	    .constant("ViewsOperatorsConstant", ViewsOperatorsConstant);
	
})();
