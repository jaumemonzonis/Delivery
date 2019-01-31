/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.bean.beanImplementation;

import com.google.gson.annotations.Expose;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import net.daw.bean.genericBeanImplementation.GenericBeanImplementation;
import net.daw.bean.publicBeanInterface.BeanInterface;
import net.daw.dao.publicDaoInterface.DaoInterface;
import net.daw.factory.DaoFactory;
import net.daw.helper.EncodingHelper;

/**
 *
 * @author jaume monzonis
 */
public class AreaBean extends GenericBeanImplementation implements BeanInterface {

    @Expose
    String nombre;

    @Override
    public AreaBean fill(ResultSet oResultSet, Connection oConnection, Integer expand, UsuarioBean oUsuarioBeanSession) throws SQLException, Exception {

        this.setId(oResultSet.getInt("id"));


        this.setNombre(oResultSet.getString("nombre"));
        return this;
    }

    @Override
    public String getPairs() {
        String strPairs = "";
        strPairs += "id=" + id + ",";
        strPairs += "nombre=" + EncodingHelper.quotate(getNombre());
        strPairs += " WHERE id=" + id;
        return strPairs;
    }

    @Override
    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "nombre";
        return strColumns;
    }

    @Override
    public String getValues() {

        String strColumns = "";
        strColumns += "null,";
        strColumns += EncodingHelper.quotate(getNombre());
        
        return strColumns;
    }

  
    /**
     * @return the nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @param nombre the nombre to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
