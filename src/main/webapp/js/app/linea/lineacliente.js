
'use strict'
//http://localhost:8081/json?ob=usuario&op=login&user=ddd&pass=pass
moduleLinea.controller('lineaclienteController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService','$window',
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
        
        $scope.totalPages = 1;
        $scope.ob = "linea";
        if (!$routeParams.id) {
            $scope.id = 1;
        } else {
            $scope.id = $routeParams.id;
        }


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

            $http({
                method: 'GET',
                url: 'json?ob=' + $scope.ob + '&op=getpagex&rpp=' + $scope.rpp + '&page=' + $scope.page + '&idajena=' + $scope.id + $scope.orderURLServidor
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDataLinea = response.data.message;

            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxDataLinea = response.data.message || 'Request failed';
            });

            $http({
                method: 'GET',
                url: 'json?ob=factura&op=get&id=' + $scope.id
            }).then(function (response) {
                $scope.status = response.status;
                $scope.idfactura = response.data.message.id;

            }, function (response) {
                $scope.status = response.status;

            });

            $scope.propertyName = 'cantidad';
            $scope.reverse = true;
            $scope.sortBy = function (propertyName) {
                $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                $scope.propertyName = propertyName;
            };

            $scope.volver = function () {
            $window.history.back();
        }
            $scope.isActive = toolService.isActive;
        }


    }
]);
