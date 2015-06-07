'use strict';

/**
 * @ngdoc overview
 * @name msbApp
 * @description
 * # msbApp
 *
 * Main module of the application.
 */
angular
  .module('msbApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'MainCtrl'
      })
      .when('/signup', {
         templateUrl: 'views/signup.html',
         controller: 'MainCtrl'
      })
      .when('/tips', {
         templateUrl: 'views/tips.html',
         controller: 'MainCtrl'
      })
      .when('/index', {
         templateUrl: 'views/index.html',
         controller: 'MainCtrl'
      })
 
      .otherwise({
        redirectTo: '/'
      });
  });
