
'use strict'

moduleCarrito.controller('contactoCarritoController', ['$scope', "$window",
    function ($scope, $window) {


        $scope.volver = function () {
            $window.history.back();
        }

    }



]);