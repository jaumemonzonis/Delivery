"use strict";

moduleRestaurante.controller("restauranteEditController", [
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
            url: 'json?ob=restaurante&op=get&id=' + $scope.id
        }).then(function (response) {
            console.log(response);
          
            $scope.id = response.data.message.id;
            $scope.nombre = response.data.message.nombre;
            $scope.direccion = response.data.message.direccion;
//            $scope.municipio.poblacion = response.data.message.poblacion;
//            
            $scope.municipio = {
                id: response.data.message.municipio.id,
                poblacion: response.data.message.municipio.poblacion
            }


        }), function (response) {
            console.log(response);
        };

        $http({
            method: 'GET',
            url: 'json?ob=municipio&op=getpage&rpp=1000&page=1'
        }).then(function (response) {
            $scope.status = response.status;
            $scope.municipios = response.data.message;
        }, function (response) {
            $scope.status = response.status;
            $scope.municipios = response.data.message || 'Request failed';
        });

       

        $scope.isActive = toolService.isActive;

        $scope.update = function () {

            var json = {
                id: $scope.id,
                nombre: $scope.nombre,
                direccion: $scope.direccion,
                poblacion: $scope.municipio
            }

            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=restaurante&op=update',
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
