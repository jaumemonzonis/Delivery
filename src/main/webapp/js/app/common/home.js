'use strict'

moduleCommon.controller('homeController', ['$scope', '$location', 'toolService', 'sessionService',
    function ($scope, $location, toolService, sessionService) {

        $scope.ruta = $location.path();
  



// HEADER //

        $scope.loggeduser = sessionService.getUserName();
        $scope.loggeduserid = sessionService.getId();
        $scope.logged = sessionService.isSessionActive();
        $scope.tipousuarioID = sessionService.getTypeUserID();
        $scope.isActive = toolService.isActive;
        $scope.limpiar = sessionService.isSessionActive();
        var logged = sessionService.isSessionActive();

        $scope.productos = function () {
            if (logged === true) {
                $location.url(`carrito/plist_burger`);
            } else {
                $location.url(`usuario/login`);
            }
        };

        $scope.locales = function () {
            if (logged === true) {
                $location.url(`carrito/locales`);
            } else {
                $location.url(`usuario/login`);
            }
        };

        $scope.empresa = function () {
            if (logged === true) {
                $location.url(`carrito/empresa`);
            } else {
                $location.url(`usuario/login`);
            }
        };

        $scope.contacto = function () {
            if (logged === true) {
                $location.url(`carrito/contacto`);
            } else {
                $location.url(`usuario/login`);
            }
        };

        // HEADER//

    }]);
