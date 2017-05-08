'use strict';

angular.module('codeMatchApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('signupForm', {
        // url: '/join',
        templateUrl: 'app/join/join.html',
        controller: 'JoinController',
        controllerAs: 'vm'
      })
      .state('signupForm.persona', {
        url: '/join',
        templateUrl: 'app/join/persona.html'
      })
      .state('signupForm.education', {
        url: '/education',
        templateUrl: 'app/join/education.html'
      })
      .state('signupForm.experience', {
        url: '/experience',
        templateUrl: 'app/join/experience.html'
      })
      .state('signupForm.motivation', {
        url: '/motivation',
        templateUrl: 'app/join/motivation.html'
      });

      $urlRouterProvider.otherwise('/join');
  });
