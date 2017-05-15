'use strict';

angular.module('codeGorillaApp.auth', ['codeGorillaApp.constants', 'codeGorillaApp.util',
    'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
