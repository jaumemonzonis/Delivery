"use strict";


moduleMunicipio.controller('municipionewxusuarioController', ['$scope', '$http', '$location', 'toolService', '$routeParams', '$window', 'sessionService',
    function ($scope, $http, $location, toolService, $routeParams, $window, sessionService) {


        if (!$routeParams.id) {
            $scope.id_area = 0;
        } else {
            $scope.id_area = $routeParams.id;
        }

        $scope.ob = "municipio";
        $scope.id = null;


        $scope.isActive = toolService.isActive;

        $http({
            method: 'GET',
            url: 'json?ob=area&op=get&id=' + $scope.id_area
        }).then(function (response) {
            $scope.status = response.status;
            $scope.nombre2 = response.data.message.nombre;
        }, function (response) {
            $scope.status = response.status;

        });

        $scope.update = function () {
            $scope.visualizar = false;
            $scope.error = false;
            var json = {
                id: null,
                poblacion: $scope.obj_Municipio.poblacion,
                id_area: $scope.id_area
            };

            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=' + $scope.ob + '&op=create',
                params: {json: JSON.stringify(json)}
            }).then(function (response) {
                console.log(response);
                $scope.visualizar = true;
            }), function (response) {
                console.log(response);
                $scope.error = true;
            }
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
    }
]);
