'use strict'

moduleCarrito.controller('carritoOpcionController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService', "$window",
    function ($scope, $http, $location, toolService, $routeParams, sessionService, $window) {


  
         $scope.alert = false;


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



        $scope.isActive = toolService.isActive;

        $scope.domicilio = function () {
            $location.url(`carrito/domicilio`);
        };
        $scope.local = function () {
            $location.url(`carrito/restaurante`);
        };
        
        $scope.volver = function () {
            $window.history.back();
        }

    }



]);