define(function () {
	return function ($scope, userService) {
		$scope.profile = userService.profile;
		$scope.login = userService.login;
	}
})