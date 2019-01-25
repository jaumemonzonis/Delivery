'use strict'

delivery.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true);
    }]);
delivery.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }]);