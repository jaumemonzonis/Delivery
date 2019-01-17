"use strict";

moduleMunicipio.controller("municipioEditController", [
    "$scope",
    "$http",
    "$routeParams",
    "toolService",
    'sessionService',
    '$window',
    function ($scope, $http, $routeParams, toolService, sessionService,$window) {

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
            url: 'json?ob=municipio&op=get&id=' + $scope.id
        }).then(function (response) {
            console.log(response);

            $scope.id = response.data.message.id;
            $scope.poblacion = response.data.message.poblacion;


        }), function (response) {
            console.log(response);
        };

        $scope.isActive = toolService.isActive;

        $scope.update = function () {

            var json = {
                id: $scope.id,
                poblacion: $scope.poblacion,

            }

            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=municipio&op=update',
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
