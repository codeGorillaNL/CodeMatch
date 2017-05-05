'use strict';

angular.module('codeMatchApp.auth', ['codeMatchApp.constants', 'codeMatchApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
