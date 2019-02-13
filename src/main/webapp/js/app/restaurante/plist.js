
'use strict'

moduleRestaurante.controller('restaurantePlistController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService',
    function ($scope, $http, $location, toolService, $routeParams, sessionService) {
        $scope.ob = "restaurante";


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


//        $scope.ordena = function (order, align) {
//            if ($scope.orderURLServidor == "") {
//                $scope.orderURLServidor = "&order=" + order + "," + align;
//                $scope.orderURLCliente = order + "," + align;
//            } else {
//                $scope.orderURLServidor = $scope.orderURLServidor + "-" + order + "," + align;
//                $scope.orderURLCliente = $scope.orderURLCliente + "-" + order + "," + align;
//            }
//            $location.url($scope.ob + `/plist/` + $scope.rpp + `/` + $scope.page + `/` + $scope.orderURLCliente);
//        }
        $scope.propertyName = 'id';
        $scope.reverse = true;
        $scope.sortBy = function (propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };
        //getcount
        $http({
            method: 'GET',
            url: 'json?ob=' + $scope.ob + '&op=getcount'
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
            url: 'json?ob=' + $scope.ob + '&op=getpage&rpp=' + $scope.rpp + '&page=' + $scope.page + $scope.orderURLServidor
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataUsuarios = response.data.message;
        }, function (response) {
            $scope.status = response.status;
            $scope.ajaxDataUsuarios = response.data.message || 'Request failed';
        });

        $scope.update = function () {
            $location.url($scope.ob + `/plist/` + $scope.rpp + `/` + $scope.page + '/' + $scope.orderURLCliente);
        }

        //paginacion neighbourhood
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

        $scope.zona = function (id) {
            $location.url(`zona/plist/10/1/${id}`);
        }
         $scope.resetOrder = function () {
            $location.url($scope.ob + `/plist/` + $scope.rpp + `/` + $scope.page);
            $scope.reverse = false;
            $scope.propertyName = 'id';
        };
        $scope.view = function (id) {
            $location.url($scope.ob + `/view/${id}`);
        }

        $scope.remove = function (id) {
            $location.url($scope.ob + `/remove/${id}`);
        }

        $scope.edit = function (id) {
            $location.url($scope.ob + `/edit/${id}`);
        }
        $scope.isActive = toolService.isActive;

    }



]);
