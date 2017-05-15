'use strict';

angular.module('codeMatchApp')
  .directive('cgVideoOnScroll', function ($window) {
    return function(scope, element, attrs) {      
        angular.element($window).bind("scroll", function() {
        	var elementOffset = element[0].offsetTop + element[0].scrollHeight;
            var pageOffset = angular.element($window)[0].pageYOffset + angular.element($window)[0].innerHeight;
            if (pageOffset >= elementOffset) {
                 element[0].play();
             } else {
             	element[0].pause();
             }
            scope.$apply();
        });
    };
  });
