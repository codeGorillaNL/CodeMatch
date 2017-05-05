'use strict';

angular.module('codeMatchApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      template: '<main class="cg-col" ng-class="{\'menu-is-expanded\': nav.menuToggle}"></main>'
    });
  });
