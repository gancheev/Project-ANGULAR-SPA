app.controller('CategoriesController', ['$scope', 'categoriesData', function ($scope, categoriesData) {
    function loadCategories(params) {
        var params = params || {};
            categoriesData.getCategories()
        .$promise
        .then(function (data) {
            $scope.categories = data;
        }); 
    }
    loadCategories();
    $scope.categoryClicked = function categoryClicked(category) {
        filter.filterByCategory(category);
        loadCategories();
    }
}])