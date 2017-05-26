'use strict';

angular.module('codeGorillaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        template: '<profile layout-fill></profile>'
      });
  });
