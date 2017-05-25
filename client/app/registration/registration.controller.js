'use strict';

(function(){

class RegistrationComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('codeGorillaApp')
  .component('registration', {
    templateUrl: 'app/registration/registration.html',
    controller: RegistrationComponent,
    controllerAs: 'registrationCtrl'
  });

})();
