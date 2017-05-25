'use strict';

angular.module('codeGorillaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('timeline', {
        url: '/timeline',
        template: '<timeline></timeline>'
      });
  });
