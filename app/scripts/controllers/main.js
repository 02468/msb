'use strict';

/**
 * @ngdoc function
 * @name msbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the msbApp
 */
angular.module('msbApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.stress = [
	{
		'level' : '80',
		'date'  : '2014-04-21',
		'description' : 'Gefahr durch Burnout, weniger arbeiten, dafuer mehr Sport'
	},
	{
		'level' : '20',
		'date'  : '2015-01-01',
		'description' : 'Stress verursacht durch hohen Alkoholpegel, weniger trinken, aber es ist ja Jahresanfang ;)'

	}

    ];

    $scope.notAvailable = function() {
            alert("Diese Funktion ist leider noch nicht verfugbar");
    }

    

  });