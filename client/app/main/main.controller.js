'use strict';

(function() {

  class MainController {

    constructor($http, $timeout) {
      this.$http = $http;
      this.$timeout = $timeout;
      this.progressBar = 0;
      moment.locale("nl");
      this.day = moment("20170418").fromNow();

      var vm = this;
      vm.image = '/assets/images/aap.png';

      vm.$timeout(function () {
        vm.image = '/assets/images/aap.gif'
      }, 800);

      var updateCounter = function() {
        if (vm.progressBar < 100) {
          vm.progressBar++;
        } else {
          vm.progressBar = 1;
        }
        $timeout(updateCounter, 100);
      };
      updateCounter();

    }

    $onInit() {
    }

    sendForm(form) {
      console.log(form);
      this.$http({
              url: "/mail/mail.php",
              method: "POST",
              headers: {'Content-Type': 'application/json'},
              data: form
          }).then(response => {
              console.log(response);
              if (response.statusText == 'OK') {
                this.mailStatus = 'Bedankt voor je bericht, we nemen binnenkort contact met je op.'
              }
              else {
                this.mailStatus = response.statusText;
              }
          });
    }
  }

  angular.module('codeGorillaApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
