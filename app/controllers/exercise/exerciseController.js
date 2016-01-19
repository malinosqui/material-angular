(function () {
    'use strict';

    angular
        .module('appMain')
        .controller('ExerciseController', ExerciseController);

    ExerciseController.$inject = ['$http', '$location'];

    function ExerciseController($http, $location) {

        var vm = this;

        vm.exercises = [];
        vm.exerciseSelected = null;
        vm.searchText = null;
        vm.exerciseList = [];
        vm.exercise = { childrenExercises: [] }

        vm.addExercise = addExercise;
        vm.querySearch = querySearch;
        vm.navigateTo = navigateTo;
      
        
        //init
        $http.get("aux/exercises.json").then(function (response) {
            vm.exercises = response.data;
        });

        function addExercise() {
            vm.exercise.childrenExercises.push(vm.exerciseSelected);
            vm.exerciseSelected = null;
            vm.searchText = null;
        }

        function querySearch(query) {
            var results = query ? vm.exercises.filter(createFilterFor(query)) : [];
            return results;
        }

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(exercise) {
                return (exercise.name.toLowerCase().indexOf(lowercaseQuery) >= 0);
            };
        }

        function navigateTo(path) {
            $location.path(path);
        }

    }

})();