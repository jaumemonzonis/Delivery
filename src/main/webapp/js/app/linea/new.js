"use strict";

moduleLinea.controller("lineaNewController", [
    "$scope",
    "$http",
    "$routeParams",
    "toolService",
    "$window",
    'sessionService',
    function ($scope, $http, $routeParams, toolService, $window, sessionService) {

 if (!$routeParams.id) {
            $scope.id_factura = 0;
        } else {
            $scope.id_factura = $routeParams.id;
        }

        $scope.ob = "linea";
        $scope.id = null;
        $scope.visualizar = false;
        $scope.isActive = toolService.isActive;

        $http({
            method: 'GET',
            url: 'json?ob=factura&op=getpage&rpp=1000&page=1'
        }).then(function (response) {
            $scope.status = response.status;
            $scope.facturas = response.data.message;
        }, function (response) {
            $scope.status = response.status;
            $scope.facturas = response.data.message || 'Request failed';
        });
        
         $http({
            method: 'GET',
            url: 'json?ob=producto&op=getpage&rpp=1000&page=1'
        }).then(function (response) {
            $scope.status = response.status;
            $scope.productos = response.data.message;
        }, function (response) {
            $scope.status = response.status;
            $scope.productos = response.data.message || 'Request failed';
        });

     

        $scope.update = function () {

            var json = {
                id: null,
                cantidad: $scope.cantidad,
                id_factura: $scope.factura,
                id_producto: $scope.producto
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
