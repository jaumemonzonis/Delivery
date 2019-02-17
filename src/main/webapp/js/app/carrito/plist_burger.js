'use strict'

moduleCarrito.controller('carritoPlistBurgerController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService', "$window",
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

        function count() {
            $http({
                method: 'GET',
                url: 'json?ob=carrito&op=count'
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDataCount = response.data.message;

            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxDataCount = response.data.message || 'Request failed';
            });
        }
        ;
        count();
        $scope.idTipousuario = sessionService.getTypeUserID();
        $scope.comprar = function (id) {


            $http({
                method: 'GET',
                url: 'json?ob=carrito&op=add&prod=' + id
            }).then(function (response) {
                $scope.alert = false;

                $scope.status = response.status;
                $scope.ajaxDataAdd = response.data.message;
                if ($scope.status == 400) {
                    $scope.stock = true;
                }
                count();
            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxDataAdd = response.data.message || 'Request failed';
            });

            //animacion

//            https://css-tricks.com/animations-the-angular-way/

        };
        $scope.isActive = false;
        $scope.activeButton = function () {
            $scope.isActive = !$scope.isActive;
        }
        $scope.idTipoproducto = 1;


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
            $location.url(`carrito/plist_varios`);
        };
        $scope.volver = function () {
            $window.history.back();
        }

        $scope.shop = function () {

            $('.add-to-cart').on('click', function () {

                var cart = $('.shopping-cart');
                var imgtodrag = $(this).parent('.item').find("img").eq(0);
                if (imgtodrag) {
                    var imgclone = imgtodrag.clone()
                            .offset({
                                top: imgtodrag.offset().top,
                                left: imgtodrag.offset().left
                            })
                            .css({
                                'opacity': '0.5',
                                'position': 'absolute',
                                'height': '350px',
                                'width': '350px',
                                'z-index': '100'
                            })
                            .appendTo($('body'))
                            .animate({
                                'top': cart.offset().top + 50,
                                'left': cart.offset().left + 10,
                                'width': 75,
                                'height': 75
                            }, 1000, 'easeInOutExpo');

                    setTimeout(function () {
                        cart.effect("shake", {
                            times: 1
                        }, 200);
                    }, 500);

                    imgclone.animate({
                        'width': 0,
                        'height': 0
                    }, function () {
                        $(this).detach();
                    });
                }
            });
        };
    }



]);