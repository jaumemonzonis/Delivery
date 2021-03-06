'use strict'

moduleMunicipio.controller('municipioplistxusuarioController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService', '$window',
    function ($scope, $http, $location, toolService, $routeParams, sessionService, $window) {

        $scope.ob = "municipio";
        $scope.totalPages = 1;

        $scope.tipousuarioID = sessionService.getTypeUserID();
        console.log($scope.tipousuarioID);


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
        }

  $scope.resetOrder = function () {
            $location.url($scope.ob + `/plistxusuario/` + $scope.rpp + `/` + $scope.page + `/` + $scope.id);
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
            $location.url($scope.ob + `/edit/${id}/` + $scope.id);
        }
//
//        $scope.ordena = function (order, align) {
//            if ($scope.orderURLServidor == "") {
//                $scope.orderURLServidor = "&order=" + order + "," + align;
//                $scope.orderURLCliente = order + "," + align;
//            } else {
//                $scope.orderURLServidor = $scope.orderURLServidor + "-" + order + "," + align;
//                $scope.orderURLCliente = $scope.orderURLCliente + "-" + order + "," + align;
//            }
//            $location.url($scope.ob + `/plistxusuario/` + $scope.rpp + `/` + $scope.page + `/` + $scope.id + `/` + $scope.orderURLCliente);
//        }

       $scope.propertyName = 'id';
        $scope.reverse = false;
        $scope.sortBy = function (propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };
        $scope.vacio = false;
        //getcount
        $http({
            method: 'GET',
            url: 'json?ob=municipio&op=getcountx&idajena=' + $routeParams.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataUsuariosNumber = response.data.message;
//            if ($scope.ajaxDataUsuariosNumber === 0) {
//                $scope.vacio=true;
//            }

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
            url: 'json?ob=municipio&op=getpagex&idajena=' + $routeParams.id + '&rpp=' + $scope.rpp + '&page=' + $scope.page + $scope.orderURLServidor
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataUsuarios = response.data.message;

        }, function (response) {
            $scope.status = response.status;
            $scope.ajaxDataUsuarios = response.data.message || 'Request failed';
        });

        $http({
            method: 'GET',
            url: 'json?ob=area&op=get&id=' + $scope.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.nombre2 = response.data.message.nombre;

        }, function (response) {
            $scope.status = response.status;

        });

        $scope.update = function () {
            $location.url($scope.ob + `/plistxusuario/` + $scope.rpp + `/` + $scope.page + `/` + $scope.id + `/` + $scope.orderURLCliente);
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

        $scope.isActive = toolService.isActive;
        $scope.openModal = function () {

        }
        $scope.volver = function () {
            $window.history.back();
        };

    }
]);
