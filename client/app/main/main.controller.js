'use strict';

(function() {

  class MainController {

    constructor($http, $timeout) {
      this.$http = $http;
      this.$timeout = $timeout;
      moment.locale("nl");
      this.day = moment("20170418").fromNow();

      var vm = this;
      vm.image = '/assets/images/aap.png';

      vm.$timeout(function () {
        vm.image = '/assets/images/aap.gif'
      }, 800);

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

    // addThing() {
    //   if (this.newThing) {
    //     this.$http.post('/api/things', {
    //       name: this.newThing
    //     });
    //     this.newThing = '';
    //   }
    // }

    // deleteThing(thing) {
    //   this.$http.delete('/api/things/' + thing._id);
    // }
  }

  angular.module('codeGorillaApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
