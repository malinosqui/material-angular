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
				templateUrl: 'app/views/members.html'
			})
			.when('/members/:id', {
				controller: 'MemberController', 
				controllerAs: 'vm', 
				templateUrl: 'app/views/memberDetail.html'
			})
			.otherwise({
				controller: 'HomeController', 
				controllerAs: 'vm', 
				templateUrl: 'app/views/404.html'
			})
	})

})();