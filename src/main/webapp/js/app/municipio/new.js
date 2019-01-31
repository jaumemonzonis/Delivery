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
                poblacion: $scope.poblacion,
                id_area: $scope.obj_area.id
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



  $scope.areaRefresh = function (f, consultar) {
            var form = f;
            if (consultar) {
                $http({
                    method: 'GET',
                    url: 'json?ob=area&op=get&id=' + $scope.obj_area.id
                }).then(function (response) {
                    $scope.obj_area = response.data.message;
                    //$scope.poblacion= response.data.message.poblacion;
                    form.userForm.obj_area.$setValidity('valid', true);
                }, function (response) {
                    form.userForm.obj_area.$setValidity('valid', false);
                });
            } else {
                form.userForm.obj_area.$setValidity('valid', true);
            }
        };
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