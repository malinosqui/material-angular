(function () {
    'use strict';

    angular
        .module('appMain')
        .controller('TrainningController', TrainningController);

    TrainningController.$inject = ['$location', '$mdDialog'];

    function TrainningController($location, $mdDialog) {
        var vm = this;

        vm.activeStep = 1;
        vm.steps = [{ title: "Informações do treino", subTitle: null, active: "true" }, { title: "Exercícios", subTitle: null, active: "false" }, { title: "Alunos", subTitle: "Adicione o treino para seus alunos", active: "false" }]
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

        vm.querySearch = querySearch;
        vm.allContacts = loadContacts();
        vm.contacts = [vm.allContacts[0]];
        vm.filterSelected = true;
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

    }
})();