'use strict';

(function(){

class ProfileComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('codeGorillaApp')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent,
    controllerAs: 'profileCtrl'
  });

})();
