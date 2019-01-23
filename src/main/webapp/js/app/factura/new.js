"use strict";

moduleFactura.controller("facturaNewController", [
    "$scope",
    "$http",
    "$routeParams",
    "toolService",
    "$window",
    'sessionService',
    function ($scope, $http, $routeParams, toolService, $window, sessionService) {

    
        
        $scope.ob = "factura";
        $scope.id = null;
        $scope.visualizar = false;
        $scope.isActive = toolService.isActive;

        $scope.obj_Producto = {
            id: null,
            desc: null
        }

        $scope.myDate = new Date();

        $scope.update = function () {

            var json = {
                id: null,
                fecha: $scope.myDate,
                iva: $scope.iva,
                id_usuario: $scope.usuario,
                id_restaurante: $scope.restaurante
            };

            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=' + $scope.ob + '&op=create',
                params: {json: JSON.stringify(json)}
            }).then(function () {
                $scope.visualizar = true;
            })
        }

        
        $scope.volver = function () {
            $window.history.back();
        };


    }
]);
