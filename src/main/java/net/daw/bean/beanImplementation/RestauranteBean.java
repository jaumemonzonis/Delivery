/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.bean.beanImplementation;

import com.google.gson.annotations.Expose;
import java.sql.Connection;
import java.sql.ResultSet;
import net.daw.bean.genericBeanImplementation.GenericBeanImplementation;
import net.daw.bean.publicBeanInterface.BeanInterface;
import net.daw.dao.publicDaoInterface.DaoInterface;
import net.daw.factory.DaoFactory;
import net.daw.helper.EncodingHelper;

/**
 *
 * @author jaume monzonis
 */
public class RestauranteBean extends GenericBeanImplementation implements BeanInterface {

    @Expose
    private String nombre;
    @Expose
    private String direccion;
    @Expose
     String poblacion;
    @Expose(deserialize = false)
      int link_zona;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    @Override
    public RestauranteBean fill(ResultSet oResultSet, Connection oConnection, Integer expand, UsuarioBean oUsuarioBeanSession) throws Exception {
        this.setId(oResultSet.getInt("id"));
        this.setNombre(oResultSet.getString("nombre"));
        this.setDireccion(oResultSet.getString("direccion"));
        this.setPoblacion(oResultSet.getString("poblacion"));
        
        DaoInterface oZonaDao = DaoFactory.getDao(oConnection, "zona", oUsuarioBeanSession);
        this.setLink_zona(oZonaDao.getcountX(oResultSet.getInt("id")));
        
        return this;
    }

    @Override
    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "nombre,";
        strColumns += "direccion,";
        strColumns += "poblacion";
        return strColumns;
    }

    @Override
    public String getValues() {
        String strColumns = "";
        strColumns += "null,";
        strColumns += EncodingHelper.quotate(nombre) + ",";
        strColumns += EncodingHelper.quotate(direccion)+ ",";
        strColumns += EncodingHelper.quotate(poblacion);
        return strColumns;
    }

    @Override
    public String getPairs() {
        String strPairs = "";
        strPairs += "id=" + id + ",";
        strPairs += "nombre=" + EncodingHelper.quotate(nombre) + ",";
        strPairs += "direccion=" + EncodingHelper.quotate(direccion) + ",";
        strPairs += "poblacion=" + EncodingHelper.quotate(poblacion);
        strPairs += " WHERE id=" + id;
        return strPairs;
    }

    /**
     * @return the poblacion
     */
    public String getPoblacion() {
        return poblacion;
    }

    /**
     * @param poblacion the poblacion to set
     */
    public void setPoblacion(String poblacion) {
        this.poblacion = poblacion;
    }

    /**
     * @return the link_zona
     */
    public int getLink_zona() {
        return link_zona;
    }

    /**
     * @param link_zona the link_zona to set
     */
    public void setLink_zona(int link_zona) {
        this.link_zona = link_zona;
    }
}
