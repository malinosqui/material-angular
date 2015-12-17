(function () {
	'use strict';

	angular
		.module('appMain')
		.controller('MemberController', MemberController);

	MemberController.$inject = ['$location']

	function MemberController($location) {
		var vm = this;

		vm.members = [{ id: 1, name: 'Gabriel Malinosqui', age: 20 }, { id: 2, name: 'Juca Santos', age: 30 }, { id: 3, name: 'João Silva', age: 27 }];
		vm.navigateTo = navigateTo;

		function navigateTo(path) {
			$location.path(path);
		}

	}
})();