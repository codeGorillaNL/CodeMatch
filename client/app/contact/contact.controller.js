'use strict';

(function(){

class ContactComponent {

  user = {};

  constructor() {
  }

}

angular.module('codeMatchApp')
  .component('contact', {
    templateUrl: 'app/contact/contact.html',
    controller: ContactComponent,
    controllerAs: 'contactCtrl'
  });

})();
