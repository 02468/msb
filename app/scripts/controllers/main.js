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
		'level' : '75',
		'date'  : '2015-01-21',
		'description' : 'Gefahr durch Burnout, weniger arbeiten, dafür mehr Sport'
	},
	{
		'level' : '59',
		'date'  : '2015-02-01',
		'description' : 'Stress verursacht durch xy'
	},
    {
        'level' : '80',
        'date'  : '2015-03-21',
        'description' : 'Stress verursacht durch xy'
    },
    {
        'level' : '81',
        'date'  : '2015-04-01',
        'description' : 'Stress verursacht durch xy'
    },
    {
        'level' : '76',
        'date'  : '2015-05-21',
        'description' : 'Stress verursacht durch xy'
    },
    {
        'level' : '66',
        'date'  : '2015-06-01',
        'description' : 'Stress verursacht durch xy'
    },
    {
        'level' : '80',
        'date'  : '2015-07-21',
        'description' : 'Stress verursacht durch xy'
    }

    ];

//data: [75, 59, 80, 81, 76, 66, 80]
    $scope.notAvailable = function() {
            alert("Diese Funktion ist leider nicht in der Demoversion verfügbar");
    }

    //Workaround fuer aktive Menuelemente
    $('.nav li').click(function() {
      //  alert('test');
        $('.nav li').removeClass('active');
        $(this).addClass('active');
    })
    

  });
