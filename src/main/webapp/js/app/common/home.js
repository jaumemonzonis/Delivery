'use strict'

moduleCommon.controller('homeController', ['$scope', '$location', 'toolService', 'sessionService',
    function ($scope, $location, toolService, sessionService) {

        $scope.ruta = $location.path();
        $scope.isActive = toolService.isActive;
         
         var logged= sessionService.isSessionActive();

       $scope.productos = function () {
           if (logged === true){
            $location.url(`carrito/plist_burger`);
        } else {
            $location.url(`usuario/login`);
        }
        };

    }]);
