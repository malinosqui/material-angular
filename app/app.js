(function (angular) {
    'use strict';

    angular.module('appMain', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ui.sortable', 'ngDraggable'])
        .config(function ($mdThemingProvider, $mdIconProvider) {

            $mdThemingProvider.definePalette('custom-blue', {
                '50': '2B2E4A',
                '100': '2B2E4A',
                '200': '2B2E4A',
                '300': '2B2E4A',
                '400': '2B2E4A',
                '500': '2B2E4A',
                '600': '2B2E4A',
                '700': '2B2E4A',
                '800': '2B2E4A',
                '900': '2B2E4A',
                'A100': '2B2E4A',
                'A200': '2B2E4A',
                'A400': '2B2E4A',
                'A700': 'd50000',
                'contrastDefaultColor': 'light'
            });

            $mdThemingProvider.definePalette('custom-red', {
                '50': 'E84545',
                '100': 'E84545',
                '200': 'E84545',
                '300': 'E84545',
                '400': 'E84545',
                '500': 'E84545',
                '600': 'E84545',
                '700': 'E84545',
                '800': 'c62828',
                '900': 'E84545',
                'A100': 'E84545',
                'A200': 'E84545',
                'A400': 'E84545',
                'A700': 'd50000',
                'contrastDefaultColor': 'light'
            });

            $mdThemingProvider.theme('default')
                .primaryPalette('custom-blue')
                .accentPalette('custom-red')
                .warnPalette('custom-blue')
                .backgroundPalette('grey');

            $mdThemingProvider.definePalette('white-palette', {
                '50': 'fff',
                '100': 'fff',
                '200': 'fff',
                '300': 'fff',
                '400': 'fff',
                '500': 'fff',
                '600': 'e53935',
                '700': 'd32f2f',
                '800': 'c62828',
                '900': 'b71c1c',
                'A100': 'ff8a80',
                'A200': 'ff5252',
                'A400': 'ff1744',
                'A700': 'd50000' // could also specify this if default was 'dark'
            });

            $mdThemingProvider.theme('custom')
                .primaryPalette('white-palette')
                .accentPalette('custom-blue')
                .warnPalette('red');

            $mdIconProvider.defaultIconSet('assets/mdi.svg');
        });



})(angular);