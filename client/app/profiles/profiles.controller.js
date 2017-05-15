'use strict';

(function(){

class ProfilesComponent {

  users = {};

  constructor(User) {
    this.message = 'Hello';
    this.users  = User.list();
  }
}

angular.module('codeMatchApp')
  .component('profiles', {
    templateUrl: 'app/profiles/profiles.html',
    controller: ProfilesComponent,
    controllerAs: 'vm'
  });

})();
