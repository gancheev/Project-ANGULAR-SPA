app.directive('categories', function () {
    return {
        controller: 'CategoriesController',
        restrict: 'E',
        templateUrl: 'templates/public/categories.html',
        replace: false,
    }
});
