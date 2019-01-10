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
import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import net.daw.bean.genericBeanImplementation.GenericBeanImplementation;
import net.daw.bean.publicBeanInterface.BeanInterface;
import net.daw.dao.publicDaoInterface.DaoInterface;
import net.daw.dao.specificDaoImplementation_0.FacturaDao_0;
import net.daw.dao.specificDaoImplementation_1.FacturaDao_1;
import net.daw.dao.specificDaoImplementation_1.LineaDao_1;
import net.daw.dao.specificDaoImplementation_1.UsuarioDao_1;
import net.daw.dao.specificDaoImplementation_2.FacturaDao_2;
import net.daw.dao.specificDaoImplementation_2.LineaDao_2;
import net.daw.factory.DaoFactory;
import net.daw.helper.EncodingHelper;

/**
 *
 * @author a044531896d
 */
public class FacturaBean extends GenericBeanImplementation implements BeanInterface{

@Expose
    Date fecha;
    @Expose
    double iva;
    @Expose(serialize = false)
    int id_usuario;
    @Expose(deserialize = false)
    UsuarioBean obj_Usuario;
    @Expose(serialize = false)
    int id_restaurante;
    @Expose(deserialize = false)
    RestauranteBean obj_Restaurante;
    @Expose
    int link_linea;

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public double getIva() {
        return iva;
    }

    public void setIva(double iva) {
        this.iva = iva;
    }

    public int getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public UsuarioBean getObj_Usuario() {
        return obj_Usuario;
    }

    public void setObj_Usuario(UsuarioBean obj_Usuario) {
        this.obj_Usuario = obj_Usuario;
    }

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

    public int getLink_linea() {
        return link_linea;
    }

    public void setLink_linea(int link_linea) {
        this.link_linea = link_linea;
    }

    @Override
    public FacturaBean fill(ResultSet oResultSet, Connection oConnection, Integer expand, UsuarioBean oUsuarioBeanSession) throws SQLException, Exception {
        this.setId(oResultSet.getInt("id"));
        this.setFecha(oResultSet.getDate("fecha"));
        this.setIva(oResultSet.getDouble("iva"));

        if (expand > 0) {
            DaoInterface oUsuarioDao = DaoFactory.getDao(oConnection, "usuario", oUsuarioBeanSession);
            this.setObj_Usuario((UsuarioBean) oUsuarioDao.get(oResultSet.getInt("id_usuario"), expand));
        }
        DaoInterface oLineaDao = DaoFactory.getDao(oConnection, "linea", oUsuarioBeanSession);
        this.setLink_linea(oLineaDao.getcountX(oResultSet.getInt("id")));

        if (expand > 0) {
            DaoInterface oRestauranteDao = DaoFactory.getDao(oConnection, "restaurante", oUsuarioBeanSession);
            this.setObj_Restaurante((RestauranteBean) oRestauranteDao.get(oResultSet.getInt("id_restaurante"), expand));
        }
//   

        return this;
    }

    @Override
    public String getPairs() {

        ZoneId defaultZoneId = ZoneId.systemDefault();

        Instant instant = getFecha().toInstant();

        LocalDate localDate = instant.atZone(defaultZoneId).toLocalDate();
        //System.out.println("Local Date is: " + localDate);

        String strPairs = "";
        strPairs += "id=" + id + ",";
        strPairs += "fecha=" + EncodingHelper.quotate(localDate.toString()) + ",";
        strPairs += "iva=" + getIva() + ",";
        strPairs += "id_usuario=" + getId_usuario() + ",";
        strPairs += "id_restaurante=" + getId_restaurante();
        strPairs += " WHERE id=" + id;
        return strPairs;

    }

    @Override
    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "fecha,";
        strColumns += "iva,";
        strColumns += "id_usuario,";
        strColumns += "id_restaurante";
        return strColumns;
    }

    @Override
    public String getValues() {

        ZoneId defaultZoneId = ZoneId.systemDefault();

        Instant instant = getFecha().toInstant();

        LocalDate localDate = instant.atZone(defaultZoneId).toLocalDate();
        System.out.println("Local Date is: " + localDate);
        String strColumns = "";
        strColumns += "null,";
        strColumns += EncodingHelper.quotate(localDate.toString()) + ",";
        strColumns += getIva() + ",";
        if (getObj_Usuario() != null) {
            strColumns += this.getObj_Usuario().getId() + ",";
        } else {
            strColumns += this.getId_usuario() + ",";
        }

        if (getObj_Restaurante() != null) {
            strColumns += this.getObj_Restaurante().getId();
        } else {
            strColumns += this.getId_restaurante();
        }

        return strColumns;
    }

}
