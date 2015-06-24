'use strict';

/**
 * @ngdoc directive
 * @name instaApp.directive:imagePreload
 * @description
 * # imagePreload
 */
angular.module('instaApp')
    .directive('imagepreload', function () {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.on('load', function() {
                element.addClass('image--loaded');
            });
        }
    };
});