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
        vm.weeks = [
            { id: 1, week: "Semana do dia 14/12 até 18", trainnings: [{ day: "14/12/2015", name: "Treino A", description: "Treino de fortalecimento de peito", comments: "Sem comentários" }, { day: "15/12/2015", name: "Treino B", description: "Treino de fortalecimento de costas", comments: "Treino insano!!" }, { day: "16/12/2015", name: "Treino C", description: "Treino de fortalecimento de ombros", comments: "Ta leve professor, pode aumentar" }, { day: "17/12/2015", name: "Treino D", description: "Treino de fortalecimento de pernas", comments: "ZICA!" }, { day: "17/12/2015", name: "Treino C", description: "Treino de fortalecimento de ombros", comments: "Ta leve professor, pode aumentar" }, { day: "17/12/2015", name: "Treino E", description: "Treino de fortalecimento de abdômem", comments: "ZICA!" }  ] },
            { id: 2, week: "Semana do dia 21/12 até 25", trainnings: [{ day: "14/12/2015", name: "Treino A", description: "Treino de fortalecimento de peito", comments: "Sem comentários" }, { day: "15/12/2015", name: "Treino B", description: "Treino de fortalecimento de costas", comments: "Treino insano!!" }, { day: "16/12/2015", name: "Treino C", description: "Treino de fortalecimento de ombros", comments: "Ta leve professor, pode aumentar" }, { day: "17/12/2015", name: "Treino D", description: "Treino de fortalecimento de pernas", comments: "ZICA!" }, { day: "17/12/2015", name: "Treino C", description: "Treino de fortalecimento de ombros", comments: "Ta leve professor, pode aumentar" }, { day: "17/12/2015", name: "Treino E", description: "Treino de fortalecimento de abdômem", comments: "ZICA!" }  ]  },
            { id: 3, week: "Semana do dia 28/12 até 1/1", trainnings: [{ day: "14/12/2015", name: "Treino A", description: "Treino de fortalecimento de peito", comments: "Sem comentários" }, { day: "15/12/2015", name: "Treino B", description: "Treino de fortalecimento de costas", comments: "Treino insano!!" }, { day: "16/12/2015", name: "Treino C", description: "Treino de fortalecimento de ombros", comments: "Ta leve professor, pode aumentar" }, { day: "17/12/2015", name: "Treino D", description: "Treino de fortalecimento de pernas", comments: "ZICA!" }, { day: "17/12/2015", name: "Treino C", description: "Treino de fortalecimento de ombros", comments: "Ta leve professor, pode aumentar" }, { day: "17/12/2015", name: "Treino E", description: "Treino de fortalecimento de abdômem", comments: "ZICA!" }  ]  }
        ]

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