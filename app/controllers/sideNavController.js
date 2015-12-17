(function () {
	'use strict';

	angular
		.module('appMain')
		.controller('SideNavController', SideNavController);

	SideNavController.$inject = ['$mdSidenav', '$location'];

	function SideNavController($mdSidenav, $location) {
		var vm = this;

		vm.menus = [{ icon: 'dashboard', name: 'Painel', route: 'dashboard' }, { icon: 'supervisor_account', name: 'Alunos', route: 'members' }, { icon: 'help', name: 'Ajuda', route: 'help' }];

		vm.toggleSidenav = function (menu) {
			$mdSidenav(menu).toggle();
		};

		vm.navigateTo = function (path) {
			$location.path(path);
		}
	}
})();
