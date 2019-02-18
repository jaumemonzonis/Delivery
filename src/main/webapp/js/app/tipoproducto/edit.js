"use strict";

moduleTipoproducto.controller("tipoproductoEditController", [
    "$scope",
    "$http",
    "$routeParams",
    "toolService",
    "$window",
    'sessionService',
    function ($scope, $http, $routeParams, toolService, $window,sessionService) {

        $scope.ob = "tipoproducto";
//         if (sessionService.getUserName() !== "") {
//            $scope.loggeduser = sessionService.getUserName();
//            $scope.loggeduserid = sessionService.getId();
//            $scope.logged = true;
//            $scope.tipousuarioID = sessionService.getTypeUserID();
//        }

        if (!$routeParams.id) {
            $scope.id = 1;
        } else {
            $scope.id = $routeParams.id;
        }

        $http({
            method: "GET",
            url: 'json?ob=' + $scope.ob + '&op=get&id=' + $scope.id
        }).then(function (response) {
            console.log(response);
            $scope.id = response.data.message.id;
            $scope.desc = response.data.message.desc;

        }), function (response) {
            console.log(response);
        };

        $scope.isActive = toolService.isActive;

        $scope.update = function () {
   
            $scope.error = false;
            var json = {
                id: $scope.id,

                desc: $scope.desc,

            }
            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=' + $scope.ob + '&op=update',
                params: {json: JSON.stringify(json)}
            }).then(function (response) {
                console.log(response);
             swal({
                    title: "GUARDADO",
                    text: "El tipo producto "+$scope.desc+" ha sido editado correctamente",
                    icon: "success",
                    button: "Volver!",
                }).then(function () {
                    window.location = "/delivery/tipoproducto/plist";
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
