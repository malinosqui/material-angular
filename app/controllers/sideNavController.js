(function() {
'use strict';

	angular
		.module('appMain')
		.controller('SideNavController', SideNavController);

	SideNavController.$inject = ['$mdSidenav', '$location'];
	
	function SideNavController($mdSidenav, $location) {
		var vm = this;
		
		vm.test = 'eae';
		
		vm.toggleSidenav = function(menuId) {
			$mdSidenav(menuId).toggle();
		};
		
		vm.navigateTo = function (path) {
			console.log('Eae');
			$location.path(path);
		}
	}
})();