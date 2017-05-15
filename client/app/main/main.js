'use strict';

angular.module('codeGorillaApp')
  .config(function($stateProvider) {
    $stateProvider
    .state('main', {
      url: '/',
      template: '<main></main>'
    });
  });
