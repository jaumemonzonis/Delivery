"use strict";

moduleUsuario.controller("usuarioEditController", [
    "$scope",
    "$http",
    "$routeParams",
    "toolService",
    "sessionService",
    function ($scope, $http, $routeParams, toolService, sessionService) {
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

        $scope.obj = null;
        $scope.ob = 'usuario';
        $scope.op = 'edit';
        $scope.result = null;
        $scope.title = "Edición de usuario";
        $scope.icon = "fa-file-text-o";

        $http({
            method: "GET",
            url: 'json?ob=' + $scope.ob + '&op=get&id=' + $scope.id
        }).then(function (response) {
            $scope.id = response.data.message.id;
            $scope.nombre = response.data.message.nombre;
            $scope.ape1 = response.data.message.ape1;
            $scope.ape2 = response.data.message.ape2;
            $scope.login = response.data.message.login;
            $scope.pass = 'pass';
            $scope.telefono = response.data.message.telefono;
            $scope.obj_Municipio = {
                id: null,
                poblacion: response.data.message.poblacion
            }
            $scope.direccion = response.data.message.direccion;
            $scope.email = response.data.message.email;


            $scope.obj_tipoUsuario = {
                id: response.data.message.obj_tipoUsuario.id,
                desc: response.data.message.obj_tipoUsuario.desc
            }
        }), function () {
        };



        $scope.isActive = toolService.isActive;

        $scope.update = function () {

            var json = {
                id: $scope.id,
                nombre: $scope.nombre,
                ape1: $scope.ape1,
                ape2: $scope.ape2,
                telefono: $scope.telefono,
                login: $scope.login,
                pass: $scope.pass,
                email: $scope.email,
                direccion: $scope.direccion,
                poblacion: $scope.obj_Municipio.poblacion,
                id_tipousuario: $scope.obj_tipoUsuario.id
            }
            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=usuario&op=update',
                params: {json: JSON.stringify(json)}
            }).then(function () {
                $scope.visualizar = true;
            })
        }

        $scope.tipoUsuarioRefresh = function (f, consultar) {
            var form = f;
            if (consultar) {
                $http({
                    method: 'GET',
                    url: 'json?ob=tipousuario&op=get&id=' + $scope.obj_tipoUsuario.id
                }).then(function (response) {
                    $scope.obj_tipoUsuario = response.data.message;
                    form.userForm.obj_tipousuario.$setValidity('valid', true);
                }, function (response) {
                    //$scope.status = response.status;
                    form.userForm.obj_tipousuario.$setValidity('valid', false);
                });
            } else {
                form.userForm.obj_tipousuario.$setValidity('valid', true);
            }
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
        };

        $scope.back = function () {
            window.history.back();
        };
        $scope.close = function () {
            $location.path('/home');
        };
        $scope.plist = function () {
            $location.path('/' + $scope.ob + '/plist');
        };


//             if (sessionService.getUserName() !== "") {
//            $scope.loggeduser = sessionService.getUserName();
//            $scope.loggeduserid = sessionService.getId();
//            $scope.logged = true;
//            $scope.tipousuarioID = sessionService.getTypeUserID();
//        }


    }
]);
