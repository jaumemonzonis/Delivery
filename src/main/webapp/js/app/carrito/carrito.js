
'use strict'

moduleCarrito.controller('carritoCarritoController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService', "$window",
    function ($scope, $http, $location, toolService, $routeParams, sessionService, $window) {
        
// HEADER //

        $scope.loggeduser = sessionService.getUserName();
        $scope.loggeduserid = sessionService.getId();
        $scope.logged = sessionService.isSessionActive();
        $scope.tipousuarioID = sessionService.getTypeUserID();
        $scope.isActive = toolService.isActive;
        $scope.limpiar = sessionService.isSessionActive();


        $scope.productos = function () {
            if ($scope.logged === true) {
                $location.url(`carrito/plist_burger`);
            } else {
                $location.url(`usuario/login`);
            }
        };

        $scope.locales = function () {
            if ($scope.logged === true) {
                $location.url(`carrito/locales`);
            } else {
                $location.url(`usuario/login`);
            }
        };

        $scope.empresa = function () {
            if ($scope.logged === true) {
                $location.url(`carrito/empresa`);
            } else {
                $location.url(`usuario/login`);
            }
        };

        $scope.contacto = function () {
            if ($scope.logged === true) {
                $location.url(`carrito/contacto`);
            } else {
                $location.url(`usuario/login`);
            }
        };

        // HEADER//
        


        $scope.alert = false;
        $scope.factura = false;

        $scope.miFormato = function (valor) {
            return isNaN(valor) ? valor : parseFloat(valor).toFixed(2);
        };

        $http({
            method: 'GET',
            url: 'json?ob=carrito&op=show'
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxData = response.data.message;
        }, function (response) {
            $scope.status = response.status;
            $scope.ajaxData = response.data.message || 'Request failed';
        });





        function show() {

            $http({
                method: 'GET',
                url: 'json?ob=carrito&op=show'
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxData = response.data.message;
                if ($scope.ajaxData === "Carrito vacio") {

                    $scope.alert = true;
                }



            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxData = response.data.message || 'Request failed';
            });
        }



        $scope.add = function (id) {

            $http({
                method: 'GET',
                url: 'json?ob=carrito&op=add&prod=' + id
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDataAdd = response.data.message;
                show();

            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxDataAdd = response.data.message || 'Request failed';
            });
        };

        $scope.reduce = function (id) {

            $http({
                method: 'GET',
                url: 'json?ob=carrito&op=reduce&prod=' + id
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDataReduce = response.data.message;
                show();
            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxDataReduce = response.data.message || 'Request failed';
            });
        };


        $scope.empty = function () {
            swal({
                title: "VACIO",
                text: "Tu pedido ha sido eliminado correctamente",
                icon: "success",
                button: "Volver!",
            }).then(function () {
                window.location = "/delivery/carrito/plist_burger";
            });

            $http({
                method: 'GET',
                url: 'json?ob=carrito&op=empty'
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDataEmpty = response.data.message;
          
                $scope.alert = true;

            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxDataEmpty = response.data.message || 'Request failed';
            });

        };


        $scope.propertyName = 'nombre';
        $scope.reverse = false;
        $scope.sortBy = function (propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };



        $scope.isActive = toolService.isActive;

        $scope.volver = function () {
            $window.history.back();
        }
        $scope.seleccion_op = function () {

            $location.url(`carrito/opcion`);
        };

    }



]);