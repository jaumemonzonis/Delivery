"use strict";

moduleMunicipio.controller("municipioNewController", [
    "$scope",
    "$http",
    "$routeParams",
    "toolService",
    'sessionService',
    '$window',
    function ($scope, $http, $routeParams, toolService, sessionService,$window) {

        $scope.visualizar = false;
        $scope.logged = false;

       
        $scope.id = null;
        
    
        $scope.mostrar = false;
        $scope.activar = true;
        $scope.ajaxData = "";

  


        $scope.isActive = toolService.isActive;

        $scope.update = function () {
        


            var json = {
                id: null,
                poblacion: $scope.poblacion
            }

            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=municipio&op=create',
                params: {json: JSON.stringify(json)}
            }).then(function () {
                $scope.visualizar = true;
            })
        }



        $scope.volver = function () {
            $window.history.back();
        }
        
        $scope.close = function () {
            $location.path('/home');
        };
        $scope.plist = function () {
            $location.path('/' + $scope.ob + '/plist');
        };
       
    }]);