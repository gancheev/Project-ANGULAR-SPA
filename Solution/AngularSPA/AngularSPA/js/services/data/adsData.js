﻿app.factory('adsData', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {
    var resource = $resource(baseServiceUrl + 'ads:addId', { adId: '@id' }, {
        update: { method: 'PUT' }
    });

    function getPublicAds(filterParams) {
        return resource.get(filterParams);
    }

    function editAd(addId, ad) {
        return resource.update({ id: adId }, ad);
    }

    function getAdById(adId) {
        return resource.get({ id: adId });
    }

    function addAd(ad) {
        return resource.save(ad);
    }

    function deleteAd() {
        return resource.delete({ id: adId });
    }

    return {
        getPublicAds: getPublicAds,
        edit: editAd,
        getAdById: getAdById,
        add: addAd,
        delete: deleteAd
    }
}]);