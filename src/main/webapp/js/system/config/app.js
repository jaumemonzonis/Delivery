'use strict'

var delivery = angular.module('MyApp', [
    'ngRoute',
    'services',
    'components',
    'commonControllers',
    'tipousuarioControllers',
    'usuarioControllers',
    'tipoproductoControllers',
    'facturaControllers',
    'productoControllers',
    'lineaControllers',
    'clienteControllers',
    'administradorControllers',
    'restauranteControllers',
    'areaControllers',
    'municipioControllers',
    'carritoControllers',
    'ngMaterial',
    'Directives'
    
]).config(function ($mdDateLocaleProvider) {
    // Example of a Spanish localization.
    $mdDateLocaleProvider.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    $mdDateLocaleProvider.shortMonths = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    $mdDateLocaleProvider.days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
    $mdDateLocaleProvider.shortDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'];
    // Can change week display to start on Monday.
    $mdDateLocaleProvider.firstDayOfWeek = 1;
    // Optional.
    //$mdDateLocaleProvider.dates = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16,17,18,19,
    //                               20,21,22,23,24,25,26,27,28,29,30,31];
    // In addition to date display, date components also need localized messages
    // for aria-labels for screen-reader users.
    $mdDateLocaleProvider.weekNumberFormatter = function (weekNumber) {
        return 'Semana ' + weekNumber;
    };
    $mdDateLocaleProvider.msgCalendar = 'Calendario';
    $mdDateLocaleProvider.msgOpenCalendar = 'Abrir calendario';
    $mdDateLocaleProvider.formatDate = function (date) {
        return moment(date).format('DD-MM-YYYY');
    };
});


var moduleCommon = angular.module ('commonControllers',[]);
var moduleService = angular.module ('services',[]);
var moduleComponent = angular.module ('components',[]);
var moduleTipousuario = angular.module ('tipousuarioControllers',[]);
var moduleUsuario = angular.module ('usuarioControllers',[]);
var moduleProducto = angular.module ('productoControllers',[]);
var moduleFactura = angular.module ('facturaControllers',[]);
var moduleAdministrador = angular.module ('administradorControllers',[]);
var moduleTipoproducto = angular.module('tipoproductoControllers',[]);
var moduleLinea = angular.module('lineaControllers',[]);
var moduleRestaurante = angular.module('restauranteControllers',[]);
var moduleArea = angular.module('areaControllers',[]);
var moduleMunicipio = angular.module('municipioControllers',[]);
var moduleCarrito = angular.module('carritoControllers',[]);
var moduloDirectivas = angular.module('Directives', []);
var moduleCliente = angular.module('clienteControllers',[]);