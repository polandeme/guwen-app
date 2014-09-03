define(function() {
	return function ($scope, homeQuestionService) {

		$scope.qdata = homeQuestionService.qdata;
		homeQuestionService.initHome();
		$scope.loadMore = homeQuestionService.loadMore;
		$scope.questionDetail = homeQuestionService.questionDetail;
	}
})