'use strict';

angular.module('codeGorillaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('registration', {
        url: '/registration',
        template: '<registration></registration>'
      });
  });
