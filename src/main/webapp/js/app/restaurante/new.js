"use strict";

moduleRestaurante.controller("restauranteNewController", [
    "$scope",
    "$http",
    "$routeParams",
    "toolService",
    'sessionService',
    '$window',
    function ($scope, $http, $routeParams, toolService, sessionService, $window) {

        $scope.visualizar = false;
        $scope.logged = false;


        $scope.id = null;


        $scope.mostrar = false;
        $scope.activar = true;
        $scope.ajaxData = "";

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
                id: null,
                nombre: $scope.nombre,
                direccion: $scope.direccion,
                poblacion: $scope.municipio
            }

            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=restaurante&op=create',
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