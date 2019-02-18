"use strict";

moduleTipousuario.controller('tipousuarioNewController', ['$scope', '$http', '$location', 'toolService', '$routeParams', '$window','sessionService',
    function ($scope, $http, $location, toolService, $routeParams, $window, sessionService) {

        $scope.ob = "tipousuario";
        $scope.id = null;
        
        if (sessionService.getUserName() !== "") {
            $scope.loggeduser = sessionService.getUserName();
            $scope.loggeduserid = sessionService.getId();
            $scope.logged = true;
            $scope.tipousuarioID = sessionService.getTypeUserID();
        }
        $scope.isActive = toolService.isActive;

        $scope.update = function () {
         
            var json = {
                id: null,
                desc: $scope.desc
            }
            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=' + $scope.ob + '&op=create',
                params: {json: JSON.stringify(json)}
            }).then(function (response) {
                   swal({
                    title: "GUARDADO",
                    text: "El tipo de usuario "+$scope.desc+" ha sido guardado correctamente",
                    icon: "success",
                    button: "Volver!",
                }).then(function () {
                    window.location = "/delivery/tipousuario/plist";
                });
            }), function (response) {
                console.log(response);
                $scope.error = true;
            }
        }

        $scope.volver = function () {
            $window.history.back();
        }
        
    }
]);