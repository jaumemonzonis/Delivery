/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.factory;

import java.sql.Connection;
import net.daw.bean.beanImplementation.UsuarioBean;
import net.daw.dao.specificDaoImplementation_1.FacturaDao_1;
import net.daw.dao.specificDaoImplementation_1.LineaDao_1;
import net.daw.dao.specificDaoImplementation_1.ProductoDao_1;
import net.daw.dao.specificDaoImplementation_1.TipoproductoDao_1;
import net.daw.dao.specificDaoImplementation_1.TipousuarioDao_1;
import net.daw.dao.specificDaoImplementation_1.UsuarioDao_1;
import net.daw.dao.publicDaoInterface.DaoInterface;
import net.daw.dao.specificDaoImplementation_0.FacturaDao_0;
import net.daw.dao.specificDaoImplementation_0.TipousuarioDao_0;
import net.daw.dao.specificDaoImplementation_0.UsuarioDao_0;
import net.daw.dao.specificDaoImplementation_1.AreaDao_1;
import net.daw.dao.specificDaoImplementation_1.MunicipioDao_1;
import net.daw.dao.specificDaoImplementation_1.RestauranteDao_1;
import net.daw.dao.specificDaoImplementation_1.Restaurante_municipioDao_1;
import net.daw.dao.specificDaoImplementation_2.AreaDao_2;
import net.daw.dao.specificDaoImplementation_2.FacturaDao_2;
import net.daw.dao.specificDaoImplementation_2.LineaDao_2;
import net.daw.dao.specificDaoImplementation_2.MunicipioDao_2;
import net.daw.dao.specificDaoImplementation_2.ProductoDao_2;
import net.daw.dao.specificDaoImplementation_2.RestauranteDao_2;
import net.daw.dao.specificDaoImplementation_2.TipoproductoDao_2;
import net.daw.dao.specificDaoImplementation_2.TipousuarioDao_2;
import net.daw.dao.specificDaoImplementation_2.UsuarioDao_2;
import net.daw.dao.specificDaoImplementation_2.Restaurante_municipioDao_2;

/**
 *
 * @author a044531896d
 */
public class DaoFactory {

    public static DaoInterface getDao(Connection oConnection, String ob, UsuarioBean oUsuarioBeanSession) throws Exception {
        DaoInterface oDao = null;
        int idSessionUserTipe;
        if (oUsuarioBeanSession != null) {
            idSessionUserTipe = oUsuarioBeanSession.getObj_tipousuario().getId();
        } else {
            idSessionUserTipe = 0;
        }

        switch (idSessionUserTipe) {
            case 1:
                switch (ob) {
                    case "usuario":
                        oDao = new UsuarioDao_1(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "tipousuario":
                        oDao = new TipousuarioDao_1(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "tipoproducto":
                        oDao = new TipoproductoDao_1(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "producto":
                        oDao = new ProductoDao_1(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "factura":
                        oDao = new FacturaDao_1(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "linea":
                        oDao = new LineaDao_1(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "restaurante":
                        oDao = new RestauranteDao_1(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "restaurante_municipio":
                        oDao = new Restaurante_municipioDao_1(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "municipio":
                        oDao = new MunicipioDao_1(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "area":
                        oDao = new AreaDao_1(oConnection, ob, oUsuarioBeanSession);
                        break;
                }
                break;
            case 2:
                switch (ob) {
                    case "usuario":
                        oDao = new UsuarioDao_2(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "tipousuario":
                        oDao = new TipousuarioDao_2(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "tipoproducto":
                        oDao = new TipoproductoDao_2(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "producto":
                        oDao = new ProductoDao_2(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "factura":
                        oDao = new FacturaDao_2(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "linea":
                        oDao = new LineaDao_2(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "restaurante":
                        oDao = new RestauranteDao_2(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "restaurante_municipio":
                        oDao = new Restaurante_municipioDao_2(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "municipio":
                        oDao = new MunicipioDao_2(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "area":
                        oDao = new AreaDao_2(oConnection, ob, oUsuarioBeanSession);
                        break;
                }
                break;
            case 0:
                switch (ob) {
                    case "usuario":
                        oDao = new UsuarioDao_0(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "tipousuario":
                        oDao = new TipousuarioDao_0(oConnection, ob, oUsuarioBeanSession);
                        break;
//                    case "tipoproducto":
//                        oDao = new TipoproductoDao_2(oConnection, ob, oUsuarioBeanSession);
//                        break;
                    case "producto":
                        oDao = new ProductoDao_2(oConnection, ob, oUsuarioBeanSession);
                        break;
                    case "factura":
                        oDao = new FacturaDao_0(oConnection, ob, oUsuarioBeanSession);
                        break;
//                    case "linea":
//                        oDao = new LineaDao_2(oConnection, ob, oUsuarioBeanSession);
//                        break;
                }
                break;
            default:
                throw new Exception("Error en Dao factory de " + ob);
        }

        return oDao;
    }
}
