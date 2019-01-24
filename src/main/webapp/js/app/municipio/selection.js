'use strict'
moduleComponent.component('municipioSelection', {
    templateUrl: 'js/app/municipio/selection.html',
    controllerAs: 'c',
    controller: cController,
    bindings: {
        obj: '=',
        onMunicipioSet: '&'
    },
});

function cController($http) {
    var self = this;
    self.ob = "municipio";
    self.page = 1;
    self.totalPages = 1;
    self.orderURLServidor = "";
    self.rpp = 100;
   



    $http({
        method: 'GET',
        url: 'json?ob=' + self.ob + '&op=getcount'
    }).then(function (response) {
        self.status = response.status;
        self.ajaxDataUsuariosNumber = response.data.message;
        self.totalPages = Math.ceil(self.ajaxDataUsuariosNumber / self.rpp);
        if (self.page > self.totalPages) {
            self.page = self.totalPages;
        }
    }, function (response) {
        self.ajaxDataUsuariosNumber = response.data.message || 'Request failed';
        self.status = response.status;
    });

    $http({
        method: 'GET',
        url: 'json?ob=' + self.ob + '&op=getpage&rpp=' + self.rpp + '&page=' + self.page + self.orderURLServidor
    }).then(function (response) {
        self.status = response.status;
        self.data = response.data.message;
    }, function (response) {
        self.status = response.status;
        self.data = response.data.message || 'Request failed';
    });

    self.save = function (id, poblacion) {
        self.obj.id = id;
        self.obj.poblacion = poblacion;
        self.onMunicipioSet();
    };


}



