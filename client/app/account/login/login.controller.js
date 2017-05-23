'use strict';

class LoginController {
  constructor(Auth, $state, $rootScope) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;

    $rootScope.$on('event:social-sign-in-success', function(event, userDetails) {
        console.log(userDetails);
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
