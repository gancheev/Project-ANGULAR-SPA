app.factory('adminData', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {
    function getAllCategories() {

        return $resource(baseServiceUrl + 'admin/categories').query();

    }
    return {
        getAllCategories: getAllCategories
    }
}])