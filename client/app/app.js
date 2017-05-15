'use strict';

angular.module('codeMatchApp', ['codeMatchApp.auth', 'codeMatchApp.admin', 'codeMatchApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'validation.match', 'ngMdIcons', 'dndLists',
    'mp.datePicker', 'angularTypewrite'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .run(function ($rootScope, $window) {

  	$rootScope.gameInstance = UnityLoader.instantiate("gameContainer", "Build/build06.json", {onProgress: UnityProgress});

    $rootScope.iconOptions = 
      {
        "duration": 375, 
        "rotation": "none"
      };
    
    $rootScope.menuToggle = false;
    $rootScope.menuIcon = 'menu';

    $rootScope.toggleMenu = function toggleMenu() {
      $rootScope.menuToggle = !$rootScope.menuToggle;
      return $rootScope.menuIcon = $rootScope.menuToggle ? 'keyboard_arrow_up' : 'menu';
    }

  	$rootScope.$on('$stateChangeStart', function() {
  	  if ($rootScope.menuToggle == true) {
	      $rootScope.menuToggle = !$rootScope.menuToggle;
	      return $rootScope.menuIcon = $rootScope.menuToggle ? 'keyboard_arrow_up' : 'menu';  	  	
  	  }
    });
  });
