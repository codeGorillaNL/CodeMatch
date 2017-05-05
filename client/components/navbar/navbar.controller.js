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

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.menuToggle = false;
    this.menuIcon = 'menu';
    this.iconOptions = 
      {
        "duration": 375, 
        "rotation": "none"
      };

    this.toggleMenu = function toggleMenu() {
      this.menuToggle = !this.menuToggle;
      return this.menuIcon = this.menuToggle ? 'keyboard_arrow_up' : 'menu';
    }
  }

}

angular.module('codeMatchApp')
  .controller('NavbarController', NavbarController);
