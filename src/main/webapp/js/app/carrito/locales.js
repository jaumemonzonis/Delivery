
'use strict'

moduleCarrito.controller('localesCarritoController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService', "$window",
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
        


// TODOS LOS RESTAURANTES
  function plistRest () {
        $http({
            method: 'GET',
            url: 'json?ob=restaurante&op=getpageSinarea'
        }).then(function (response) {
            $scope.status = response.status;
            $scope.plistrest = response.data.message;
        }, function (response) {
            $scope.status = response.status;
            $scope.plistrest = response.data.message || 'Request failed';
        });
    }
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
            plistRest();
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
 $scope.dir_pedido="local";

        $scope.comprar = function (id_restaurante) {
            $http({
                method: 'GET',
                url: 'json?ob=carrito&op=buy&id_restaurante='+id_restaurante+'&dir_pedido='+$scope.dir_pedido+'&pob_pedido='+ $scope.dir_pedido
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