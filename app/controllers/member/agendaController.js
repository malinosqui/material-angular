(function () {
    'use strict';

    angular
        .module('appMain')
        .controller('AgendaController', AgendaController);

    AgendaController.$inject = ['$http'];

    function AgendaController($http) {

        var vm = this;

        vm.days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

        $http.get('aux/trainnings.json').then(function (res) {
            vm.draggableObjects = res.data;
            
            vm.droppedObjects1 = vm.draggableObjects;
            vm.droppedObjects2 = [];

            vm.onDropComplete1 = function (data, evt) {
                var index = vm.droppedObjects1.indexOf(data);
                var dayOfTheWeek = vm.days[0];
                data.day = dayOfTheWeek;
                if (index == -1)
                    vm.droppedObjects1.push(data);
            }
            vm.onDragSuccess1 = function (data, evt) {
                var index = vm.droppedObjects1.indexOf(data);
                if (index > -1) {
                    vm.droppedObjects1.splice(index, 1);
                }
            }
            vm.onDropComplete2 = function (data, evt) {
                console.log(data);
                var index = vm.droppedObjects2.indexOf(data);
                var dayOfTheWeek = vm.days[1];
                data.day = dayOfTheWeek;
                if (index == -1)
                    vm.droppedObjects2.push(data);
            }
            vm.onDragSuccess2 = function (data, evt) {
                var index = vm.droppedObjects2.indexOf(data);
                if (index > -1) {
                    vm.droppedObjects2.splice(index, 1);
                }
            }
            vm.onDropComplete3 = function (data, evt) {
                var index = vm.droppedObjects3.indexOf(data);
                var dayOfTheWeek = vm.$parent.days[2];
                data.day = dayOfTheWeek;
                if (index == -1)
                    vm.droppedObjects3.push(data);
            }
            vm.onDragSuccess3 = function (data, evt) {
                var index = vm.droppedObjects3.indexOf(data);
                if (index > -1) {
                    vm.droppedObjects3.splice(index, 1);
                }
            }
            vm.onDropComplete4 = function (data, evt) {
                var index = vm.droppedObjects4.indexOf(data);
                var dayOfTheWeek = vm.$parent.days[3];
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
                var dayOfTheWeek = vm.$parent.days[4];
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