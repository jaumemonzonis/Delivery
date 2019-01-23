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

        $scope.obj_Producto = {
            id: null,
            desc: null
        }

     

        $scope.update = function () {

            var json = {
                id: null,
                cantidad: $scope.cantidad,
                id_factura: $scope.factura,
                id_producto: $scope.obj_Producto.id
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
        
        $scope.productoRefresh = function (f, consultar) {
            var form = f;
            if (consultar) {
                $http({
                    method: 'GET',
                    url: 'json?ob=producto&op=get&id=' + $scope.obj_Producto.id
                }).then(function (response) {
                    $scope.obj_Producto = response.data.message;
                    form.userForm.obj_Producto.$setValidity('valid', true);
                }, function (response) {
                    form.userForm.obj_Producto.$setValidity('valid', false);
                });
            } else {
                form.userForm.obj_Producto.$setValidity('valid', true);
            }
        };
        
        $scope.volver = function () {
            $window.history.back();
        };


    }
]);
