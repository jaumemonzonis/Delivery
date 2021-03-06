package net.daw.factory;

import javax.servlet.http.HttpServletRequest;

import net.daw.bean.beanImplementation.ReplyBean;
import net.daw.bean.beanImplementation.UsuarioBean;
import net.daw.service.specificServiceImplementation_0.UsuarioService_0;
import net.daw.service.specificServiceImplementation_1.AreaService_1;
import net.daw.service.specificServiceImplementation_1.FacturaService_1;
import net.daw.service.specificServiceImplementation_1.LineaService_1;
import net.daw.service.specificServiceImplementation_1.MunicipioService_1;
import net.daw.service.specificServiceImplementation_1.ProductoService_1;
import net.daw.service.specificServiceImplementation_1.RestauranteService_1;
import net.daw.service.specificServiceImplementation_1.TipoproductoService_1;
import net.daw.service.specificServiceImplementation_1.TipousuarioService_1;
import net.daw.service.specificServiceImplementation_1.UsuarioService_1;
import net.daw.service.specificServiceImplementation_1.Restaurante_municipioService_1;
import net.daw.service.specificServiceImplementation_2.CarritoService_2;
import net.daw.service.specificServiceImplementation_2.FacturaService_2;
import net.daw.service.specificServiceImplementation_2.LineaService_2;
import net.daw.service.specificServiceImplementation_2.MunicipioService_2;
import net.daw.service.specificServiceImplementation_2.ProductoService_2;
import net.daw.service.specificServiceImplementation_2.RestauranteService_2;
import net.daw.service.specificServiceImplementation_2.TipoproductoService_2;
import net.daw.service.specificServiceImplementation_2.TipousuarioService_2;
import net.daw.service.specificServiceImplementation_2.UsuarioService_2;
import net.daw.service.specificServiceImplementation_2.Restaurante_municipioService_2;

public class ServiceFactory {

    public static ReplyBean executeService(HttpServletRequest oRequest) throws Exception {

        String ob = oRequest.getParameter("ob");
        String op = oRequest.getParameter("op");

        int idSessionUserTipe;
        UsuarioBean oUsuarioBeanSession = (UsuarioBean) oRequest.getSession().getAttribute("user");
        if (oUsuarioBeanSession != null) {
            idSessionUserTipe = oUsuarioBeanSession.getObj_tipousuario().getId();
        } else {
            idSessionUserTipe = 0;
        }

        ReplyBean oReplyBean = null;

        switch (idSessionUserTipe) {
            case 1:
                switch (ob) {
                    case "tipousuario":
                        TipousuarioService_1 oTipousuarioService = new TipousuarioService_1(oRequest);
                        switch (op) {
                            case "get":
                                oReplyBean = oTipousuarioService.get();
                                break;
                            case "create":
                                oReplyBean = oTipousuarioService.create();
                                break;
                            case "update":
                                oReplyBean = oTipousuarioService.update();
                                break;
                            case "remove":
                                oReplyBean = oTipousuarioService.remove();
                                break;
                            case "getcount":
                                oReplyBean = oTipousuarioService.getcount();
                                break;
                            case "getpage":
                                oReplyBean = oTipousuarioService.getpage();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;
                    case "usuario":
                        UsuarioService_1 oUsuarioService = new UsuarioService_1(oRequest);
                        switch (op) {
                            case "get":
                                oReplyBean = oUsuarioService.get();
                                break;
                            case "create":
                                oReplyBean = oUsuarioService.create();
                                break;
                            case "update":
                                oReplyBean = oUsuarioService.update();
                                break;
                            case "remove":
                                oReplyBean = oUsuarioService.remove();
                                break;
                            case "getcount":
                                oReplyBean = oUsuarioService.getcount();
                                break;
                            case "getpage":
                                oReplyBean = oUsuarioService.getpage();
                                break;
                            case "fill":
                                oReplyBean = oUsuarioService.fill();
                                break;
//                            case "login":
//                                oReplyBean = oUsuarioService.login();
//                                break;
                            case "logout":
                                oReplyBean = oUsuarioService.logout();
                                break;
                            case "check":
                                oReplyBean = oUsuarioService.check();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;
                    case "factura":
                        FacturaService_1 oFacturaService = new FacturaService_1(oRequest);
                        switch (op) {
                            case "get":
                                oReplyBean = oFacturaService.get();
                                break;
                            case "create":
                                oReplyBean = oFacturaService.create();
                                break;
                            case "update":
                                oReplyBean = oFacturaService.update();
                                break;
                            case "remove":
                                oReplyBean = oFacturaService.remove();
                                break;
                            case "getcount":
                                oReplyBean = oFacturaService.getcount();
                                break;
                            case "getpage":
                                oReplyBean = oFacturaService.getpage();
                                break;
                            case "getpagex":
                                oReplyBean = oFacturaService.getpageX();
                                break;
                            case "getcountx":
                                oReplyBean = oFacturaService.getcountX();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;
                    case "linea":
                        LineaService_1 oLineaService = new LineaService_1(oRequest);
                        String pepe = oRequest.getParameter("idfactura");
                        switch (op) {
                            case "get":
                                oReplyBean = oLineaService.get();
                                break;
                            case "create":
                                oReplyBean = oLineaService.create();
                                break;
                            case "update":
                                oReplyBean = oLineaService.update();
                                break;
                            case "remove":
                                oReplyBean = oLineaService.remove();
                                break;
                            case "getcount":
                                oReplyBean = oLineaService.getcount();
                                break;
                            case "getpage":
                                oReplyBean = oLineaService.getpage();
                                break;
                            case "getpagex":
                                oReplyBean = oLineaService.getpageX();
                                break;
                            case "getcountx":
                                oReplyBean = oLineaService.getcountX();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;

                    case "producto":
                        ProductoService_1 oProductoService = new ProductoService_1(oRequest);
                        switch (op) {
                            case "get":
                                oReplyBean = oProductoService.get();
                                break;
                            case "create":
                                oReplyBean = oProductoService.create();
                                break;
                            case "update":
                                oReplyBean = oProductoService.update();
                                break;
                            case "remove":
                                oReplyBean = oProductoService.remove();
                                break;
                            case "getcount":
                                oReplyBean = oProductoService.getcount();
                                break;
                            case "getpage":
                                oReplyBean = oProductoService.getpage();
                                break;
                            case "loaddata":
                                oReplyBean = oProductoService.loaddata();
                                break;
                            case "loadimage":
                                oReplyBean = oProductoService.loadimage();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;
                    case "tipoproducto":
                        TipoproductoService_1 oTipoproductoService = new TipoproductoService_1(oRequest);
                        switch (op) {
                            case "get":
                                oReplyBean = oTipoproductoService.get();
                                break;
                            case "create":
                                oReplyBean = oTipoproductoService.create();
                                break;
                            case "update":
                                oReplyBean = oTipoproductoService.update();
                                break;
                            case "remove":
                                oReplyBean = oTipoproductoService.remove();
                                break;
                            case "getcount":
                                oReplyBean = oTipoproductoService.getcount();
                                break;
                            case "getpage":
                                oReplyBean = oTipoproductoService.getpage();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;
                    case "restaurante":
                        RestauranteService_1 oRestauranteService = new RestauranteService_1(oRequest);
                        switch (op) {
                            case "get":
                                oReplyBean = oRestauranteService.get();
                                break;
                            case "create":
                                oReplyBean = oRestauranteService.create();
                                break;
                            case "update":
                                oReplyBean = oRestauranteService.update();
                                break;
                            case "remove":
                                oReplyBean = oRestauranteService.remove();
                                break;
                            case "getcount":
                                oReplyBean = oRestauranteService.getcount();
                                break;
                            case "getpage":
                                oReplyBean = oRestauranteService.getpage();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;
                    case "restaurante_municipio":
                        Restaurante_municipioService_1 oRestaurante_municipioService = new Restaurante_municipioService_1(oRequest);
                        switch (op) {
                            case "get":
                                oReplyBean = oRestaurante_municipioService.get();
                                break;
                            case "create":
                                oReplyBean = oRestaurante_municipioService.create();
                                break;
                            case "update":
                                oReplyBean = oRestaurante_municipioService.update();
                                break;
                            case "remove":
                                oReplyBean = oRestaurante_municipioService.remove();
                                break;
                            case "getcount":
                                oReplyBean = oRestaurante_municipioService.getcount();
                                break;
                            case "getpage":
                                oReplyBean = oRestaurante_municipioService.getpage();
                                break;
                            case "getpagex":
                                oReplyBean = oRestaurante_municipioService.getpageX();
                                break;
                            case "getcountx":
                                oReplyBean = oRestaurante_municipioService.getcountX();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;
                    case "municipio":
                        MunicipioService_1 oMunicipioService = new MunicipioService_1(oRequest);
                        switch (op) {
                            case "get":
                                oReplyBean = oMunicipioService.get();
                                break;
                            case "create":
                                oReplyBean = oMunicipioService.create();
                                break;
                            case "update":
                                oReplyBean = oMunicipioService.update();
                                break;
                            case "remove":
                                oReplyBean = oMunicipioService.remove();
                                break;
                            case "getcount":
                                oReplyBean = oMunicipioService.getcount();
                                break;
                            case "getpage":
                                oReplyBean = oMunicipioService.getpage();
                                break;
                            case "getpagex":
                                oReplyBean = oMunicipioService.getpageX();
                                break;
                            case "getcountx":
                                oReplyBean = oMunicipioService.getcountX();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;
                    case "area":
                        AreaService_1 oAreaService = new AreaService_1(oRequest);
                        switch (op) {
                            case "get":
                                oReplyBean = oAreaService.get();
                                break;
                            case "create":
                                oReplyBean = oAreaService.create();
                                break;
                            case "update":
                                oReplyBean = oAreaService.update();
                                break;
                            case "remove":
                                oReplyBean = oAreaService.remove();
                                break;
                            case "getcount":
                                oReplyBean = oAreaService.getcount();
                                break;
                            case "getpage":
                                oReplyBean = oAreaService.getpage();
                                break;
                            case "getpagex":
                                oReplyBean = oAreaService.getpageX();
                                break;
                            case "getcountx":
                                oReplyBean = oAreaService.getcountX();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;
                    default:
                        oReplyBean = new ReplyBean(500, "Object doesn't exist");
                        break;
                }
                break;
            case 2:
                switch (ob) {
                    case "tipousuario":
                        TipousuarioService_2 oTipousuarioService = new TipousuarioService_2(oRequest);
                        switch (op) {
                            case "get":
                                oReplyBean = oTipousuarioService.get();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;
                    case "usuario":
                        UsuarioService_2 oUsuarioService = new UsuarioService_2(oRequest);
                        switch (op) {
                            case "get":
                                oReplyBean = oUsuarioService.get();
                                break;

                            case "update":
                                oReplyBean = oUsuarioService.update();
                                break;

//                            case "login":
//                                oReplyBean = oUsuarioService.login();
//                                break;
                            case "logout":
                                oReplyBean = oUsuarioService.logout();
                                break;
                            case "check":
                                oReplyBean = oUsuarioService.check();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;
                    case "factura":
                        FacturaService_2 oFacturaService = new FacturaService_2(oRequest);
                        switch (op) {
                            case "get":
                                oReplyBean = oFacturaService.get();
                                break;
                            case "getcount":
                                oReplyBean = oFacturaService.getcount();
                                break;
                            case "getpage":
                                oReplyBean = oFacturaService.getpage();
                                break;
                            case "getpagex":
                                oReplyBean = oFacturaService.getpageX();
                                break;
                            case "getcountx":
                                oReplyBean = oFacturaService.getcountX();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;
                    case "linea":
                        LineaService_2 oLineaService = new LineaService_2(oRequest);
                        String pepe = oRequest.getParameter("idfactura");
                        switch (op) {
                            case "get":
                                oReplyBean = oLineaService.get();
                                break;
                            case "getcount":
                                oReplyBean = oLineaService.getcount();
                                break;
                            case "getpage":
                                oReplyBean = oLineaService.getpage();
                                break;
                            case "getpagex":
                                oReplyBean = oLineaService.getpageX();
                                break;
                            case "getcountx":
                                oReplyBean = oLineaService.getcountX();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;

                    case "producto":
                        ProductoService_2 oProductoService = new ProductoService_2(oRequest);
                        switch (op) {
                            case "get":
                                oReplyBean = oProductoService.get();
                                break;
                            case "getcount":
                                oReplyBean = oProductoService.getcount();
                                break;
                            case "getpage":
                                oReplyBean = oProductoService.getpage();
                                break;
                            case "getpagex":
                                oReplyBean = oProductoService.getpageX();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;
                    case "tipoproducto":
                        TipoproductoService_2 oTipoproductoService = new TipoproductoService_2(oRequest);
                        switch (op) {
                            case "get":
                                oReplyBean = oTipoproductoService.get();
                                break;
                            case "getcount":
                                oReplyBean = oTipoproductoService.getcount();
                                break;
                            case "getpage":
                                oReplyBean = oTipoproductoService.getpage();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;
                    case "restaurante":
                        RestauranteService_2 oRestauranteService = new RestauranteService_2(oRequest);
                        switch (op) {
                            case "get":
                                oReplyBean = oRestauranteService.get();
                                break;
                            case "getcount":
                                oReplyBean = oRestauranteService.getcount();
                                break;
                            case "getpageSinarea":
                                oReplyBean = oRestauranteService.getpageSinarea();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;
                    case "municipio":
                        MunicipioService_2 oMunicipioService = new MunicipioService_2(oRequest);
                        switch (op) {
                            case "getIdRestaurante":
                                oReplyBean = oMunicipioService.getIdRestaurante();
                                break;
                            case "getIdRestauranteArea":
                                oReplyBean = oMunicipioService.getIdRestauranteArea();
                                break;

                        }
                        break;
                    case "carrito":
                        CarritoService_2 oCarritoService = new CarritoService_2(oRequest);
                        switch (op) {
                            case "add":
                                oReplyBean = oCarritoService.add();
                                break;
                            case "empty":
                                oReplyBean = oCarritoService.empty();
                                break;
                            case "reduce":
                                oReplyBean = oCarritoService.reduce();
                                break;
                            case "show":
                                oReplyBean = oCarritoService.show();
                                break;
                            case "buy":
                                oReplyBean = oCarritoService.buy();
                                break;
                            case "count":
                                oReplyBean = oCarritoService.count();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;
                    default:
                        oReplyBean = new ReplyBean(500, "Object doesn't exist");
                        break;
                }
                break;
            case 0:
                switch (ob) {
                    case "usuario":
                        UsuarioService_0 oUsuarioService = new UsuarioService_0(oRequest);
                        switch (op) {

                            case "create":
                                oReplyBean = oUsuarioService.create();
                                break;
                            case "login":
                                oReplyBean = oUsuarioService.login();
                                break;
                            case "check":
                                oReplyBean = oUsuarioService.check();
                                break;
                            case "activar":
                                oReplyBean = oUsuarioService.activar();
                                break;
                        }
                        break;
                    case "producto":
                        ProductoService_2 oProductoService = new ProductoService_2(oRequest);
                        switch (op) {
                            case "getcount":
                                oReplyBean = oProductoService.getcount();
                                break;
                            case "getpage":
                                oReplyBean = oProductoService.getpage();
                                break;
                            default:
                                oReplyBean = new ReplyBean(500, "Operation doesn't exist");
                                break;
                        }
                        break;

                    default:
                        oReplyBean = new ReplyBean(500, "Object doesn't exist");
                        break;
                }
                break;
            default:
                oReplyBean = new ReplyBean(500, "Proefile doesn't exist");
                break;
        }
        return oReplyBean;
    }

}
