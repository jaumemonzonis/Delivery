'use strict'

moduleCarrito.controller('carritoPlistVariosController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService', "$window",
    function ($scope, $http, $location, toolService, $routeParams, sessionService, $window) {

        $scope.totalPages = 1;
        $scope.conectado = false;
        $scope.alert = false;


        if (!$routeParams.order) {
            $scope.orderURLServidor = "";
            $scope.orderURLCliente = "";
        } else {
            $scope.orderURLServidor = "&order=" + $routeParams.order;
            $scope.orderURLCliente = $routeParams.order;
        }

        if (!$routeParams.rpp) {
            $scope.rpp = "10";
        } else {
            $scope.rpp = $routeParams.rpp;
        }

        if (!$routeParams.page) {
            $scope.page = 1;
        } else {
            if ($routeParams.page >= 1) {
                $scope.page = $routeParams.page;
            } else {
                $scope.page = 1;
            }
        }

        $http({
            method: 'GET',
            url: 'json?ob=carrito&op=show'
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataShow = response.data.message;
            if ($scope.ajaxDataShow === "Carrito vacio") {
                $scope.alert = true;
            }
        }, function (response) {
            $scope.status = response.status;
            $scope.ajaxDataShow = response.data.message || 'Request failed';
        });



//        $scope.idTipousuario = sessionService.getTypeUserID();
        $scope.comprar = function (id) {


            $http({
                method: 'GET',
                url: 'json?ob=carrito&op=add&prod=' + id
            }).then(function (response) {
                $scope.status = response.status;
                $scope.alert = false;
                if ($scope.status == 400) {
                    $scope.stock = true;
                }
                $scope.ajaxDataAdd = response.data.message;
            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxDataAdd = response.data.message || 'Request failed';
            });

            //animacion

//            https://css-tricks.com/animations-the-angular-way/

        };

        $scope.idTipoproducto = 3;


        $http({
            method: 'GET',
            url: 'json?ob=producto&op=getpagex&rpp=' + $scope.rpp + '&page=' + $scope.page + '&idajena=' + $scope.idTipoproducto + $scope.orderURLServidor
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxData = response.data.message;
        }, function (response) {
            $scope.status = response.status;
            $scope.ajaxData = response.data.message || 'Request failed';
        });


        $scope.carrito = function () {
            $location.url(`carrito/carrito`);
        };

        $scope.isActive = toolService.isActive;

        $scope.avanzar = function () {

            $location.url(`carrito/plist_bebida`);
        };
        $scope.volver = function () {
            $window.history.back();
        }

    }



]);