app.controller('HomeController', ['$scope', 'authentication', function ($scope, authentication) {
    $scope.pageTitle = "home";
    $scope.isLoggedIn = authentication.isLoggedIn();
}])