(function (angular) {
	'use strict';

	angular.module('appMain', ['ngRoute', 'ngMaterial'])
		.config(function ($mdThemingProvider) {
			$mdThemingProvider.theme('default')
				.primaryPalette('red')
				.accentPalette('blue')
				.warnPalette('blue')
				.backgroundPalette('grey');
			$mdThemingProvider.definePalette('whitePalette', {
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
				.primaryPalette('whitePalette')
				.accentPalette('blue-grey')
				.warnPalette('red')
		});
})(angular);