;(function() {
    'use strict';

	/**
	 * @ngdoc object
	 * @name d7-services.resources.comment:Comment
	 * @description
	 * This module bundles all modules related to drupal comment resource
	 * @requires d7-services.resources.comment.resourceConstant:CommentResourceConstant
	 * @requires d7-services.resources.comment.resource:CommentResource
	 * @requires d7-services.resources.comment.channelConstant:CommentChannelConstant
	 * @requires d7-services.resources.comment.channel:CommentChannel
	 */
	angular
	    .module('d7-services.resources.comment', 
	    		['d7-services.resources.comment.resourceConstant', 
	    		 'd7-services.resources.comment.resource', 
	    		 'd7-services.resources.comment.channelConstant', 
	    		 'd7-services.resources.comment.channel']);
})();