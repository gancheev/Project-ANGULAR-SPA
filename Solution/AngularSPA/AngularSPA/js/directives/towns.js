app.directive('towns', function () {
    return {
        controller: 'TownsController',
        restrict: 'E',
        templateUrl: 'templates/public/towns.html',
        replace: true,
    }
});
