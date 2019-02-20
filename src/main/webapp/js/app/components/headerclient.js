moduloDirectivas.component('headerclientComponent', {
    templateUrl: 'js/app/components/headerclient.html',
    bindings: {
    },
    controllerAs: 'c',
    controller: js
});


function js(toolService, sessionService, $http, $route,$location) {
    var self = this;


   self.loggeduser = sessionService.getUserName();
    self.loggeduserid = sessionService.getId();
    self.logged = sessionService.isSessionActive();
    self.tipousuarioID = sessionService.getTypeUserID();
    self.isActive = toolService.isActive;
    self.limpiar = sessionService.isSessionActive();

        
        self.productos = function () {
           if (self.logged === true){
            $location.url(`carrito/plist_burger`);
        } else {
            $location.url(`usuario/login`);
        }
        };
        
          self.locales = function () {
           if (self.logged === true){
            $location.url(`carrito/locales`);
        } else {
            $location.url(`usuario/login`);
        }
        };
        
             self.empresa = function () {
           if (self.logged === true){
            $location.url(`carrito/empresa`);
        } else {
            $location.url(`usuario/login`);
        }
        };
        
               self.contacto = function () {
           if (self.logged === true){
            $location.url(`carrito/contacto`);
        } else {
            $location.url(`usuario/login`);
        }
        };
        
}