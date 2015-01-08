'use strict';
var app = angular.module('adsApp', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
    $routeProvider.when('/#', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController'
    });
}]);