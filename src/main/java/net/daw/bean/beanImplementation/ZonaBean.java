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

/**
 *
 * @author jaume monzonis
 */
public class ZonaBean extends GenericBeanImplementation implements BeanInterface {

    @Expose(serialize = false)
    private int id_restaurante;
    @Expose(deserialize = false)
    private RestauranteBean obj_Restaurante;
    @Expose(serialize = false)
    private int id_municipio;
    @Expose(deserialize = false)
    private MunicipioBean obj_Municipio;

    public int getId_restaurante() {
        return id_restaurante;
    }

    public void setId_restaurante(int id_restaurante) {
        this.id_restaurante = id_restaurante;
    }

    public RestauranteBean getObj_Restaurante() {
        return obj_Restaurante;
    }

    public void setObj_Restaurante(RestauranteBean obj_Restaurante) {
        this.obj_Restaurante = obj_Restaurante;
    }

    public int getId_municipio() {
        return id_municipio;
    }

    public void setId_municipio(int id_municipio) {
        this.id_municipio = id_municipio;
    }

    public MunicipioBean getObj_Municipio() {
        return obj_Municipio;
    }

    public void setObj_Municipio(MunicipioBean obj_Municipio) {
        this.obj_Municipio = obj_Municipio;
    }

    @Override
    public ZonaBean fill(ResultSet oResultSet, Connection oConnection, Integer expand, UsuarioBean oUsuarioBeanSession) throws SQLException, Exception {
        this.setId(oResultSet.getInt("id"));

        if (expand > 0) {
            DaoInterface oRestauranteDao = DaoFactory.getDao(oConnection, "restaurante", oUsuarioBeanSession);
            this.setObj_Restaurante((RestauranteBean) oRestauranteDao.get(oResultSet.getInt("id_restaurante"), expand));
        }
        if (expand > 0) {
            DaoInterface oMunicipioDao = DaoFactory.getDao(oConnection, "municipio", oUsuarioBeanSession);
            this.setObj_Municipio((MunicipioBean) oMunicipioDao.get(oResultSet.getInt("id_municipio"), expand));
        }
        return this;
    }

    @Override
    public String getPairs() {
        String strPairs = "";
        strPairs += "id=" + id + ",";
        strPairs += "id_restaurante=" + id_restaurante + ",";
        strPairs += "id_municipio=" + id_municipio;
        strPairs += " WHERE id=" + id;
        return strPairs;
    }

    @Override
    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "id_restaurante,";
        strColumns += "id_municipio";
        return strColumns;
    }

    @Override
    public String getValues() {

        String strColumns = "";
        strColumns += "null,";
        if (getObj_Restaurante() != null) {
            strColumns += this.getObj_Restaurante().getId() + ",";
        } else {
            strColumns += this.getId_restaurante() + ",";
        }

        if (getObj_Municipio() != null) {
            strColumns += this.getObj_Municipio().getId();
        } else {
            strColumns += this.getId_municipio();
        }

        return strColumns;
    }
}
