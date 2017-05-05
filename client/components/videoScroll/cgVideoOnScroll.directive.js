'use strict';

angular.module('codeMatchApp')
  .directive('cgVideoOnScroll', function ($window) {
    return function(scope, element, attrs) {      
        angular.element($window).bind("scroll", function() {
        	var elementOffset = element[0].offsetTop * 0.9;
        	var pageOffset = angular.element($window)[0].pageYOffset;
            if (pageOffset >= elementOffset) {
                 element[0].play();
             } else {
             	element[0].pause();
             }
            scope.$apply();
        });
    };
  });
