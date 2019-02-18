
'use strict'
//http://localhost:8081/json?ob=usuario&op=login&user=ddd&pass=pass
moduleUsuario.controller('cambiarpassclienteController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService',
    function ($scope, $http, $location, toolService, $routeParams, sessionService) {

        $scope.edited = true;
        $scope.error = true;
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
            $scope.pass = '';
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

            if ($scope.pass === $scope.passNew) {

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
                    $scope.edited = false;
                    $location.path('usuario/viewusuariocliente/'+ $scope.id );
                })
            } else {
                $scope.edited = true;
                $scope.error = false;

            }
        };
    }
]);
