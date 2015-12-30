(function () {
    'use strict';

    angular
        .module('appMain')
        .controller('TrainningController', TrainningController);

    TrainningController.$inject = ['$location', '$mdDialog'];

    function TrainningController($location, $mdDialog) {
        var vm = this;

        vm.activeStep = 1;
        vm.steps = [{title: "Informações do treino", subTitle: null, active: "true"}, {title: "Exercícios", subTitle: null, active: "false"}, {title: "Alunos", subTitle: "Adicione o treino para seus alunos", active: "false"} ]

        vm.setActive = setActive;
        vm.stepIsActive = stepIsActive;

        function setActive(step) {
            vm.activeStep = step;
        }

        function stepIsActive(step) {
            if (step == vm.activeStep) {
                vm.active = "active";
                return true;
            }
            else
                return false;
        }

    }
})();