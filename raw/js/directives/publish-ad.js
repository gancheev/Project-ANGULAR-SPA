app.directive('publishAdd', function () {
    return {
        controller: 'PublishNewAddController',
        restrict: 'E',
        templateUrl: 'templates/user/publish-new-ad.html',
        replace: false,
    }
});
