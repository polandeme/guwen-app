define(['angular',
		'homeQuestion/homeQuestionService',
		'homeQuestion/homeQuestionController',
		'homeQuestion/questionDetailController',
		'homeQuestion/askQuestionController'
	], function (angular, homeQuestionService, homeQuestionController, questionDetailController, askQuestionController) {
		var homeModule = angular.module('guwen.homeQuestionModule',['ui.router']);
			homeModule.factory('homeModule.homeQuestionService',['$http', "$ionicLoading", '$q','$stateParams', homeQuestionService]);
			homeModule.controller('homeModule.homeQuestionController',['$scope',
																		'homeModule.homeQuestionService',
																		homeQuestionController]);
			homeModule.controller('homeModule.questionDetailController',['$scope', 'homeModule.homeQuestionService',questionDetailController])
			homeModule.controller('homeModule.askQuestionController',['$scope', 'homeModule.homeQuestionService',askQuestionController])

			return homeModule;

	})