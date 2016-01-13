(function () {
    'use strict';

    angular
        .module('appMain')
        .controller('MemberController', MemberController);

    MemberController.$inject = ['$location', '$mdDialog', '$mdToast', '$http']

    function MemberController($location, $mdDialog, $mdToast, $http) {
        var vm = this;

        vm.member = { id: 1 };
        vm.members = [{ id: 1, name: 'Gabriel Malinosqui', age: 20 }, { id: 2, name: 'Juca Santos', age: 30 }, { id: 3, name: 'João Silva', age: 27 }];
        vm.navigateTo = navigateTo;
        vm.showMessageDialog = showMessageDialog;
        vm.weeks = [];


        $http.get('/aux/weeks.json').then(function (response) {
            vm.weeks = response.data;
        });
        
        vm.avaliations = buildGridModel({
            title: "Avaliação ",
            background: ""
        });

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
                    if (answer == 'send') {
                        console.log("enviar");
                        $mdToast.show(
                            $mdToast.simple()
                                .textContent('Mensagem enviada com sucesso!')
                                .position('top right')
                                .hideDelay(3000)
                            );
                    }
                }, function () {
                    // $scope.status = 'You cancelled the dialog.';
                });
        }


        function buildGridModel(tileTmpl) {
            var it, results = [];
            for (var j = 0; j < 11; j++) {
                it = angular.extend({}, tileTmpl);
                it.title = it.title + (j + 1);
                it.id = (j + 1);
                it.span = { row: 1, col: 1 };
                switch (j + 1) {
                    case 1:
                        it.background = "fit_1";
                        it.span.row = it.span.col = 2;
                        break;
                    case 2: it.background = "fit_2"; break;
                    case 3: it.background = "fit_3"; break;
                    case 4:
                        it.background = "fit_1";
                        it.span.col = 2;
                        break;
                    case 5:
                        it.background = "fit_2";
                        it.span.row = it.span.col = 2;
                        break;
                    case 6: it.background = "fit_3"; break;
                    case 7: it.background = "fit_1"; break;
                    case 8: it.background = "fit_2"; break;
                    case 9: it.background = "fit_3"; break;
                    case 10: it.background = "fit_1"; break;
                    case 11: it.background = "fit_2"; break;
                }
                results.push(it);
            }
            return results;
        }



    }
})();