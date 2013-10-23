'use strict';

angular.module('alumniPresentationApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/alumni/:id', {
        templateUrl: 'views/alum_slides.html',
        controller: 'SlidesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
