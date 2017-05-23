'use strict';

angular.module('codeGorillaApp', ['codeGorillaApp.auth', 'codeGorillaApp.admin',
    'codeGorillaApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router',
    'validation.match', 'angularMaterialFormBuilder', 'ngMaterial', 'duScroll', 'ngMdIcons',
    'socialLogin'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
  app.config(function(socialProvider){
    socialProvider.setLinkedInKey("867xyimscli5cm");
    $rootScope.$on('event:social-sign-in-success', function(event, userDetails)
    {
        name: <user_name>,
        email: <user_email>,
        imageUrl: <image_url>,
        uid: LinkedIN
    })
  });
