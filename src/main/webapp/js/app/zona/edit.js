"use strict";

moduleZona.controller("zonaEditController", [
    "$scope",
    "$http",
    "$routeParams",
    "toolService",
    'sessionService',
    '$window',
    function ($scope, $http, $routeParams, toolService, sessionService, $window) {

        $scope.visualizar = false;
        $scope.logged = false;

        if (!$routeParams.id) {
            $scope.id = 1;
        } else {
            $scope.id = $routeParams.id;
        }

        $scope.mostrar = false;
        $scope.activar = true;
        $scope.ajaxData = "";



        $http({
            method: "GET",
            url: 'json?ob=zona&op=get&id=' + $scope.id
        }).then(function (response) {
            console.log(response);

            $scope.id = response.data.message.id;
            $scope.nombre = response.data.message.nombre;

            $scope.obj_Restaurante = {
                id: response.data.message.obj_Restaurante.id,
                restaurante: response.data.message.obj_Restaurante.nombre
            }
             $scope.obj_Municipio = {
                id: response.data.message.obj_Municipio.id,
                municipio: response.data.message.obj_Municipio.poblacion
            }
            
        }), function (response) {
            console.log(response);
        };

        $scope.isActive = toolService.isActive;

        $scope.update = function () {

            var json = {
                id: $scope.id,
                nombre: $scope.nombre,
                id_restaurante: $scope.obj_Restaurante.id,
                id_municipio: $scope.obj_Municipio.id

            }

            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=zona&op=update',
                params: {json: JSON.stringify(json)}
            }).then(function () {
                $scope.visualizar = true;
            })
        }


        $scope.volver = function () {
            $window.history.back();
        }
        $scope.close = function () {
            $location.path('/home');
        };
        $scope.plist = function () {
            $location.path('/' + $scope.ob + '/plist');
        };

    }]);
