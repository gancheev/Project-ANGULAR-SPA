app.directive('loggedInSidebar', function () {
    return {
        controller: 'LoggedInSidebarController',
        restrict: 'E',
        templateUrl: 'templates/public/left-sidebar.html',
        replace: false,

    };
});