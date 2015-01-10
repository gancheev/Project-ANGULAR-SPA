app.controller('AdminController', ['$scope','adminData', '$location', 'authentication', function ($scope,adminData, $location, authentication) {
    $scope.pageTitle = "Admin Page";
    $scope.isLoggedIn = authentication.isLoggedIn();
    $scope.isAdmin = authentication.isAdmin();
    if (authentication.isLoggedIn()) {
        $scope.currentUser = authentication.getName();
        
    }
   
    
    adminData.getAllCategories()
    .$promise
    .then(function (data) {
        $scope.categories = data;
    });
       
}])


