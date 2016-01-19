(function() {
'use strict';
	
	angular.module('appMain').config(function($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'HomeController', 
				controllerAs: 'vm', 
				templateUrl: 'app/views/home.html'
			})
			.when('/dashboard', {
				controller: 'HomeController', 
				controllerAs: 'vm', 
				templateUrl: 'app/views/home.html'
			})
			.when('/members', {
				controller: 'MemberController', 
				controllerAs: 'vm', 
				templateUrl: 'app/views/member/list.html'
			})
			.when('/members/:id', {
				controller: 'MemberController', 
				controllerAs: 'vm', 
				templateUrl: 'app/views/member/detail.html'
			})
            .when('/trainnings/', {
                controller: 'TrainningController',
                controllerAs: 'vm', 
                templateUrl: 'app/views/trainning/list.html'
            })
            .when('/trainnings/new', {
                controller: 'TrainningController',
                controllerAs: 'vm', 
                templateUrl: 'app/views/trainning/detail.html'
            })
            .when('/login', {
                controller:'LoginController', 
                controllerAs: 'vm',
                templateUrl: 'app/views/login.html'
            })
            .when('/exercises', {
                controller: "ExerciseController",
                controllerAs: 'vm', 
                templateUrl: 'app/views/exercise/list.html'
            })
            .when('/exercises/new', {
                controller: "ExerciseController",
                controllerAs: "vm",
                templateUrl: "app/views/exercise/detail.html"
            })
			.otherwise({
				controller: 'HomeController', 
				controllerAs: 'vm', 
				templateUrl: 'app/views/404.html'
			})
	})

})();