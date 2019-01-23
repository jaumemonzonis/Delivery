"use strict";

moduleFactura.controller("facturaEditController", [
    "$scope",
    "$http",
    "$routeParams",
    "toolService",
    "$window",
    'sessionService',
    function ($scope, $http, $routeParams, toolService, $window, sessionService) {

        $scope.visualizar = false;
        $scope.ob = "factura";

        $scope.obj = null;

        $scope.op = 'edit';
        $scope.result = null;
        $scope.title = "Edición de factura";
        $scope.icon = "fa-file-text-o";

        if (!$routeParams.id) {
            $scope.id = 1;
        } else {
            $scope.id = $routeParams.id;
        }

        $http({
            method: 'GET',
            url: 'json?ob=usuario&op=get&id=' + $scope.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.nombre2 = response.data.message.nombre;
            $scope.ape1 = response.data.message.ape1;
        }, function (response) {
            $scope.status = response.status;

        });



        $http({
            method: "GET",
            url: 'json?ob=' + $scope.ob + '&op=get&id=' + $scope.id
        }).then(function (response) {
            console.log(response);
            $scope.id = response.data.message.id;
            $scope.iva = response.data.message.iva;
            $scope.obj_Restaurante = {
                id: response.data.message.obj_Restaurante.id,
                restaurante: response.data.message.obj_Restaurante.nombre
            }

            $scope.ajaxFecha = response.data.message.fecha;
            $scope.resultado = $scope.ajaxFecha.slice(0, 3);
            switch ($scope.resultado) {
                case "ene":
                    $scope.fecha = $scope.ajaxFecha.replace("ene", "jan");
                    break;
                case "abr":
                    $scope.fecha = $scope.ajaxFecha.replace("abr", "apr");
                    break;
                case "ago":
                    $scope.fecha = $scope.ajaxFecha.replace("ago", "aug");
                    break;
                case "dic":
                    $scope.fecha = $scope.ajaxFecha.replace("dic", "dec");
                    break;
                default:
                    $scope.fecha = $scope.ajaxFecha;
                    break;
            }

            $scope.myDate = new Date($scope.fecha);
          


        }), function (response) {
            console.log(response);
        };




        $scope.isActive = toolService.isActive;

        $scope.update = function () {

            var json = {
                id: $scope.id,
                fecha: $scope.myDate,
                iva: $scope.iva,
                id_usuario: $scope.id,
                id_restaurante: $scope.restaurante

            }
            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=' + $scope.ob + '&op=update',
                params: {json: JSON.stringify(json)}
            }).then(function () {
                $scope.visualizar = true;
            })
        }

        $scope.usuarioRefresh = function (f, consultar) {
            var form = f;
            if (consultar) {
                $http({
                    method: 'GET',
                    url: 'json?ob=usuario&op=get&id=' + $scope.obj_Usuario.id
                }).then(function (response) {
                    $scope.obj_usuario = response.data.message;
                    form.userForm.obj_usuario.$setValidity('valid', true);
                }, function (response) {
                    form.userForm.obj_usuario.$setValidity('valid', false);
                });
            } else {
                form.userForm.obj_usuario.$setValidity('valid', true);
            }
        }

        $scope.back = function () {
            window.history.back();
        };
        $scope.close = function () {
            $location.path('/home');
        };
        $scope.plist = function () {
            $location.path('/' + $scope.ob + '/plist');
        };



        $scope.volver = function () {
            $window.history.back();
        }



    }
]);
