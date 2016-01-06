(function () {
    'use strict';

    angular
        .module('appMain')
        .controller('TrainningController', TrainningController);

    TrainningController.$inject = ['$location', '$mdDialog', '$mdSidenav', '$mdMedia'];

    function TrainningController($location, $mdDialog, $mdSidenav, $mdMedia) {
        var vm = this;

        vm.activeStep = 1;
        vm.steps = [{ title: "Informações do treino", subTitle: null, active: "true" }, { title: "Exercícios", subTitle: null, active: "false" }, { title: "Alunos", subTitle: "Adicione o treino para seus alunos", active: "false" }]
        vm.filterSelected = true;
        vm.stepIsActive = stepIsActive;
        vm.exercises = [{ id: 1, name: 'Supino reto' }, { id: 2, name: "Supino horizontal" }, { id: 3, name: "Supino vertical" }, { id: 4, name: "Fly reto" }, { id: 5, name: "Barra invertida" }, { id: 6, name: "Bíceps concentrado" }]
        vm.exerciseList = []
        vm.allowEdit = false;

        vm.addExercise = addExercise;
        vm.querySearch = querySearch;
        vm.allContacts = loadContacts();
        vm.setActive = setActive;
        vm.show = show;
        vm.showAdvanced = showAdvanced;

        vm.contacts = [vm.allContacts[0]];

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

        function addExercise() {
            vm.exerciseSelected.series = 4;
            vm.exerciseSelected.replays = 10;
            vm.exerciseList.push(vm.exerciseSelected);
        }
        /**
         * Search for contacts.
         */
        function querySearch(query) {
            var results = query ?
                vm.allContacts.filter(createFilterFor(query)) : [];
            return results;
        }
        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(contact) {
                return (contact._lowername.indexOf(lowercaseQuery) != -1);;
            };
        }
        function loadContacts() {
            var contacts = [
                'Marina Augustine',
                'Oddr Sarno',
                'Nick Giannopoulos',
                'Narayana Garner',
                'Anita Gros',
                'Megan Smith',
                'Tsvetko Metzger',
                'Hector Simek',
                'Some-guy withalongalastaname'
            ];
            return contacts.map(function (c, index) {
                var cParts = c.split(' ');
                var contact = {
                    name: c,
                    email: cParts[0][0].toLowerCase() + '.' + cParts[1].toLowerCase() + '@example.com',
                    image: 'http://lorempixel.com/50/50/people?' + index
                };
                contact._lowername = contact.name.toLowerCase();
                return contact;
            });
        }

        function show(edit, exercise, $event) {
            showDialog(exercise, edit, $event);
        }

        function showDialog(exercise, edit, $event) {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                targetEvent: $event,
                templateUrl: "app/views/partials/dialogs/exercise.html",
                locals: {
                    exercise: exercise,
                    allowEdit: edit
                },
                controller: DialogController,
                fullscreen: ($mdMedia('sm') || $mdMedia('xs'))
            });
            function DialogController($scope, $mdDialog, exercise, allowEdit) {

                $scope.exercise = exercise;
                $scope.allowEdit = edit;

                $scope.closeDialog = function () {
                    $mdDialog.hide();
                }
            }
        }

        function showAdvanced(item, $event) {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                targetEvent: $event,
                templateUrl: "app/views/partials/dialogs/advancedExercise.html",
                locals: {
                    exercise: item,
                    exerciseList: vm.exercises
                },
                controller: DialogController,
                fullscreen: ($mdMedia('sm') || $mdMedia('xs'))
            });
            function DialogController($scope, $mdDialog, exercise, exerciseList) {

                $scope.exercise = exercise;
                $scope.exerciseList = exerciseList;
                $scope.exercises = [];
                $scope.advancedExercise = {};
                
                $scope.exercises.push($scope.exercise)
                $scope.advancedExercise.name = $scope.exercise.name + " +";
                
                $scope.closeDialog = function () {
                    $mdDialog.hide();
                }

                $scope.addExercise = function () {
                    $scope.exerciseSelected.series = 4;
                    $scope.exerciseSelected.replays = 10;
                    $scope.exercises.push($scope.exerciseSelected);
                }
                
                $scope.edit = function (ex) {
                    console.log(ex);
                    $scope.editExercise = ex;
                    console.log($scope.editExercise);
                }
                
                $scope.finishEdit = function(){
                    console.log($scope.editExercise);
                    $scope.editExercise = null;
                    console.log($scope.editExercise);
                }
            }
        }
    }
})();