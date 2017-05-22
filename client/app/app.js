'use strict';

angular.module('codeGorillaApp', ['codeGorillaApp.auth', 'codeGorillaApp.admin',
    'codeGorillaApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router',
    'validation.match', 'angularMaterialFormBuilder', 'ngMaterial', 'duScroll', 'ngMdIcons', 'uiGmapgoogle-maps'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
