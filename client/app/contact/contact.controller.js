'use strict';

(function(){

class ContactComponent {

  user = {};
  message = {};
  submitted = false;

  constructor(Mail) {

	this.Mail = Mail;

  }

  submit(form) {

  var vm = this;

  vm.submitted = true;
  vm.form = form;

  if (form.$valid) {

    this.Mail.send(this.user)
	    .then(function(data) {
		  if (data.status == 200) {
		  	vm.form.$setPristine();
		  	vm.user = {};
			vm.message.success = 'Thanks, we will get in contact with you as soon as possible.'
		  } else {
		  	vm.message.error = 'Could not send your mail, please try again later.'
		  };
		});
    }
  }

}

angular.module('codeMatchApp')
  .component('contact', {
    templateUrl: 'app/contact/contact.html',
    controller: ContactComponent,
    controllerAs: 'ct'
  });

})();
