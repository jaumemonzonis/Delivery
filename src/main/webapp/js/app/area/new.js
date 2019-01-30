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


        if (!$routeParams.id) {
            $scope.id_restaurante = 1;
        } else {
            $scope.id_restaurante = $routeParams.id;
        }


        $scope.mostrar = false;
        $scope.activar = true;
        $scope.ajaxData = "";

   
        
         $scope.obj_Municipio = {
                id: null,
                poblacion: null
            }

        $scope.isActive = toolService.isActive;

        $scope.update = function () {



            var json = {
                id: null, 
                id_municipio: $scope.obj_Municipio.id,
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
                     $scope.obj_Municipio.poblacion= response.data.message.poblacion;
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