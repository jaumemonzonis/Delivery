var autenticacionAdministrador = function ($q, $location, $http, sessionService) {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'json?ob=usuario&op=check'
    }).then(function (response) {
        if (response.data.message.obj_tipoUsuario.id === 1) {
            sessionService.setSesion(response.data.message);
            sessionService.setSessionActive(response.data.message);
            sessionService.setUserName(response.data.message.nombre + " " + response.data.message.ape1);
            sessionService.setId(response.data.message.id);
            //sessionService.setSesion(response.data.message);
            //sessionService.setAdmin();
            sessionService.setTypeUserID(response.data.message.obj_tipoUsuario.id);
            deferred.resolve();
        } else {
            $location.path('/home');
        }
    }, function (response) {
        sessionService.setSessionInactive();
        $location.path('/home');
    });
    return deferred.promise;
}

var autenticacionUsuario = function ($q, $location, $http, sessionService) {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'json?ob=usuario&op=check'
    }).then(function (response) {
        if (response.data.message.obj_tipoUsuario.id === 2) {
            sessionService.setSesion(response.data.message);
            sessionService.setSessionActive();
            sessionService.setUserName(response.data.message.nombre + " " + response.data.message.ape1);
            sessionService.setId(response.data.message.id);
            //sessionService.setSesion(response.data.message);
            sessionService.setTypeUserID(response.data.message.obj_tipoUsuario.id);
            deferred.resolve();
        } else {
            $location.path('/home');
        }
    }, function (response) {
        $location.path('/home');
    });
    return deferred.promise;

}

//var autenticacionHome = function ($q, $location, $http, sessionService) {
//    var deferred = $q.defer();
//    $http({
//        method: 'GET',
//        url: 'json?ob=usuario&op=check'
//    }).then(function (response) {
//        if (response.data.message.obj_tipoUsuario.id === 2) {
//            sessionService.setSesion(response.data.message);
//            sessionService.setSessionActive();
//            sessionService.setUserName(response.data.message.nombre + " " + response.data.message.ape1);
//            sessionService.setId(response.data.message.id);
//            //sessionService.setSesion(response.data.message);
//            sessionService.setTypeUserID(response.data.message.obj_tipoUsuario.id);
//            deferred.resolve();
//        } else if (response.data.message.obj_tipoUsuario.id === 1){
//            sessionService.setSesion(response.data.message);
//            sessionService.setSessionActive(response.data.message);
//            sessionService.setUserName(response.data.message.nombre + " " + response.data.message.ape1);
//            sessionService.setId(response.data.message.id);
//            //sessionService.setSesion(response.data.message);
//            //sessionService.setAdmin();
//            sessionService.setTypeUserID(response.data.message.obj_tipoUsuario.id);
//            deferred.resolve();
//
//        } else {
//             $location.path('/home');
//        }
//    }, function (response) {
//        $location.path('/home');
//           deferred.resolve();
//    });
//    return deferred.promise;
//
//}



delivery.config(['$routeProvider', function ($routeProvider) {

        //HOME
        $routeProvider.when('/', {templateUrl: 'js/app/common/home.html', controller: 'homeController'});


        //USUARIO
        $routeProvider.when('/usuario/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/usuario/plist.html', controller: 'usuarioPlistController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/usuario/view/:id', {templateUrl: 'js/app/usuario/view.html', controller: 'usuarioViewController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/usuario/viewusuariocliente/:id', {templateUrl: 'js/app/usuario/viewusuariocliente.html', controller: 'viewusuarioclienteController', resolve: {auth: autenticacionUsuario}});
        $routeProvider.when('/usuario/new', {templateUrl: 'js/app/usuario/new.html', controller: 'usuarioNewController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/usuario/edit/:id', {templateUrl: 'js/app/usuario/edit.html', controller: 'usuarioEditController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/usuario/remove/:id', {templateUrl: 'js/app/usuario/remove.html', controller: 'usuarioRemoveController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/usuario/editpass/:id', {templateUrl: 'js/app/usuario/editpass.html', controller: 'usuarioEditpassController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/usuario/cambiarpasscliente/:iduser', {templateUrl: 'js/app/usuario/cambiarpasscliente.html', controller: 'cambiarpassclienteController', resolve: {auth: autenticacionUsuario}});
        $routeProvider.when('/usuario/login', {templateUrl: 'js/app/usuario/login.html', controller: 'usuarioLoginController'});
        $routeProvider.when('/usuario/logout', {templateUrl: 'js/app/usuario/logout.html', controller: 'usuarioLogoutController'});
        $routeProvider.when('/usuario/registrarse', {templateUrl: 'js/app/usuario/registrarse.html', controller: 'usuarioRegistrarseController'});

        //TIPOUSUARIO
        $routeProvider.when('/tipousuario/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/tipousuario/plist.html', controller: 'tipousuarioPlistController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/tipousuario/view/:id', {templateUrl: 'js/app/tipousuario/view.html', controller: 'tipousuarioViewController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/tipousuario/edit/:id?', {templateUrl: 'js/app/tipousuario/edit.html', controller: 'tipousuarioEditController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/tipousuario/remove/:id', {templateUrl: 'js/app/tipousuario/remove.html', controller: 'tipousuarioRemoveController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/tipousuario/new', {templateUrl: 'js/app/tipousuario/new.html', controller: 'tipousuarioNewController', resolve: {auth: autenticacionAdministrador}});

        //TIPOPRODUCTO
        $routeProvider.when('/tipoproducto/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/tipoproducto/plist.html', controller: 'tipoproductoPlistController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/tipoproducto/remove/:id', {templateUrl: 'js/app/tipoproducto/remove.html', controller: 'tipoproductoRemoveController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/tipoproducto/view/:id?', {templateUrl: 'js/app/tipoproducto/view.html', controller: 'tipoproductoViewController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/tipoproducto/new', {templateUrl: 'js/app/tipoproducto/new.html', controller: 'tipoproductoNewController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/tipoproducto/edit/:id', {templateUrl: 'js/app/tipoproducto/edit.html', controller: 'tipoproductoEditController', resolve: {auth: autenticacionAdministrador}});

        //PRODUCTO
        $routeProvider.when('/producto/new', {templateUrl: 'js/app/producto/new.html', controller: 'productoNewController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/producto/edit/:id', {templateUrl: 'js/app/producto/edit.html', controller: 'productoEditController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/producto/remove/:id', {templateUrl: 'js/app/producto/remove.html', controller: 'productoRemoveController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/producto/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/producto/plist.html', controller: 'productoPlistController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/producto/view/:id?', {templateUrl: 'js/app/producto/view.html', controller: 'productoViewController'});

        //LINEA
        $routeProvider.when('/linea/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/linea/plist.html', controller: 'lineaPlistController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/linea/view/:id', {templateUrl: 'js/app/linea/view.html', controller: 'lineaViewController'});
        $routeProvider.when('/linea/remove/:id', {templateUrl: 'js/app/linea/remove.html', controller: 'lineaRemoveController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/linea/edit/:id', {templateUrl: 'js/app/linea/edit.html', controller: 'lineaEditController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/linea/new', {templateUrl: 'js/app/linea/new.html', controller: 'lineaNewController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/linea/plistxusuario/:rpp?/:page?/:id?/:order?', {templateUrl: 'js/app/linea/plistxusuario.html', controller: 'lineaplistxusuarioController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/linea/newxusuario/:id', {templateUrl: 'js/app/linea/newxusuario.html', controller: 'lineanewxusuarioController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/linea/lineacliente/:rpp?/:page?/:id?/:order?', {templateUrl: 'js/app/linea/lineacliente.html', controller: 'lineaclienteController', resolve: {auth: autenticacionUsuario}});
        //FACTURA
        $routeProvider.when('/factura/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/factura/plist.html', controller: 'facturaPlistController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/factura/plistxusuario/:rpp?/:page?/:id?/:order?', {templateUrl: 'js/app/factura/plistxusuario.html', controller: 'facturaplistxusuarioController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/factura/remove/:id', {templateUrl: 'js/app/factura/remove.html', controller: 'facturaRemoveController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/factura/view/:id?', {templateUrl: 'js/app/factura/view.html', controller: 'facturaViewController'});
        $routeProvider.when('/factura/facturacliente/:rpp?/:page?/:id?/:order?', {templateUrl: 'js/app/factura/facturacliente.html', controller: 'facturaClienteController', resolve: {auth: autenticacionUsuario}});
        $routeProvider.when('/factura/new', {templateUrl: 'js/app/factura/new.html', controller: 'facturaNewController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/factura/edit/:id?/:id_usuario?', {templateUrl: 'js/app/factura/edit.html', controller: 'facturaEditController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/factura/newxusuario/:id', {templateUrl: 'js/app/factura/newxusuario.html', controller: 'facturanewxusuarioController', resolve: {auth: autenticacionAdministrador}});

        //CARRITO
        $routeProvider.when('/carrito/opcion', {templateUrl: 'js/app/carrito/opcion.html', controller: 'carritoOpcionController', resolve: {auth: autenticacionUsuario}});
        $routeProvider.when('/carrito/domicilio/:dir?/:pob?', {templateUrl: 'js/app/carrito/domicilio.html', controller: 'carritoDomicilioController', resolve: {auth: autenticacionUsuario}});
        $routeProvider.when('/carrito/plist_burger', {templateUrl: 'js/app/carrito/plist_burger.html', controller: 'carritoPlistBurgerController'});
        $routeProvider.when('/carrito/plist_varios', {templateUrl: 'js/app/carrito/plist_varios.html', controller: 'carritoPlistVariosController'});
        $routeProvider.when('/carrito/plist_bebida', {templateUrl: 'js/app/carrito/plist_bebida.html', controller: 'carritoPlistBebidaController'});
        $routeProvider.when('/carrito/plist_postre', {templateUrl: 'js/app/carrito/plist_postre.html', controller: 'carritoPlistPostreController'});
        $routeProvider.when('/carrito/carrito/:rpp?/:page?/:order?', {templateUrl: 'js/app/carrito/carrito.html', controller: 'carritoCarritoController', resolve: {auth: autenticacionUsuario}});
        $routeProvider.when('/carrito/facturacarrito/:id?', {templateUrl: 'js/app/carrito/facturacarrito.html', controller: 'facturaCarritoController', resolve: {auth: autenticacionUsuario}});
        $routeProvider.when('/carrito/restaurante/:id?', {templateUrl: 'js/app/carrito/restaurante.html', controller: 'restauranteCarritoController', resolve: {auth: autenticacionUsuario}});
        $routeProvider.when('/carrito/locales', {templateUrl: 'js/app/carrito/locales.html', controller: 'localesCarritoController', resolve: {auth: autenticacionUsuario}});
        $routeProvider.when('/carrito/empresa', {templateUrl: 'js/app/carrito/empresa.html', controller: 'empresaCarritoController', resolve: {auth: autenticacionUsuario}});
        $routeProvider.when('/carrito/contacto', {templateUrl: 'js/app/carrito/contacto.html', controller: 'contactoCarritoController', resolve: {auth: autenticacionUsuario}});

        //RESTAURANTE
        $routeProvider.when('/restaurante/new', {templateUrl: 'js/app/restaurante/new.html', controller: 'restauranteNewController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/restaurante/edit/:id', {templateUrl: 'js/app/restaurante/edit.html', controller: 'restauranteEditController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/restaurante/remove/:id', {templateUrl: 'js/app/restaurante/remove.html', controller: 'restauranteRemoveController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/restaurante/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/restaurante/plist.html', controller: 'restaurantePlistController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/restaurante/view/:id?', {templateUrl: 'js/app/restaurante/view.html', controller: 'restauranteViewController'});

        //MUNICIPIO
        $routeProvider.when('/municipio/new', {templateUrl: 'js/app/municipio/new.html', controller: 'municipioNewController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/municipio/edit/:id?/:id_area?', {templateUrl: 'js/app/municipio/edit.html', controller: 'municipioEditController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/municipio/remove/:id', {templateUrl: 'js/app/municipio/remove.html', controller: 'municipioRemoveController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/municipio/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/municipio/plist.html', controller: 'municipioPlistController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/municipio/view/:id?', {templateUrl: 'js/app/municipio/view.html', controller: 'municipioViewController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/municipio/plistxusuario/:rpp?/:page?/:id?/:order?', {templateUrl: 'js/app/municipio/plistxusuario.html', controller: 'municipioplistxusuarioController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/municipio/newxusuario/:id', {templateUrl: 'js/app/municipio/newxusuario.html', controller: 'municipionewxusuarioController', resolve: {auth: autenticacionAdministrador}});

        //area
        $routeProvider.when('/area/plist/:rpp?/:page?/:id?/:order?', {templateUrl: 'js/app/area/plist.html', controller: 'areaPlistController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/area/view/:id', {templateUrl: 'js/app/area/view.html', controller: 'areaViewController'});
        $routeProvider.when('/area/remove/:id', {templateUrl: 'js/app/area/remove.html', controller: 'areaRemoveController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/area/edit/:id', {templateUrl: 'js/app/area/edit.html', controller: 'areaEditController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/area/new', {templateUrl: 'js/app/area/new.html', controller: 'areaNewController', resolve: {auth: autenticacionAdministrador}});


        //administrador
        $routeProvider.when('/administrador/plist', {templateUrl: 'js/app/administrador/plist.html', controller: 'administradorPlistController', resolve: {auth: autenticacionAdministrador}});
        $routeProvider.when('/administrador/homeadmin', {templateUrl: 'js/app/administrador/homeadmin.html', controller: 'administradorHomeadminController', resolve: {auth: autenticacionAdministrador}});





        $routeProvider.otherwise({redirectTo: '/'});
    }]);
