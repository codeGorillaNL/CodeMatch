'use strict';

class LoginController {
  constructor(Auth, $state, $rootScope, $http) {
    this.user = {
        Bedrijf: {}
    };
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;

    var vm = this;

    $rootScope.$on('event:social-sign-in-success', function(event, userDetails) {
        userDetails.positions.values.forEach(function(value) {
            if (value.isCurrent == true && angular.equals({}, vm.user.Bedrijf)) {
                vm.user.Bedrijf = value;
            }
        });
        $http.get("https://api.linkedin.com/v1/companies/" + vm.user.Bedrijf.id + "?format=json")
            .then(function(res){
                console.log(res.data);
            })
    });
  }

  login() {
    // this.submitted = true;

    // if (form.$valid) {
      this.Auth.login({
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          // Logged in, redirect to home
          this.$state.go('profile');
        })
        .catch(err => {
          console.log(err);
          this.errors.other = err.message;
        });
    // }
  }
}

angular.module('codeGorillaApp')
  .controller('LoginController', LoginController);
