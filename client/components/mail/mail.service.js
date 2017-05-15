'use strict';
(function() {

function MailService($http, $q) {

  var Mail = {

  	send(form) {
	  
	  return $http
	  	.post('/api/mail', form)
		.then( res => {
			return res;
		})
  	}
  }
  return Mail;
}

angular.module('codeMatchApp')
  .service('Mail', MailService);

})();
