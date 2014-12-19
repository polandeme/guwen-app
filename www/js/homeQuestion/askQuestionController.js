define(function() {
	return function ($scope, homeQuestionService) {

		// $scope.qdata = homeQuestionService.qdata;
		// homeQuestionService.initHome();
		// $scope.loadMore = homeQuestionService.loadMore;
		$scope.qdetailData = homeQuestionService.qdetailData;
		$scope.submit = homeQuestionService.submit;
		// $scope.toggleLeft = homeQuestionService.toggleLeft;
	}
})