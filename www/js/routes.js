define(['./app'], function (app) {
	'use strict';
	return app.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider

			//side menu
			.state('menu', {
				url: '/menu',
				abstract: true,
				templateUrl: 'views/sideMenu.html',
			})
			//home page
			.state('menu.home', {
				url: '/home',
				views: {
					'menuContent': {
				        templateUrl: 'views/home.html'
				     }
			  	}
			})

			//question detail
			.state('menu.questionDetail', {
				url: '/home/questionDetail/:id',
				views: {
					'menuContent': {
				        templateUrl: 'views/questionDeatil.html'
				     }
			  	}
			})

			//user login
			.state('menu.login', {
				url: '/login',
				views: {
					'menuContent': {
				        templateUrl: 'views/user/login.html'
				     }
			  	}
			})
			//ask question
			.state('menu.askquestion', {
				url: '/ask',
				views: {
					'menuContent': {
				        templateUrl: 'views/question/askquestion.html'
				     }
			  	}
			});

            $urlRouterProvider.otherwise('/menu/home');
	})
})