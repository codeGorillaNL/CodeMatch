'use strict';

angular.module('codeMatchApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        template: '<contact></contact>',
        controllerAs: 'vm'
      });
  });
