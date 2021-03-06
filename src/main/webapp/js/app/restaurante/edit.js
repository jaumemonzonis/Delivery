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
           
          
            $scope.obj_Municipio = {
                id: response.data.message.id,
                poblacion: response.data.message.poblacion
            }


        }), function (response) {
            console.log(response);
        };

   

     
        $scope.isActive = toolService.isActive;

        $scope.update = function () {

            var json = {
                id: $scope.id,
                nombre: $scope.nombre,
                direccion: $scope.direccion,
                poblacion: $scope.obj_Municipio.poblacion 
            }

            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=restaurante&op=update',
                params: {json: JSON.stringify(json)}
            }).then(function () {
                swal({
                    title: "GUARDADO",
                    text: "El restaurante "+$scope.nombre+" ha sido editado correctamente",
                    icon: "success",
                    button: "Volver!",
                }).then(function () {
                    window.location = "/delivery/restaurante/plist";
                });
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
