"use strict";

moduleTipoproducto.controller("tipoproductoRemoveController", [
    "$scope",
    "$http",
    "$routeParams",
    "toolService",
    "$window",
    'sessionService',
    function ($scope, $http, $routeParams, toolService, $window,sessionService) {

        $scope.ob = "tipoproducto";
            $scope.tabla = true;
        $scope.msgopcioneliminar = true;
        
//        if (sessionService.getUserName() !== "") {
//            $scope.loggeduser = sessionService.getUserName();
//            $scope.loggeduserid = sessionService.getId();
//            $scope.logged = true;
//            $scope.tipousuarioID = sessionService.getTypeUserID();
//        }
        if (!$routeParams.id) {
            $scope.id = 1;
        } else {
            $scope.id = $routeParams.id;
        }

        $http({
            method: 'GET',
            url: 'json?ob=' + $scope.ob + '&op=get&id=' + $scope.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataUsuarios = response.data.message;
        }, function (response) {
            $scope.status = response.status;
            $scope.ajaxDataUsuarios = response.data.message || 'Request failed';
        });



       $scope.eliminar = function () {

            swal({
                title: "Estas seguro?",
                text: "Una vez eliminado, no podras recuperar la información!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                    .then((willDelete) => {
                        if (willDelete) {

                            $http({
                                method: 'GET',
                                url: 'json?ob=' + $scope.ob + '&op=remove&id=' + $scope.id
                            }).then(function (response) {
                                $scope.eliminarok = true;
                                $scope.msgopcioneliminar = false;
                                $scope.eliminarerror = false;
                                $scope.tabla = false;
                                $scope.status = response.status;
                                $scope.ajaxDatoTipousuario = response.data.message;
                            }, function (response) {
                                $scope.ajaxDatoTipousuario = response.data.message || 'Request failed';
                                $scope.status = response.status;
                            });

                            swal("El campo ha sido eliminado correctamente!", {
                                icon: "success",
                                 timer: 5000
                            });
                        } else {
                             swal("El campo no se ha borrado!", {
                               
                                 timer: 5000
                            });
                        }
                    });


        };


        $scope.volver = function () {
            $window.history.back();
        }
        
    }

]);
