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

          
            $scope.obj_Municipio = {
                id: response.data.message.obj_Municipio.id,
                poblacion: response.data.message.obj_Municipio.poblacion
            }

        }), function (response) {
            console.log(response);
        };

        $scope.isActive = toolService.isActive;

        $scope.update = function () {

            var json = {
                id: $scope.id,
                nombre: $scope.nombre,
                id_municipio: $scope.obj_Municipio.id

            }

            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=area&op=update',
                params: {json: JSON.stringify(json)}
            }).then(function () {
                $scope.visualizar = true;
            })
        }
        $scope.municipioRefresh = function (f, consultar) {
            var form = f;
            if (consultar) {
                $http({
                    method: 'GET',
                    url: 'json?ob=municipio&op=get&id=' + $scope.obj_Municipio.id
                }).then(function (response) {
                    $scope.obj_Municipio = response.data.message;
                     //$scope.poblacion= response.data.message.poblacion;
                    form.userForm.obj_municipio.$setValidity('valid', true);
                }, function (response) {
                    form.userForm.obj_municipio.$setValidity('valid', false);
                });
            } else {
                form.userForm.obj_municipio.$setValidity('valid', true);
            }
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
