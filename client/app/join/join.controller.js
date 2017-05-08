'use strict';

class JoinController {

    user = {
      educationList: [],
      employmentList: []
    };
    errors = {};
    submitted = false;
    educations = ['Middelbaar', 'MBO', 'HBO', 'WO', 'Overig'];

    constructor(Auth, $state, $scope, $http) {

      this.Auth = Auth;
      this.$http = $http;
      this.$state = $state;

      this.options = ['Permanent employment', 'Temporary employment', 'Entrepeneur', 'Student', 'Other'];

      this.benefits = ['Unemployment benefits (WW)', 'Wajong', 'Social Assistance (Bijstand/IOAW)', 'Other'];

      this.statusses = ['Ongehuwd', 'Samenwonend', 'Gehuwd', 'Overig'];

      // $state.transitionTo('join.persona');
    }

    nextPage(user) {
        
      this.errorMessage = 'Niet alle verplichte velden zijn ingevuld.';

      if (this.selectedTab == 0 && !this.signupForm1.$valid) {
        return this.errorMessage;
      }
      if (this.selectedTab == 1 && !this.signupForm2.$valid) {
        return this.errorMessage;
      }
      else {
        this.errorMessage = '';
        this.selectedTab = this.selectedTab + 1;
      }
    }

    submitForm(form) {
      console.log(form);
      this.$http({
              url: "/mail/mail.php",
              method: "POST",
              headers: {'Content-Type': 'application/json'},
              data: form
          }).then(response => {
              if (response.statusText == 'OK') {
                this.$state.go('success');
              }
              else {
                this.mailStatus = response.statusText;
              }
          });
    }

  register(form) {
    this.submitted = true;

    if (this.user.password === this.user.verifyPassword) {
      this.Auth.createUser({
          name: this.user.name,
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          // Account created, redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            this.errors[field] = error.message;
          });
        });
    }
  }
}

angular.module('codeMatchApp')
  .controller('JoinController', JoinController);
