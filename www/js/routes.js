define(['./app'], function (app) {
	'use strict';
	return app.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider

			//home page
			.state('home', {
				url: '/home',
				templateUrl: 'views/home.html'
			})

			//question detail
			.state('questionDetail', {
				url: '/questionDetail/:id',
				templateUrl: 'views/questionDeatil.html'
			})

			//user login
			.state('login', {
				url: '/user/login',
				templateUrl: 'views/user/login.html'
			})
			.state('askquestion', {
				url: '/ask',
				templateUrl: 'views/question/askquestion.html'
			});

            $urlRouterProvider.otherwise('/ask');

	})
})