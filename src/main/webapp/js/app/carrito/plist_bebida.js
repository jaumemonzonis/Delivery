'use strict'

moduleCarrito.controller('carritoPlistBebidaController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService',"$window",
    function ($scope, $http, $location, toolService, $routeParams, sessionService, $window) {

        $scope.totalPages = 1;
        $scope.conectado = false;


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

        $scope.stock = false;
        $scope.idTipousuario = sessionService.getTypeUserID();
        $scope.comprar = function (id) {

            if ($scope.idTipousuario !== 2) {
                $location.url('/usuario/login');

            } else {
                $http({
                    method: 'GET',
                    url: 'json?ob=carrito&op=add&prod=' + id
                }).then(function (response) {
                    $scope.status = response.status;

                    if ($scope.status == 400) {

                        $scope.stock = true;
                    }

                    $scope.ajaxDataAdd = response.data.message;
                    show();
                }, function (response) {
                    $scope.status = response.status;
                    $scope.ajaxDataAdd = response.data.message || 'Request failed';
                });

                //animacion

//            https://css-tricks.com/animations-the-angular-way/




            }
            ;
        };

        $scope.idTipoproducto = 2;


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
              $location.url(`carrito/plist_postre`);
        };
        $scope.volver = function () {
            $window.history.back();
        }

    }



]);