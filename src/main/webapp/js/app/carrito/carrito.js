
'use strict'

moduleCarrito.controller('carritoCarritoController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService', "$window",
    function ($scope, $http, $location, toolService, $routeParams, sessionService, $window) {



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
            $http({
                method: 'GET',
                url: 'json?ob=carrito&op=empty'
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDataEmpty = response.data.message;
                show();
                $scope.alert = true;
            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxDataEmpty = response.data.message || 'Request failed';
            });

        };


//     $scope.buy = function () {
//            $location.url(`carrito/restaurante`);
//        }



        $scope.isActive = toolService.isActive;

        $scope.volver = function () {
            $window.history.back();
        }
         $scope.seleccion_op = function () {
            
             $location.url(`carrito/opcion`);
        };

    }



]);