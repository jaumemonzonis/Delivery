"use strict";

moduleArea.controller("areaEditController", [
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
            url: 'json?ob=area&op=get&id=' + $scope.id
        }).then(function (response) {
            console.log(response);

            $scope.id = response.data.message.id;
            $scope.nombre = response.data.message.nombre;


        }), function (response) {
            console.log(response);
        };

        $scope.isActive = toolService.isActive;

        $scope.update = function () {

            var json = {
                id: $scope.id,
                nombre: $scope.nombre,

            }

            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=area&op=update',
                params: {json: JSON.stringify(json)}
            }).then(function () {
                    swal({
                    title: "GUARDADO",
                    text: "El area "+$scope.nombre+" ha sido editado correctamente",
                    icon: "success",
                    button: "Volver!",
                }).then(function () {
                    window.location = "/delivery/area/plist";
                });
            })
        }



    }]);
