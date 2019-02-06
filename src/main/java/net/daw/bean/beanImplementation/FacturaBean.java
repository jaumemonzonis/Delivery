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
public class FacturaBean extends GenericBeanImplementation implements BeanInterface {

    @Expose
    private Date fecha;
    @Expose
    private double iva;
    @Expose
    String direccion_pedido;
    @Expose
    String poblacion_pedido;
    @Expose(serialize = false)
    private int id_usuario;
    @Expose(deserialize = false)
    private UsuarioBean obj_Usuario;
    @Expose(serialize = false)
    private int id_restaurante;
    @Expose(deserialize = false)
    private RestauranteBean obj_Restaurante;
    @Expose
    private int link_linea;

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
        this.setDireccion_pedido(oResultSet.getString("direccion_pedido"));
        this.setPoblacion_pedido(oResultSet.getString("poblacion_pedido"));

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
        strPairs += "direccion_pedido=" + EncodingHelper.quotate(direccion_pedido) + ",";
        strPairs += "poblacion_pedido=" + EncodingHelper.quotate(poblacion_pedido) + ",";
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
        strColumns += "direccion_pedido,";
        strColumns += "poblacion_pedido,";
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
        strColumns += EncodingHelper.quotate(direccion_pedido) + ",";
        strColumns += EncodingHelper.quotate(poblacion_pedido) + ",";
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

    /**
     * @return the direccion_pedido
     */
    public String getDireccion_pedido() {
        return direccion_pedido;
    }

    /**
     * @param direccion_pedido the direccion_pedido to set
     */
    public void setDireccion_pedido(String direccion_pedido) {
        this.direccion_pedido = direccion_pedido;
    }

    /**
     * @return the poblacion_pedido
     */
    public String getPoblacion_pedido() {
        return poblacion_pedido;
    }

    /**
     * @param poblacion_pedido the poblacion_pedido to set
     */
    public void setPoblacion_pedido(String poblacion_pedido) {
        this.poblacion_pedido = poblacion_pedido;
    }

}
