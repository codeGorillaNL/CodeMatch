'use strict';

angular.module('codeGorillaApp')

.directive('jnList', [
  () => {
    return {
      restrict: 'E',
      scope: {
        data: '=',
        options: '='
      },
      templateUrl: '../components/directives/jn_list.html',
      link: (scope, element, attrs) => {
        console.log(scope.options);
        // Set the column count as the number passed in options
        if (scope.options.columns) {
          scope.columnCount = Object.keys(scope.options.columns).length;          
        }
      }
    };
  }
]);