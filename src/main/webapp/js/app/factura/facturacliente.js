
'use strict'
//http://localhost:8081/json?ob=usuario&op=login&user=ddd&pass=pass
moduleFactura.controller('facturaClienteController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService',
    function ($scope, $http, $location, toolService, $routeParams, sessionService) {

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
        if (!$routeParams.id) {
            $scope.id = 1;
        } else {
            $scope.id = $routeParams.id;
        }
        $scope.ob = "factura";

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

            $scope.update = function () {
                $location.url(`factura/facturacliente/` + $scope.rpp + `/` + $scope.page + `/` + $scope.id);
            }

            $scope.resetOrder = function () {
                $location.url($scope.ob + `/facturacliente/` + $scope.rpp + `/` + $scope.page + `/` + $scope.id);
                $scope.reverse = false;
                $scope.propertyName = 'fecha';
            }

//            $scope.ordena = function (order, align) {
//                if ($scope.orderURLServidor == "") {
//                    $scope.orderURLServidor = "&order=" + order + "," + align;
//                    $scope.orderURLCliente = order + "," + align;
//                } else {
//                    $scope.orderURLServidor = $scope.orderURLServidor + "-" + order + "," + align;
//                    $scope.orderURLCliente = $scope.orderURLCliente + "-" + order + "," + align;
//                }
//                $location.url($scope.ob + `/facturacliente/` + $scope.rpp + `/` + $scope.page + `/` + $scope.id + `/` + $scope.orderURLCliente);
//            }

            $scope.propertyName = 'fecha';
            $scope.reverse = false;
            $scope.sortBy = function (propertyName) {
                $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                $scope.propertyName = propertyName;
            };


            $http({
                method: 'GET',
                url: 'json?ob=factura&op=getcountx&idajena=' + $routeParams.id
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDataUsuariosNumber = response.data.message;
                $scope.totalPages = Math.ceil($scope.ajaxDataUsuariosNumber / $scope.rpp);
                if ($scope.page > $scope.totalPages) {
                    $scope.page = $scope.totalPages;
                    $scope.update();
                }
                pagination2();
            }, function (response) {
                $scope.ajaxDataUsuariosNumber = response.data.message || 'Request failed';
                $scope.status = response.status;
            });


            $http({
                method: 'GET',
                url: 'json?ob=factura&op=getpagex&idajena=' + $routeParams.id + '&rpp=' + $scope.rpp + '&page=' + $scope.page + $scope.orderURLServidor
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDataFactura = response.data.message;
            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxDataFactura = response.data.message || 'Request failed';
            });
            $scope.volver = function () {
                $location.url(`home`);
            };
            $scope.isActive = toolService.isActive;
        }
        $scope.linea = function (id) {
            $location.url(`linea/lineacliente/10/1/${id}`);
        }

        function pagination2() {
            $scope.list2 = [];
            $scope.neighborhood = 3;
            for (var i = 1; i <= $scope.totalPages; i++) {
                if (i === $scope.page) {
                    $scope.list2.push(i);
                } else if (i <= $scope.page && i >= ($scope.page - $scope.neighborhood)) {
                    $scope.list2.push(i);
                } else if (i >= $scope.page && i <= ($scope.page - -$scope.neighborhood)) {
                    $scope.list2.push(i);
                } else if (i === ($scope.page - $scope.neighborhood) - 1) {
                    $scope.list2.push("...");
                } else if (i === ($scope.page - -$scope.neighborhood) + 1) {
                    $scope.list2.push("...");
                }
            }
        }
    }
]);
