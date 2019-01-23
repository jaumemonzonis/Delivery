"use strict";

moduleZona.controller("zonaNewhomeController", [
    "$scope",
    "$http",
    "$routeParams",
    "toolService",
    'sessionService',
    '$window',
    function ($scope, $http, $routeParams, toolService, sessionService, $window) {

        $scope.visualizar = false;
        $scope.logged = false;


    

        $scope.mostrar = false;
        $scope.activar = true;
        $scope.ajaxData = "";

     


        $scope.isActive = toolService.isActive;

        $scope.update = function () {



            var json = {
                id: null,
                nombre: $scope.nombre,
                id_restaurante: $scope.restaurante,
                id_municipio: $scope.obj_Municipio.id
            }

            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=zona&op=create',
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