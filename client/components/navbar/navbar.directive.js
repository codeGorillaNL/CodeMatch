'use strict';

angular.module('codeGorillaApp')
  .directive('navbar', () => ({
    templateUrl: 'components/navbar/navbar.html',
    // template: ``,
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  }));
