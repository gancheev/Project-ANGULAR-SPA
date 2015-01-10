app.directive('loggedInSidebar', function () {
    return {
        controller: 'LoggedInSidebarController',
        restrict: 'E',
        templateUrl: 'templates/public/logged-in-sidebar.html',
        replace: false,

    };
});