'use strict';

(function() {

  class MainController {

    constructor($http) {
      this.$http = $http;
      moment.locale("nl");
      this.day = moment("20170418").fromNow();
      // this.awesomeThings = [];

    }

    $(document).ready(function () {
          setTimeout(function (10) {
            $('.load-delay').each(function () {
                var imagex = $(this);
                var imgOriginal = imagex.data('original');
                $(imagex).attr('src', imgOriginal);
            });
        }, 3000);
    });

    // $onInit() {
    //   this.$http.get('/api/things')
    //     .then(response => {
    //       this.awesomeThings = response.data;
    //     });
    // }

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
