'use strict'

moduleCarrito.controller('carritoOpcionController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService', "$window",
    function ($scope, $http, $location, toolService, $routeParams, sessionService, $window) {

        
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
        
  
         $scope.alert = false;


        $http({
            method: 'GET',
            url: 'json?ob=carrito&op=show'
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataShow = response.data.message;
            if ($scope.ajaxDataShow === "Carrito vacio") {
                $scope.alert = true;
            }
        }, function (response) {
            $scope.status = response.status;
            $scope.ajaxDataShow = response.data.message || 'Request failed';
        });



        $scope.isActive = toolService.isActive;

        $scope.domicilio = function () {
            $location.url(`carrito/domicilio`);
        };
        $scope.local = function () {
            $location.url(`carrito/restaurante`);
        };
        
        $scope.volver = function () {
            $window.history.back();
        }

    }



]);