'use strict';

angular.module('codeMatchApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profiles', {
        url: '/profiles',
        authenticate: true,
        template: '<profiles></profiles>'
      });
  });
