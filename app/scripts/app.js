'use strict';

/**
 * @ngdoc overview
 * @name instaApp
 * @description
 * # instaApp
 *
 * Main module of the application.
 */
angular
    .module('instaApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider, $httpProvider, $compileProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|instagram|chrome-extension):/);
    });
