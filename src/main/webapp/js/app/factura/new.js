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
        $http({
            method: 'GET',
            url: 'json?ob=restaurante&op=getpage&rpp=1000&page=1'
        }).then(function (response) {
            $scope.status = response.status;
            $scope.restaurantes = response.data.message;
        }, function (response) {
            $scope.status = response.status;
            $scope.restaurantes = response.data.message || 'Request failed';
        });

        $http({
            method: 'GET',
            url: 'json?ob=usuario&op=getpage&rpp=1000&page=1'
        }).then(function (response) {
            $scope.status = response.status;
            $scope.usuarios = response.data.message;
        }, function (response) {
            $scope.status = response.status;
            $scope.usuarios = response.data.message || 'Request failed';
        });



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
                          swal({
                    title: "GUARDADO",
                    text: "Factura  "+$scope.id+" ha sido guardada correctamente",
                    icon: "success",
                    button: "Volver!",
                }).then(function () {
                    window.location = "/delivery/usuario/plist";
                });
            })
        }


        $scope.volver = function () {
            $window.history.back();
        };


    }
]);
