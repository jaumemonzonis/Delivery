
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
//SELECT * FROM `restaurante` WHERE restaurante.id IN (SELECT restaurante_municipio.id_restaurante FROM `restaurante_municipio` WHERE restaurante_municipio.id_municipio IN (SELECT municipio.id FROM municipio WHERE municipio.id_area=(SELECT m.id_area from municipio m WHERE m.poblacion='Museros'))) AND restaurante.id <> 0

//        $scope.id_rest_predeterminado= "0";
//POBLACION USUARIO COINCIDE CON RESTAURANTE. OPCION PREDETERMINADA
        $http({
            method: 'GET',
            url: `json?ob=municipio&op=getIdRestaurante`
        }).then(function (response) {
            $scope.status = response.status;
            $scope.prerest = response.data.message;
            $scope.id_rest_predeterminado = response.data.message.id;
            console.log("antes de llamada ajax area" + $scope.id_rest_predeterminado);
            if ($scope.id_rest_predeterminado === "") {
                $scope.id_rest_predeterminado = "0";
            }
            areaRest($scope.id_rest_predeterminado);
        }, function (response) {
            $scope.status = response.status;
            $scope.prerest = response.data.message || 'Request failed';
        });


//RESTAURANTES DE LA MISMA AREA.
        function areaRest (id_rest_predeterminado) {
            $http({
                method: 'GET',
                url: 'json?ob=municipio&op=getIdRestauranteArea&id=' + id_rest_predeterminado
            }).then(function (response) {
                $scope.status = response.status;
                $scope.arearest = response.data.message;
            }, function (response) {
                $scope.status = response.status;
                $scope.arearest = response.data.message || 'Request failed';
            });

        };

        console.log("despues de llamada ajax area" + $scope.id_rest_predeterminado);
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