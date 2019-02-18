"use strict";

moduleArea.controller("areaNewController", [
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
                nombre: $scope.nombre
            }

            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=area&op=create',
                params: {json: JSON.stringify(json)}
            }).then(function () {
                          swal({
                    title: "GUARDADO",
                    text: "El area "+$scope.nombre+" ha sido guardada correctamente",
                    icon: "success",
                    button: "Volver!",
                }).then(function () {
                    window.location = "/delivery/area/plist";
                });
            })
        }


    }]);