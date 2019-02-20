
'use strict'

moduleCarrito.controller('empresaCarritoController', ['$scope', "$window",
    function ($scope, $window) {
        
// HEADER //

        $scope.loggeduser = sessionService.getUserName();
        $scope.loggeduserid = sessionService.getId();
        $scope.logged = sessionService.isSessionActive();
        $scope.tipousuarioID = sessionService.getTypeUserID();
        $scope.isActive = toolService.isActive;
        $scope.limpiar = sessionService.isSessionActive();


        $scope.productos = function () {
            if ($scope.logged === true) {
                $location.url(`carrito/plist_burger`);
            } else {
                $location.url(`usuario/login`);
            }
        };

        $scope.locales = function () {
            if ($scope.logged === true) {
                $location.url(`carrito/locales`);
            } else {
                $location.url(`usuario/login`);
            }
        };

        $scope.empresa = function () {
            if ($scope.logged === true) {
                $location.url(`carrito/empresa`);
            } else {
                $location.url(`usuario/login`);
            }
        };

        $scope.contacto = function () {
            if ($scope.logged === true) {
                $location.url(`carrito/contacto`);
            } else {
                $location.url(`usuario/login`);
            }
        };

        // HEADER//
        

        $scope.volver = function () {
            $window.history.back();
        }

    }



]);