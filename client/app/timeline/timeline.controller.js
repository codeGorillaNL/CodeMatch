'use strict';

(function(){

class TimelineComponent {
  constructor($document, $scope) {
    this.message = 'Hello';

    function getCurrentScrolledPercentage(currentDistance) {
	    return  Math.floor(currentDistance / (document.body.scrollHeight - document.body.clientHeight) * 100);
	}

    $document.on('scroll', function() {
		$scope.percentage = getCurrentScrolledPercentage($document.scrollTop());
		$scope.$apply();
    });
  }
}

angular.module('codeGorillaApp')
  .component('timeline', {
    templateUrl: 'app/timeline/timeline.html',
    controller: TimelineComponent,
    controllerAs: 'timelineCtrl'
  });

})();
