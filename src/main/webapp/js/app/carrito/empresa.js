
'use strict'

moduleCarrito.controller('empresaCarritoController', ['$scope', "$window",
    function ($scope, $window) {


        $scope.volver = function () {
            $window.history.back();
        }

    }



]);