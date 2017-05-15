'use strict';

class JoinController {

    user = {
      educationList: [],
      employmentList: []
    };
    errors = {};
    submitted = false;
    educations = ['Middelbaar', 'MBO', 'HBO', 'WO', 'Overig'];

    constructor(Auth, Mail, $state) {

      this.Auth = Auth;
      this.Mail = Mail;
      this.$state = $state;

      this.options = ['Permanent employment', 'Temporary employment', 'Entrepeneur', 'Student', 'Other'];

      this.benefits = ['Unemployment benefits (WW)', 'Wajong', 'Social Assistance (Bijstand/IOAW)', 'Other'];

    }

    register(form) {

      var vm = this;

      vm.submitted = true;

      if (form.$valid && vm.submitted) {

        this.Mail.send(this.user)
          .then(function(data) {
          if (data.status == 200) {
            vm.$state.go('signupForm.success');
          } else {
            vm.message.error = 'Could not send your mail, please try again later.'
          };
        });
      }
    }
}

angular.module('codeMatchApp')
  .controller('JoinController', JoinController);
