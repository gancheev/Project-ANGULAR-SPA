﻿'use strict';
var app = angular.module('adsApp', ['ngRoute', 'ngResource', 'LocalStorageModule','ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController'
    });
  
    
    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController',
    });
    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });
    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/user/publish-new-ad.html',
        controller: 'PublishNewAddController'
    });
    $routeProvider.when('/admin/home', {
        templateUrl: 'templates/admin/admin-home.html',
        controller: 'AdminController'
    });
    $routeProvider.when('/admin/all-users', {
        templateUrl: 'templates/admin/all-users.html',
        controller: 'AdminController'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
    
}]);
