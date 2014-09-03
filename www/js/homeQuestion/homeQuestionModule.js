define(['angular',
		'homeQuestion/homeQuestionService',
		'homeQuestion/homeQuestionController',
		'homeQuestion/questionDetailController'
	], function (angular, homeQuestionService, homeQuestionController, questionDetailController) {
		var homeModule = angular.module('guwen.homeQuestionModule',['ui.router']);
			homeModule.factory('homeModule.homeQuestionService',['$http', '$q','$stateParams', homeQuestionService]);
			homeModule.controller('homeModule.homeQuestionController',['$scope',
																		'homeModule.homeQuestionService', 
																		homeQuestionController]);
			homeModule.controller('homeModule.questionDetailController',['$scope', 'homeModule.homeQuestionService',questionDetailController])

			return homeModule;

	})