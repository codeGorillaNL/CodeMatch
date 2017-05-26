'use strict';

(function(){

class ProfileComponent {
  constructor($http) {
    this.$http = $http;
  }

  $onInit($http) {
    this.$http.get('/api/profiles')
      .then(response => {
        console.log(response.data);
        this.profiles = response.data;
      });
  }
}

angular.module('codeGorillaApp')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent,
  });

})();
