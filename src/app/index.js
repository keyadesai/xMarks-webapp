'use strict';

angular.module('xMarksWebapp',
 ['ngAnimate',
  'ngCookies', 'ngTouch',
   'ngSanitize',
   'ngResource',
    'ui.router',
    'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('categories', {
        url: '/',
        templateUrl: 'app/categories/categories.html',
        controller: 'CategoriesCtrl'
      })
      .state('cards', {
        url: '/cards/:categoryId',
        templateUrl: 'app/cards/cards.html',
        controller: 'CardsCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
