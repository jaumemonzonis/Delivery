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
            $scope.obj_area = {
                id: response.data.message.obj_area.id,
                nombre: response.data.message.obj_area.nombre
            }


        }), function (response) {
            console.log(response);
        };

        $scope.isActive = toolService.isActive;

        $scope.update = function () {

            var json = {
                id: $scope.id,
                poblacion: $scope.poblacion,
                 id_area: $scope.obj_area.id

            }

            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=municipio&op=update',
                params: {json: JSON.stringify(json)}
            }).then(function () {
                  swal({
                    title: "GUARDADO",
                    text: "El municipio "+$scope.poblacion+" ha sido editado correctamente",
                    icon: "success",
                    button: "Volver!",
                }).then(function () {
                    window.location = "/delivery/municipio/plist";
                });
            })
        }

  $scope.areaRefresh = function (f, consultar) {
            var form = f;
            if (consultar) {
                $http({
                    method: 'GET',
                    url: 'json?ob=area&op=get&id=' + $scope.obj_area.id
                }).then(function (response) {
                    $scope.obj_area = response.data.message;
                    //$scope.poblacion= response.data.message.poblacion;
                    form.userForm.obj_area.$setValidity('valid', true);
                }, function (response) {
                    form.userForm.obj_area.$setValidity('valid', false);
                });
            } else {
                form.userForm.obj_area.$setValidity('valid', true);
            }
        };
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
