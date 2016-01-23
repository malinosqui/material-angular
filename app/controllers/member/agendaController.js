(function () {
    'use strict';

    angular
        .module('appMain')
        .controller('AgendaController', AgendaController);

    AgendaController.$inject = ['$http', '$mdToast'];

    function AgendaController($http, $mdToast) {

        var vm = this;

        vm.days = ["Seg", "Ter", "Quar", "Qui", "Sex", "Sab", "Dom"];

        $http.get('aux/trainnings.json').then(function (res) {
            vm.avaibleTrainnings = res.data;

            vm.droppedObjects1 = [];
            vm.droppedObjects2 = [];
            vm.droppedObjects3 = [];
            vm.droppedObjects4 = [];
            vm.droppedObjects5 = [];
            vm.droppedObjects6 = [];
            vm.droppedObjects7 = [];

            vm.onDropComplete1 = function (data, evt) {
                var index = vm.droppedObjects1.indexOf(data);
                var dayOfTheWeek = vm.days[0];
                data.day = dayOfTheWeek;
                if (index == -1)
                    vm.droppedObjects1.push(data);

                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Não esqueça de salvar suas alterações')
                        .position('top right')
                        .hideDelay(3000)
                    );
            }

            vm.onDragSuccess1 = function (data, evt) {
                console.log(">>>", "onDragSuccess1");
                var index = vm.droppedObjects1.indexOf(data);
                if (index > -1) {
                    vm.droppedObjects1.splice(index, 1);
                }
            }

            vm.deleteFrom1 = function ($index) {
                vm.droppedObjects1.splice($index, 1);
            }

            vm.onDropComplete2 = function (data, evt) {
                var index = vm.droppedObjects2.indexOf(data);
                var dayOfTheWeek = vm.days[1];
                data.day = dayOfTheWeek;
                if (index == -1)
                    vm.droppedObjects2.push(data);
            }

            vm.onDragSuccess2 = function (data, evt) {
                console.log(">>>", "onDragSuccess2 ");
                var index = vm.droppedObjects2.indexOf(data);
                if (index > -1) {
                    vm.droppedObjects1.splice(index, 1);
                }
            }

            vm.onDropComplete3 = function (data, evt) {
                var index = vm.droppedObjects3.indexOf(data);
                var dayOfTheWeek = vm.days[2];
                data.day = dayOfTheWeek;
                if (index == -1)
                    vm.droppedObjects3.push(data);
            }

            vm.onDragSuccess3 = function (data, evt) {
                console.log(">>>", "onDragSuccess3");
                var index = vm.droppedObjects3.indexOf(data);
                if (index > -1) {
                    vm.droppedObjects3.splice(index, 1);
                }
            }

            vm.onDropComplete4 = function (data, evt) {
                var index = vm.droppedObjects4.indexOf(data);
                var dayOfTheWeek = vm.days[3];
                data.day = dayOfTheWeek;
                if (index == -1)
                    vm.droppedObjects4.push(data);
            }
            vm.onDragSuccess4 = function (data, evt) {
                var index = vm.droppedObjects4.indexOf(data);
                if (index > -1) {
                    vm.droppedObjects4.splice(index, 1);
                }
            }

            vm.onDropComplete5 = function (data, evt) {
                var index = vm.droppedObjects5.indexOf(data);
                var dayOfTheWeek = vm.days[4];
                data.day = dayOfTheWeek;
                if (index == -1)
                    vm.droppedObjects5.push(data);
            }
            vm.onDragSuccess5 = function (data, evt) {
                var index = vm.droppedObjects5.indexOf(data);
                if (index > -1) {
                    vm.droppedObjects5.splice(index, 1);
                }
            }

            vm.onDropComplete6 = function (data, evt) {
                var index = vm.droppedObjects6.indexOf(data);
                var dayOfTheWeek = vm.days[5];
                data.day = dayOfTheWeek;
                if (index == -1)
                    vm.droppedObjects6.push(data);
            }
            vm.onDragSuccess6 = function (data, evt) {
                var index = vm.droppedObjects5.indexOf(data);
                if (index > -1) {
                    vm.droppedObjects6.splice(index, 1);
                }
            }

            vm.onDropComplete7 = function (data, evt) {
                var index = vm.droppedObjects7.indexOf(data);
                var dayOfTheWeek = vm.days[6];
                data.day = dayOfTheWeek;
                if (index == -1)
                    vm.droppedObjects7.push(data);
            }
            vm.onDragSuccess7 = function (data, evt) {
                var index = vm.droppedObjects5.indexOf(data);
                if (index > -1) {
                    vm.droppedObjects7.splice(index, 1);
                }
            }

            vm.getData = function (data, element) {
                vm.obj = data;
                var showOverlay = angular.element(document.querySelector('.overlay'));
                showOverlay.addClass('show');
            }
            vm.hideOverlay = function (element) {
                var hideOverlay = angular.element(document.querySelector('.overlay'));
                hideOverlay.removeClass('show');
            }
        })
    };
})();