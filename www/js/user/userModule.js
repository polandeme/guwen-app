define(['angular',
		'user/userService',
		'user/userLoginController'
	], function (angualr, userService, userLoginController) {
		var userModule = angular.module('guwen.userModule', []);
			userModule.factory('guwen.userService', ['$http', '$location', userService]);
			userModule.controller('guwen.userLoginController', ['$scope', 'guwen.userService', userLoginController])

			return userModule;
	})