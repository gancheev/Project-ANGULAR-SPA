app.controller('HomeController', ['$scope', '$location', 'authentication', function ($scope, $location, authentication) {
    $scope.pageTitle = "home";
    $scope.isLoggedIn = authentication.isLoggedIn();
    if (authentication.isLoggedIn()) {
        $scope.currentUser = authentication.getName();
        $scope.isAdmin = authentication.isAdmin();
    }
    $scope.logout = function () {
        authentication.removeUser();
        window.location.reload(false);
    }
  

    $scope.getClass = function (path) {
        if ($location.path() === path) {
            return "active";
        } else {
            return "";
        }
    };

}])