'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
      'title': 'Login',
      'state': 'login'
    },    
    {
      'title': 'CodeGorillas',
      'state': 'profiles'
    },    
    {
      'title': 'Sign up',
      'state': 'signupForm.persona'
    },    
    {
      'title': 'Contact',
      'state': 'contact'
    }
  ];

  social = [
    {
      'img': 'assets/images/facebook.png',
      'link': 'https://www.facebook.com/CodeGorillaNL/',
      'title': 'Facebook'
    },    
    {
      'img': 'assets/images/linkedin.png',
      'link': 'https://www.linkedin.com/company-beta/17908501/?pathWildcard=17908501',
      'title': 'Linkedin'
    },    
    {
      'img': 'assets/images/twitter.png',
      'link': 'https://twitter.com/codegorillanl',
      'title': 'Twitter'
    },
    {
      'img': 'assets/images/youtube.png',
      'link': 'https://www.youtube.com/channel/UCs1QNZLADeK7EIQtfzQkgMw',
      'title': 'YouTube'
    }
  ];

  constructor(Auth, $rootScope) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

}

angular.module('codeMatchApp')
  .controller('NavbarController', NavbarController);
