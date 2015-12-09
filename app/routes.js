(function() {
'use strict';
	
	angular.module('appMain').config(function($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'HomeController', 
				controllerAs: 'vm', 
				templateUrl: 'app/views/home.html'
			})
			.when('/customers', {
				controller: 'CustomerController', 
				controllerAs: 'vm', 
				templateUrl: 'app/views/customers.html'
			})
			.otherwise({
				controller: 'HomeController', 
				controllerAs: 'vm', 
				templateUrl: 'app/views/404.html'
			})
	})

})();