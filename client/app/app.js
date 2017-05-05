'use strict';

angular.module('codeMatchApp', ['codeMatchApp.auth', 'codeMatchApp.admin', 'codeMatchApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'validation.match', 'ngMdIcons', 'dndLists'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .run(function ($rootScope) {
  	$rootScope.gameInstance = UnityLoader.instantiate("gameContainer", "Build/build06.json", {onProgress: UnityProgress});
  });
