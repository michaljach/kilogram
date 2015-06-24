'use strict';

describe('Directive: imagePreload', function () {

  // load the directive's module
  beforeEach(module('instaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<image-preload></image-preload>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imagePreload directive');
  }));
});
