app.directive('adminHome', function () {
    return {
        controller: 'AdminController',
        restrict: 'E',
        templateUrl: 'templates/admin/admin-home.html',
        replace: false,
    }
});
