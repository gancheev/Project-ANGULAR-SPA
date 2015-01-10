app.controller('AdminController', ['$scope', '$location', 'authentication', function ($scope, $location, authentication) {
    $scope.pageTitle = "Admin Page";
    $scope.isLoggedIn = authentication.isLoggedIn();
    $scope.isAdmin = authentication.isAdmin();
    if (authentication.isLoggedIn()) {
        $scope.currentUser = authentication.getName();
        console.log($scope.isAdmin);
        console.log("asd");
    }
   



}])