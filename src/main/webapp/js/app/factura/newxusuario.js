"use strict";


moduleFactura.controller('facturanewxusuarioController', ['$scope', '$http', '$location', 'toolService', '$routeParams', '$window', 'sessionService',
    function ($scope, $http, $location, toolService, $routeParams, $window, sessionService) {
//      if (sessionService.getUserName() !== "") {
//            $scope.loggeduser = sessionService.getUserName();
//            $scope.loggeduserid = sessionService.getId();
//            $scope.logged = true;
//            $scope.tipousuarioID = sessionService.getTypeUserID();
//        }

        if (!$routeParams.id) {
            $scope.id_usuario = 0;
        } else {
            $scope.id_usuario = $routeParams.id;
        }
        $scope.obj_Restaurante = {
            id: null,
            nombre: null,
            poblacion: null
        }
        $scope.ob = "factura";
        $scope.id = null;
        $scope.myDate = new Date();

        $scope.isActive = toolService.isActive;

        $http({
            method: 'GET',
            url: 'json?ob=usuario&op=get&id=' + $scope.id_usuario
        }).then(function (response) {
            $scope.status = response.status;
            $scope.nombre2 = response.data.message.nombre;
            $scope.ape1 = response.data.message.ape1;
        }, function (response) {
            $scope.status = response.status;

        });

        $scope.update = function () {
            $scope.visualizar = false;
            $scope.error = false;
            var json = {
                id: null,
                fecha: $scope.myDate,
                iva: $scope.iva,
                direccion_pedido: $scope.direccion_pedido,
                poblacion_pedido: $scope.poblacion_pedido,
                id_usuario: $scope.id_usuario,
                id_restaurante: $scope.obj_Restaurante.id
            };

            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=' + $scope.ob + '&op=create',
                params: {json: JSON.stringify(json)}
            }).then(function (response) {
                swal({
                    title: "GUARDADO",
                    text: "Factura  " + $scope.id + " ha sido guardada correctamente",
                    icon: "success",
                    button: "Volver!",
                }).then(function () {
                    window.location = "/delivery/usuario/plist";
                });
            }), function (response) {
                console.log(response);
                $scope.error = true;
            }
        }


        $scope.restauranteRefresh = function (f, consultar) {
            var form = f;
            if (consultar) {
                $http({
                    method: 'GET',
                    url: 'json?ob=restaurante&op=get&id=' + $scope.obj_Restaurante.id
                }).then(function (response) {
                    $scope.obj_Restaurante = response.data.message;
                    $scope.obj_Restaurante.nombre = response.data.message.nombre;
                    form.userForm.obj_restaurante.$setValidity('valid', true);
                }, function (response) {
                    form.userForm.obj_restaurante.$setValidity('valid', false);
                });
            } else {
                form.userForm.obj_restaurante.$setValidity('valid', true);
            }
        }
        $scope.volver = function () {
            $window.history.back();
        };


    }
]);
