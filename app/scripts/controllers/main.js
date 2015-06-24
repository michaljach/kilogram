'use strict';

/**
 * @ngdoc function
 * @name instaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the instaApp
 */
angular.module('instaApp')
    .controller('MainCtrl', function ($scope, $http, $interval) {

        $scope.getImages = function() {
            $http.jsonp('https://api.instagram.com/v1/media/popular?client_id=5ee0848539574249b47b8b5fc78fb25c&callback=JSON_CALLBACK').
            success(function(data) {
                $scope.images = data.data;
            }).
            error(function(data) {
                console.warn(data);
            });
        };

        $scope.getImages();

        $interval(function() {
            $scope.getImages();
        }, 10000);

    });