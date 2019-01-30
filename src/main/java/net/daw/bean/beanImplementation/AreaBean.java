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

    @Expose(serialize = false)
    int id_municipio;
    @Expose(deserialize = false)
    MunicipioBean obj_Municipio;
    @Expose
    String nombre;

    @Override
    public AreaBean fill(ResultSet oResultSet, Connection oConnection, Integer expand, UsuarioBean oUsuarioBeanSession) throws SQLException, Exception {

        this.setId(oResultSet.getInt("id"));

        if (expand > 0) {
            DaoInterface oMunicipioDao = DaoFactory.getDao(oConnection, "municipio", oUsuarioBeanSession);
            this.setObj_Municipio((MunicipioBean) oMunicipioDao.get(oResultSet.getInt("id_municipio"), expand));
        }

        this.setNombre(oResultSet.getString("nombre"));
        return this;
    }

    @Override
    public String getPairs() {
        String strPairs = "";
        strPairs += "id=" + id + ",";
        strPairs += "id_municipio=" + getId_municipio() + ",";
        strPairs += "nombre=" + EncodingHelper.quotate(getNombre());
        strPairs += " WHERE id=" + id;
        return strPairs;
    }

    @Override
    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "id_municipio,";
        strColumns += "nombre";
        return strColumns;
    }

    @Override
    public String getValues() {

        String strColumns = "";
        strColumns += "null,";

        if (getObj_Municipio() != null) {
            strColumns += this.getObj_Municipio().getId() +",";
        } else {
            strColumns += this.getId_municipio()+",";
        }
        strColumns += EncodingHelper.quotate(getNombre());
        
        return strColumns;
    }

    /**
     * @return the id_municipio
     */
    public int getId_municipio() {
        return id_municipio;
    }

    /**
     * @param id_municipio the id_municipio to set
     */
    public void setId_municipio(int id_municipio) {
        this.id_municipio = id_municipio;
    }

    /**
     * @return the obj_Municipio
     */
    public MunicipioBean getObj_Municipio() {
        return obj_Municipio;
    }

    /**
     * @param obj_Municipio the obj_Municipio to set
     */
    public void setObj_Municipio(MunicipioBean obj_Municipio) {
        this.obj_Municipio = obj_Municipio;
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
