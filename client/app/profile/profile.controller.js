'use strict';

(function(){

class ProfileComponent {
  constructor($http) {
    this.$http = $http;
    this.message = 'Hello';
  }

  $onInit($http) {
    this.$http.get('/api/profiles')
      .then(response => {
        this.profiles = response.data;
      });
  }
}

angular.module('codeGorillaApp')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent,
    // controllerAs: 'profileCtrl'
  });

})();
