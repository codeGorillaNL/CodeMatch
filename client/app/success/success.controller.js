'use strict';

(function(){

class SuccessComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('codeGorillaApp')
  .component('success', {
    templateUrl: 'app/success/success.html',
    controller: SuccessComponent,
    controllerAs: 'successCtrl'
  });

})();
