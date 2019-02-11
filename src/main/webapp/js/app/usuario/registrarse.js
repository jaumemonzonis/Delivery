"use strict";

moduleUsuario.controller("usuarioRegistrarseController", [
       "$scope",
    "$http",
    "$routeParams",
    "toolService",
    "sessionService",
    function ($scope, $http, $routeParams, toolService, sessionService) {
        $scope.visualizar = false;
        $scope.logged = false;

        $scope.obj_tipoUsuario = {
            id: null,
            desc: null
        }
        $scope.id = null;

        $scope.mostrar = false;
        $scope.activar = true;
        $scope.ajaxData = "";

        $scope.obj = null;
        $scope.ob = 'usuario';
        $scope.op = 'create';
        $scope.result = null;
        $scope.title = "Nuevo de usuario";
        $scope.icon = "fa-file-text-o";

//        $http({
//            method: 'GET',
//            url: 'json?ob=municipio&op=getpage&rpp=1000&page=1'
//        }).then(function (response) {
//            $scope.status = response.status;
//            $scope.municipios = response.data.message;
//        }, function (response) {
//            $scope.status = response.status;
//            $scope.municipios = response.data.message || 'Request failed';
//        });

        $scope.isActive = toolService.isActive;

        $scope.update = function () {

            var json = {
                id: $scope.id,
                nombre: $scope.nombre,
                ape1: $scope.ape1,
                ape2: $scope.ape2,
                telefono: $scope.telefono,
                login: $scope.login,
                pass: forge_sha256($scope.pass),
                email: $scope.email,
                direccion: $scope.direccion,
                poblacion: $scope.poblacion,
                id_tipousuario: "0"
            }
            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=usuario&op=create',
                params: {json: JSON.stringify(json)}
            }).then(function () {
                $scope.visualizar = true;
            })
        }

        $scope.back = function () {
            window.history.back();
        };
        $scope.close = function () {
            $location.path('/home');
        };
        $scope.plist = function () {
            $location.path('/' + $scope.ob + '/plist');
        };


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
