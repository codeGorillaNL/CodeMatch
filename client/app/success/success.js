'use strict';

angular.module('codeGorillaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('success', {
        url: '/success',
        template: '<success></success>'
      });
  });
