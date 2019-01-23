'use strict';

moduleAdministrador.controller('administradorPlistController', ['$scope', 'sessionService','$http',
    function ($scope, sessionService, $http) {
    $scope.loggeado= false;
        $http({
            method: 'GET',
            url: 'json?ob=usuario&op=check'
        }).then(function (response) {
            if (response.data.status === 200) {
                $scope.loggeduser = response.data.message.nombre + " " + response.data.message.ape1;
                $scope.loggeduserid = response.data.message.id;
                $scope.loggeado= true;
            }
        }, function (response) {
            sessionService.setSessionInactive;
        });












    }]);