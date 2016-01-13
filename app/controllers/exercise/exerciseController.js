(function () {
    'use strict';

    angular
        .module('appMain')
        .controller('ExerciseController', ExerciseController);

    ExerciseController.$inject = ['$http'];

    function ExerciseController($http) {

        var vm = this;

        vm.exercises = [];

        $http.get("aux/exercises.json").then(function (response) {
            vm.exercises = response.data;
        });

    }
})();