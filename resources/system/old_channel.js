(function() {
	'use strict';

	/**
	 * System Channel Module
	 */
	angular.module('ngDrupal7Services-3_x.resources.system.channel', ['ngDrupal7Services-3_x.resources.system.channelConstant'])
		   .factory('SystemChannel', SystemChannel);

	/**
	 * Notification channel for system resource 
	 **/
	
	/** @ngInject */
	function SystemChannel($rootScope, SystemChannelConstant) {
		// Connect Action
		// Publish system connect confirmed event
		var publishSystemConnectConfirmed = function(user) {
			$rootScope.$broadcast(SystemChannelConstant.system_connectConfirmed,
					{
						user : user
					});
		};
		// Subscribe to system connect confirmed event
		var onSystemConnectConfirmed = function($scope, handler) {
			$scope.$on(SystemChannelConstant.system_connectConfirmed, function(
					event, args) {
				handler(args.user);
			});
		};

		// Publish system connect failed event
		var publishSystemConnectFailed = function(error) {
			$rootScope.$broadcast(SystemChannelConstant.system_connectFailed, {
				error : error
			});
		};
		// Subscribe to system connect failed event
		var onSystemConnectFailed = function($scope, handler) {
			$scope.$on(SystemChannelConstant.system_connectFailed, function(
					event, args) {
				handler(args.error);
			});
		};

		// Get Variable Action
		// Publish system get variable confirmed event
		var publishSystemGetVariableConfirmed = function(variable) {
			$rootScope.$broadcast(
					SystemChannelConstant.system_getVariableConfirmed, {
						variable : variable
					});
		};
		// Subscribe to system get variable confirmed event
		var onSystemGetVariableConfirmed = function($scope, handler) {
			$scope.$on(SystemChannelConstant.system_getVariableConfirmed,
					function(event, args) {
						handler(args.variable);
					});
		};

		// Publish system get variable failed event
		var publishSystemGetVariableFailed = function(error) {
			$rootScope.$broadcast(
					SystemChannelConstant.system_getVariableFailed, {
						error : error
					});
		};
		// Subscribe to system get variable failed event
		var onSystemGetVariableFailed = function($scope, handler) {
			$scope.$on(SystemChannelConstant.system_getVariableFailed, function(
					event, args) {
				handler(args.error);
			});
		};

		// Set Variable Action

		// Publish system set variable confirmed event
		var publishSystemSetVariableConfirmed = function(variable) {
			$rootScope.$broadcast(
					SystemChannelConstant.system_setVariableConfirmed, {
						variable : variable
					});
		};
		// Subscribe to system connect set variable event
		var onSystemSetVariableConfirmed = function($scope, handler) {
			$scope.$on(SystemChannelConstant.system_setVariableConfirmed,
					function(event, args) {
						handler(args.variable);
					});
		};

		// Publish system set variable failed event
		var publishSystemSetVariableFailed = function(error) {
			$rootScope.$broadcast(
					SystemChannelConstant.system_setVariableFailed, {
						error : error
					});
		};
		// Subscribe to system set variable failed event
		var onSystemSetVariableFailed = function($scope, handler) {
			$scope.$on(SystemChannelConstant.system_setVariableFailed, function(
					event, args) {
				handler(args.error);
			});
		};

		// Del Variable Action

		// Publish system del variable confirmed event
		var publishSystemDelVariableConfirmed = function(variable) {
			$rootScope.$broadcast(
					SystemChannelConstant.system_delVariableConfirmed, {
						variable : variable
					});
		};
		// Subscribe to system connect set variable event
		var onSystemDelVariableConfirmed = function($scope, handler) {
			$scope.$on(SystemChannelConstant.system_delVariableConfirmed,
					function(event, args) {
						handler(args.variable);
					});
		};

		// Publish system del variable failed event
		var publishSystemDelVariableFailed = function(error) {
			$rootScope.$broadcast(
					SystemChannelConstant.system_delVariableFailed, {
						error : error
					});
		};
		// Subscribe to system set variable failed event
		var onSystemDelVariableFailed = function($scope, handler) {
			$scope.$on(SystemChannelConstant.system_delVariableFailed, function(
					event, args) {
				handler(args.error);
			});
		};

		// public methods
		return {
			// System events
			// Connect events
			publishSystemConnectConfirmed : publishSystemConnectConfirmed,
			onSystemConnectConfirmed : onSystemConnectConfirmed,
			publishSystemConnectFailed : publishSystemConnectFailed,
			onSystemConnectFailed : onSystemConnectFailed,
			// Get varaible events
			publishSystemGetVariableConfirmed : publishSystemGetVariableConfirmed,
			onSystemGetVariableConfirmed : onSystemGetVariableConfirmed,
			publishSystemGetVariableFailed : publishSystemGetVariableFailed,
			onSystemGetVariableFailed : onSystemGetVariableFailed,
			// Set varaible events
			publishSystemSetVariableConfirmed : publishSystemSetVariableConfirmed,
			onSystemSetVariableConfirmed : onSystemSetVariableConfirmed,
			publishSystemSetVariableFailed : publishSystemSetVariableFailed,
			onSystemSetVariableFailed : onSystemSetVariableFailed,
			// Del varaible events
			publishSystemDelVariableConfirmed : publishSystemDelVariableConfirmed,
			onSystemDelVariableConfirmed : onSystemDelVariableConfirmed,
			publishSystemDelVariableFailed : publishSystemDelVariableFailed,
			onSystemDelVariableFailed : onSystemDelVariableFailed,
		};

	};

	SystemChannel.$inject = [ '$rootScope', 'SystemChannelConstant' ];

})();