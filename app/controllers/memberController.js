(function () {
    'use strict';

    angular
        .module('appMain')
        .controller('MemberController', MemberController);

    MemberController.$inject = ['$location', '$mdDialog']

    function MemberController($location, $mdDialog) {
        var vm = this;

        vm.members = [{ id: 1, name: 'Gabriel Malinosqui', age: 20 }, { id: 2, name: 'Juca Santos', age: 30 }, { id: 3, name: 'João Silva', age: 27 }];
        vm.navigateTo = navigateTo;
        vm.showMessageDialog = showMessageDialog;

        function navigateTo(path) {
            $location.path(path);
        }

        function showMessageDialog(ev, $scope) {
            $mdDialog.show({
                controller: function ($scope, $mdDialog) {
                    $scope.hide = function () {
                        $mdDialog.hide();
                    };
                    $scope.cancel = function () {
                        $mdDialog.cancel();
                    };
                    $scope.answer = function (answer) {
                        $mdDialog.hide(answer);
                    };
                },
                templateUrl: 'app/views/partials/dialogs/message.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: false
            })
                .then(function (answer) {
                    // $scope.status = 'You said the information was "' + answer + '".';
                }, function () {
                    // $scope.status = 'You cancelled the dialog.';
                });
        }


    }
})();