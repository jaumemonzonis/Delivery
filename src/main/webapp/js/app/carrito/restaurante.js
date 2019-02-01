
'use strict'

moduleCarrito.controller('restauranteCarritoController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService', "$window",
    function ($scope, $http, $location, toolService, $routeParams, sessionService, $window) {




// TODOS LOS RESTAURANTES
        $http({
            method: 'GET',
            url: 'json?ob=restaurante&op=getpage&rpp=100&page=1'
        }).then(function (response) {
            $scope.status = response.status;
            $scope.plistrest = response.data.message;
        }, function (response) {
            $scope.status = response.status;
            $scope.plistrest = response.data.message || 'Request failed';
        });



//POBLACION USUARIO COINCIDE CON RESTAURANTE. OPCION PREDETERMINADA
        $http({
            method: 'GET',
            url: `json?ob=municipio&op=getIdRestaurante`
        }).then(function (response) {
            $scope.status = response.status;
            $scope.prerest = response.data.message;
        }, function (response) {
            $scope.status = response.status;
            $scope.prerest = response.data.message || 'Request failed';
        });

//RESTAURANTES DE LA MISMA AREA.

        $http({
            method: 'GET',
            url: `json?ob=municipio&op=getIdRestauranteArea`
        }).then(function (response) {
            $scope.status = response.status;
            $scope.arearest = response.data.message;
        }, function (response) {
            $scope.status = response.status;
            $scope.arearest = response.data.message || 'Request failed';
        });


        $scope.buy = function (id_restaurante) {
            $http({
                method: 'GET',
                url: 'json?ob=carrito&op=buy&id_restaurante=' + id_restaurante
            }).then(function (response) {
                $scope.status = response.status;
                $scope.msg_factura = response.data.message;
                $scope.factura = true;
                $location.url(`carrito/facturacarrito/` + $scope.msg_factura);
            }, function (response) {
                $scope.status = response.status;
                $scope.msg_factura = response.data.message || 'Request failed';

            });

        };






        $scope.isActive = toolService.isActive;

        $scope.volver = function () {
            $window.history.back();
        }

    }



]);