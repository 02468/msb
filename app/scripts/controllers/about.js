'use strict';

/**
 * @ngdoc function
 * @name msbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the msbApp
 */
angular.module('msbApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
