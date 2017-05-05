'use strict';

(function(){

class ProfilesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('codeMatchApp')
  .component('profiles', {
    templateUrl: 'app/profiles/profiles.html',
    controller: ProfilesComponent,
    controllerAs: 'profilesCtrl'
  });

})();
