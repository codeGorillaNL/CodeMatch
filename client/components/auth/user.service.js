'use strict';

(function() {

  function UserResource($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    }, {
      changePassword: {
        method: 'PUT',
        params: {
          controller: 'password'
        }
      },
      updateProfile: {
        method: 'PUT'
      },
      get: {
        method: 'GET',
        params: {
          id: 'me'
        }
      },
      list: {
        method: 'GET',
        isArray: true
      }
    });
  }

  angular.module('codeMatchApp')
    .factory('User', UserResource);
})();
