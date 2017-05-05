'use strict';

class SettingsController {
  errors = {};
  user = {};
  submitted = false;
  models = {
        selected: null,
        lists: {"Your expertises": [], "Select expertises": ["HTML5", "CSS3", "Javascript", "AngularJS", "PHP", "NodeJS", "MySQL"]}
  }

  constructor(Auth, appConfig) {
    this.Auth = Auth;
    this.user = Auth.getCurrentUser();
    this.models.lists['Your expertises'] = this.user.caps;
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
