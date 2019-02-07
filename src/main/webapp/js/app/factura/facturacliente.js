
'use strict'
//http://localhost:8081/json?ob=usuario&op=login&user=ddd&pass=pass
moduleFactura.controller('facturaClienteController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService',
    function ($scope, $http, $location, toolService, $routeParams, sessionService) {

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
    }
]);
