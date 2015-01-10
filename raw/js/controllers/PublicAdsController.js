app.controller('PublicAdsController', ['$scope', 'adsData', 'filter', function ($scope, adsData, filter) {
    $scope.ready = false;
   


    function loadPublicAds(filterParams) {
        filterParams = filterParams || {};
        adsData.getPublicAds(filterParams)
            .$promise
            .then(function (data) {
                $scope.adsData = data;
                $scope.ready = true;
            })
    }
    loadPublicAds();

    $scope.$on('categoryClicked', function (event, category) {

        loadPublicAds(filter.getParams());

    });

    $scope.$on('townClicked', function (event, town) {

        loadPublicAds(filter.getParams());

    });
    $scope.pageChanged = function () {

        filter.setPageParams({startPage:$scope.currentPage, pageSize: 0});
        adsData.getPublicAds(filter.getParams)
    }


}]);