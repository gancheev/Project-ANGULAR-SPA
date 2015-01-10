app.factory('categoriesData', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {
    function getCategories() {

        return $resource(baseServiceUrl + 'categories').query();

    }
    function adminGetCategories() {

        return $resource(baseServiceUrl + 'admin/categories').query();

    }
    return {
        getCategories: getCategories,
        adminGetCategories: adminGetCategories
    }
}])