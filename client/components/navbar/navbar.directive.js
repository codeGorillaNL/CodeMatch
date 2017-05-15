'use strict';

angular.module('codeGorillaApp')
  .directive('navbar', () => ({
    // templateUrl: 'components/navbar/navbar.html',
    template: `<nav ng-class="{open: nav.isCollapsed }" layout="column">
                 <ng-md-icon class="hamburger" icon="{{nav.clickIcon}}" ng-click="nav.expandMenu()" size="36"></ng-md-icon>
                 <ul class="menu" layout="column" flex="100" layout-align="space-around center">
                   <li flex="10" ng-repeat="item in nav.menu" ui-sref="{{item.state}}">{{item.title}}</li>
                 </ul>
              </nav>`,
    restrict: 'E',
    replace: true,
    controller: 'NavbarController',
    controllerAs: 'nav'
  }));
