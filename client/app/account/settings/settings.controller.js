'use strict';

class SettingsController {
  errors = {};
  user = {};
  submitted = false;
  models = {
        selected: null,
        lists: {"Your expertises": [], "Select expertises": []}
  }

  constructor(Auth, appConfig) {
    var vm = this;
    this.Auth = Auth;
    this.user = Auth.getCurrentUser();

    let capList = ["HTML5", "CSS3", "Javascript", "AngularJS", "PHP", "NodeJS", "MySQL"];

    if (this.user && this.user.caps) {
      var caps = this.user.caps;
      capList.map(function(cap) {
        if (caps.indexOf(cap) !== -1){
          vm.models.lists['Your expertises'].push(cap);
        } else {
          vm.models.lists['Select expertises'].push(cap);
        }
      })
    } else {
        vm.models.lists['Select expertises'] = capList;
        vm.models.lists['Your expertises'] = [];
    }
  }


  saveSettings(form) {
    this.submitted = true;

    if (form.$valid) {
      this.user.caps = this.models.lists['Your expertises'];
      console.log(this.user);
      this.Auth.updateProfile(this.user)
        .then(() => {
          this.message = 'Profile successfully changed.';
        })
        .catch(() => {
          this.errors.other = 'Couldn\'t update your profile.';
          this.message = '';
        });
    }
  }

  changePassword(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
        .then(() => {
          this.message = 'Password successfully changed.';
        })
        .catch(() => {
          form.password.$setValidity('mongoose', false);
          this.errors.other = 'Incorrect password';
          this.message = '';
        });
    }
  }
}

angular.module('codeMatchApp')
  .controller('SettingsController', SettingsController);
