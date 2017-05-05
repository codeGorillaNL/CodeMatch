'use strict';

describe('Component: ProfilesComponent', function () {

  // load the controller's module
  beforeEach(module('codeMatchApp'));

  var ProfilesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ProfilesComponent = $componentController('profiles', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
