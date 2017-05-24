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
    'title': 'Aanmelden',
    'state': 'signup'
  },
  {
    'title': 'Contact',
    'state': 'contact'
  },
  ];

  isCollapsed = false;
  clickIcon = 'menu';
  //end-non-standard

  constructor(Auth, $rootScope) {
    var nav = this;

    nav.map = {
      center: {
          latitude: 52.781843,
          longitude: 6.895173,
      },
      zoom: 16
    }

    nav.options = {
        styles: [
          // geometry is colored CodeGorilla blue
          {elementType: 'geometry', stylers: [{color: '#77C4D7'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: 'white'}]},
          {elementType: 'labels.text.fill', stylers: [{color: 'white'}]},
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: 'black'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: 'white'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
          },
          {
            //roads are colored CodeGorilla red
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#E25054'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
          },
          {
            featureType: 'road',
            stylers: [{color: 'black'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: 'black'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: 'white'}]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#515c6d'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'poi.business',
          stylers: [{color: 'white',}]
        }
      ]
    }

    nav.marker = {
      id: 0,
      coords: {
        latitude: 52.781843,
        longitude: 6.895173
      },
      options: {
        draggable: false,
        icon: '/assets/images/codegorilla_icon.png'
      }
    }

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
