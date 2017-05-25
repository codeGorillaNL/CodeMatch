'use strict';

class NavbarController {
  //start-non-standard
  menu = [
  {
    'title': 'Home',
    'state': 'main'
  },
  {
    'title': 'Inloggen',
    'state': 'login'
  },
  {
    'title': 'Registratie',
    'state': 'registration'
  },
  {
    'title': 'Contact',
    'state': 'contact'
  }
  ];

  isCollapsed = false;
  clickIcon = 'menu';
  //end-non-standard

  constructor(Auth, $rootScope) {
    var nav = this;
    nav.isLoggedIn = Auth.isLoggedIn;
    nav.isAdmin = Auth.isAdmin;
    nav.getCurrentUser = Auth.getCurrentUser;
    nav.expandMenu = function() {
        if (nav.clickIcon === 'menu') {
            nav.isCollapsed = true;
            nav.clickIcon = 'clear';
        }
        else {
            nav.isCollapsed = false;
            nav.clickIcon = 'menu';
        }
    };
    $rootScope.$on('$stateChangeStart',
      function(){
            nav.isCollapsed = false;
            nav.clickIcon = 'menu';
      })
    }

}

angular.module('codeGorillaApp')
  .controller('NavbarController', NavbarController);
