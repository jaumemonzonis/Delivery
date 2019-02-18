"use strict";

moduleProducto.controller("productoEditController", [
    "$scope",
    "$http",
    "$routeParams",
    "toolService",
    'sessionService',
    function ($scope, $http, $routeParams, toolService, sessionService) {


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
            url: 'json?ob=producto&op=get&id=' + $scope.id
        }).then(function (response) {
            console.log(response);
//            $scope.status = response.status;
            $scope.id = response.data.message.id;
            $scope.codigo = response.data.message.codigo;
            $scope.nombre = response.data.message.nombre;
            $scope.desc = response.data.message.desc;
            $scope.existencias = response.data.message.existencias;
            $scope.precio = response.data.message.precio;
            $scope.foto = response.data.message.foto;
            $scope.obj_tipoProducto = {
                id: response.data.message.obj_tipoProducto.id,
                desc: response.data.message.obj_tipoProducto.desc
            }

        }), function (response) {
            console.log(response);
        };

        $scope.isActive = toolService.isActive;

        $scope.update = function () {
            var nombreFoto;
 

            if ($scope.myFile !== undefined) {
                nombreFoto = $scope.myFile.name;
                $scope.uploadFile(nombreFoto);
            } else {
                if ($scope.foto != '' || $scope.foto != null) {
                    nombreFoto = $scope.foto;
                } else {
                    nombreFoto = "default.jpg";
                }
            }

            var json = {
                id: $scope.id,
                codigo: $scope.codigo,
                nombre: $scope.nombre,
                desc: $scope.desc,
                existencias: $scope.existencias,
                precio: $scope.precio,
                foto: nombreFoto,
                id_tipoProducto: $scope.obj_tipoProducto.id
            }

            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=producto&op=update',
                params: {json: JSON.stringify(json)}
            }).then(function () {
                 swal({
                    title: "GUARDADO",
                    text: "El producto "+$scope.nombre+" ha sido editado correctamente",
                    icon: "success",
                    button: "Volver!",
                }).then(function () {
                    window.location = "/delivery/producto/plist";
                });
            })
        }

        $scope.tipoProductoRefresh = function (f, consultar) {
            var form = f;
            if (consultar) {
                $http({
                    method: 'GET',
                    url: 'json?ob=tipoproducto&op=get&id=' + $scope.obj_tipoProducto.id
                }).then(function (response) {
                    $scope.obj_tipoProducto = response.data.message;
                    form.userForm.obj_tipoProducto.$setValidity('valid', true);
                }, function (response) {
                    //$scope.status = response.status;
                    form.userForm.obj_tipoProducto.$setValidity('valid', false);
                });
            } else {
                form.userForm.obj_tipoProducto.$setValidity('valid', true);
            }
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

        $scope.uploadFile = function (nombreFoto) {
            //Solucion mas cercana
            //https://stackoverflow.com/questions/37039852/send-formdata-with-other-field-in-angular
            var file = $scope.myFile;
            //Cambiar el nombre del archivo
            //https://stackoverflow.com/questions/30733904/renaming-a-file-object-in-javascript
            file = new File([file], nombreFoto, {type: file.type});
            console.log(file)
            //Api FormData 
            //https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/FormData
            var oFormData = new FormData();
            oFormData.append('file', file);
            $http({
                headers: {'Content-Type': undefined},
                method: 'POST',
                data: oFormData,
                url: `json?ob=producto&op=loadimage`
            })
            /*.then(function (response) {
             console.log(response);
             }, function (response) {
             console.log(response);
             });*/
        };
    }]).directive('fileModel', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;

                element.bind('change', function () {
                    scope.$apply(function () {
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        }
    }]);
