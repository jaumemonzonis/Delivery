/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.factory;

import com.google.gson.Gson;
import net.daw.bean.publicBeanInterface.BeanInterface;
import net.daw.bean.beanImplementation.TipoproductoBean;
import net.daw.bean.beanImplementation.LineaBean;
import net.daw.bean.beanImplementation.FacturaBean;
import net.daw.bean.beanImplementation.MunicipioBean;
import net.daw.bean.beanImplementation.ProductoBean;
import net.daw.bean.beanImplementation.RestauranteBean;
import net.daw.bean.beanImplementation.TipousuarioBean;
import net.daw.bean.beanImplementation.UsuarioBean;
import net.daw.bean.beanImplementation.ZonaBean;

/**
 *
 * @author raznara
 */
public class BeanFactory {

    public static BeanInterface getBean(String ob) {
        BeanInterface oBean = null;
        switch (ob) {
            case "usuario":
                oBean = (BeanInterface) new UsuarioBean();
                break;
            case "tipousuario":
                oBean = (BeanInterface) new TipousuarioBean();
                break;
            case "tipoproducto":
                oBean = (BeanInterface) new TipoproductoBean();
                break;
            case "producto":
                oBean = (BeanInterface) new ProductoBean();
                break;
            case "factura":
                oBean = (BeanInterface) new FacturaBean();
                break;
            case "linea":
                oBean = (BeanInterface) new LineaBean();
                break;
            case "restaurante":
                oBean = (BeanInterface) new RestauranteBean();
                break;
            case "zona":
                oBean = (BeanInterface) new ZonaBean();
                break;
            case "municipio":
                oBean = (BeanInterface) new MunicipioBean();
                break;
        }
        return oBean;
    }

    public static BeanInterface getBeanFromJson(String ob, Gson oGson, String strJsonFromClient) {
        BeanInterface oBean = null;
        switch (ob) {
            case "usuario":
                oBean = oGson.fromJson(strJsonFromClient, UsuarioBean.class);
                break;
            case "tipousuario":
                oBean = oGson.fromJson(strJsonFromClient, TipousuarioBean.class);
                break;
            case "tipoproducto":
                oBean = oGson.fromJson(strJsonFromClient, TipoproductoBean.class);
                break;
            case "producto":
                oBean = oGson.fromJson(strJsonFromClient, ProductoBean.class);
                break;
            case "factura":
                oBean = oGson.fromJson(strJsonFromClient, FacturaBean.class);
                break;
            case "linea":
                oBean = oGson.fromJson(strJsonFromClient, LineaBean.class);
                break;
            case "restaurante":
                oBean = oGson.fromJson(strJsonFromClient, RestauranteBean.class);
                break;
            case "zona":
                oBean = oGson.fromJson(strJsonFromClient, ZonaBean.class);
                break;
            case "municipio":
                oBean = oGson.fromJson(strJsonFromClient, MunicipioBean.class);
                break;
        }
        return oBean;
    }
}
