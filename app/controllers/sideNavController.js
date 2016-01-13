(function () {
    'use strict';

    angular
        .module('appMain')
        .controller('SideNavController', SideNavController);

    SideNavController.$inject = ['$mdSidenav', '$location', '$http'];

    function SideNavController($mdSidenav, $location, $http) {
        var vm = this;

        vm.menus = [];
        
        vm.toggleSidenav = function (menu) {
            $mdSidenav(menu).toggle();
        };

        vm.navigateTo = function (path) {
            $location.path(path);
        }
        
        $http.get('aux/side_menu.json').then(function (response) {
            vm.menus = response.data;
        });
    }
})();
