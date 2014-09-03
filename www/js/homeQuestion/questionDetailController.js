define(function () {
	return function ($scope, homeQuestionService) {
		
		homeQuestionService.getQuestionDetail();
		$scope.qdetailData = homeQuestionService.qdetailData;
	}
})