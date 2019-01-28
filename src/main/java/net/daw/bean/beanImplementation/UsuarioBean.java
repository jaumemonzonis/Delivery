/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.bean.beanImplementation;

import java.sql.Connection;
import java.sql.ResultSet;

import com.google.gson.annotations.Expose;
import net.daw.bean.genericBeanImplementation.GenericBeanImplementation;
import net.daw.bean.publicBeanInterface.BeanInterface;
import net.daw.dao.publicDaoInterface.DaoInterface;
import net.daw.dao.specificDaoImplementation_0.FacturaDao_0;
import net.daw.dao.specificDaoImplementation_1.FacturaDao_1;

import net.daw.helper.EncodingHelper;
import net.daw.dao.specificDaoImplementation_1.TipousuarioDao_1;
import net.daw.dao.specificDaoImplementation_2.FacturaDao_2;
import net.daw.factory.DaoFactory;
import net.daw.helper.TokenGenerator;

/**
 *
 * @author jesus
 */
public class UsuarioBean extends GenericBeanImplementation implements BeanInterface {

 
    @Expose
     private String nombre;
    @Expose
     private String ape1;
    @Expose
     private String ape2;
    @Expose
     private int telefono;
    @Expose
     private String login;
    @Expose(serialize = false)
     private String pass;
    @Expose
     private String email;
    @Expose
     private String direccion;
    @Expose
     private String poblacion;
    @Expose
     private String token;
    @Expose(serialize = false)
     private Boolean validado;
    @Expose(serialize = false)
     private int id_tipousuario;
    @Expose(deserialize = false)
     private TipousuarioBean obj_tipoUsuario;
    @Expose(deserialize = false)
     private int link_factura;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApe1() {
        return ape1;
    }

    public void setApe1(String ape1) {
        this.ape1 = ape1;
    }

    public String getApe2() {
        return ape2;
    }

    public void setApe2(String ape2) {
        this.ape2 = ape2;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getPoblacion() {
        return poblacion;
    }

    public void setPoblacion(String poblacion) {
        this.poblacion = poblacion;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Boolean getValidado() {
        return validado;
    }

    public void setValidado(Boolean validado) {
        this.validado = validado;
    }

    public int getId_tipousuario() {
        return id_tipousuario;
    }

    public void setId_tipousuario(int id_tipousuario) {
        this.id_tipousuario = id_tipousuario;
    }

    public TipousuarioBean getObj_tipousuario() {
        return obj_tipoUsuario;
    }
    public void setObj_tipousuario(TipousuarioBean obj_tipousuario) {
        this.obj_tipoUsuario = obj_tipousuario;
    }

    public int getLink_factura() {
        return link_factura;
    }

    public void setLink_factura(int link_factura) {
        this.link_factura = link_factura;
    }

    @Override
    public UsuarioBean fill(ResultSet oResultSet, Connection oConnection, Integer expand, UsuarioBean oUsuarioBeanSession) throws Exception {
        this.setId(oResultSet.getInt("id"));
        this.setNombre(oResultSet.getString("nombre"));
        this.setApe1(oResultSet.getString("ape1"));
        this.setApe2(oResultSet.getString("ape2"));
        this.setTelefono(oResultSet.getInt("telefono"));
        this.setLogin(oResultSet.getString("login"));
        this.setPass(oResultSet.getString("pass"));
        this.setEmail(oResultSet.getString("email"));
        this.setDireccion(oResultSet.getString("direccion"));
        this.setPoblacion(oResultSet.getString("poblacion"));
        this.setToken(oResultSet.getString("token"));
        this.setValidado(oResultSet.getBoolean("validado"));

        DaoInterface oFacturaDao = DaoFactory.getDao(oConnection, "factura", oUsuarioBeanSession);
        this.setLink_factura(oFacturaDao.getcountX(oResultSet.getInt("id")));
        

        if (expand > 0) {
            DaoInterface otipousuarioDao = DaoFactory.getDao(oConnection, "tipousuario", oUsuarioBeanSession);
            this.setObj_tipousuario((TipousuarioBean) otipousuarioDao.get(oResultSet.getInt("id_tipousuario"), expand - 1));
        } else {
            this.setId_tipousuario(oResultSet.getInt("id_tipousuario"));
        }

        return this;
    }

    @Override
    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "nombre,";
        strColumns += "ape1,";
        strColumns += "ape2,";
        strColumns += "telefono,";
        strColumns += "login,";
        strColumns += "pass,";
        strColumns += "email,";
        strColumns += "direccion,";
        strColumns += "poblacion,";
        strColumns += "token,";
        strColumns += "validado,";
        strColumns += "id_tipousuario";
        return strColumns;
    }

    @Override
    public String getValues() {
        String strColumns = "";
        strColumns += "null,";
        strColumns += EncodingHelper.quotate(getNombre()) + ",";
        strColumns += EncodingHelper.quotate(getApe1()) + ",";
        strColumns += EncodingHelper.quotate(getApe2()) + ",";
        strColumns += telefono + ",";
        strColumns += EncodingHelper.quotate(getLogin()) + ",";
        strColumns += EncodingHelper.quotate(getPass()) + ",";
        strColumns += EncodingHelper.quotate(getEmail()) + ",";
        strColumns += EncodingHelper.quotate(getDireccion()) + ",";
        strColumns += EncodingHelper.quotate(getPoblacion()) + ",";
        strColumns += EncodingHelper.quotate(TokenGenerator.nextToken()) + ",";
        strColumns += validado + ",";
        
        if(this.id_tipousuario!=1 && this.id_tipousuario!=2 && this.id_tipousuario!=3){
            this.id_tipousuario=0;
        }
        
        strColumns += id_tipousuario;
        return strColumns;
    }

    @Override
    public String getPairs() {
        String strPairs = "";
        strPairs += "id=" + id + ",";
        strPairs += "nombre=" + EncodingHelper.quotate(getNombre()) + ",";
        strPairs += "ape1=" + EncodingHelper.quotate(getApe1()) + ",";
        strPairs += "ape2=" + EncodingHelper.quotate(getApe2()) + ",";
        strPairs += "telefono=" + telefono + ",";
        strPairs += "login=" + EncodingHelper.quotate(getLogin()) + ",";
        strPairs += "email=" + EncodingHelper.quotate(getEmail()) + ",";
        strPairs += "direccion=" + EncodingHelper.quotate(getDireccion()) + ",";
        strPairs += "poblacion=" + EncodingHelper.quotate(getPoblacion()) + ",";
//        strPairs += "token=" + EncodingHelper.quotate(getToken()) + ",";
//        strPairs += "validado=" + validado + ",";
        strPairs += "id_tipousuario=" + id_tipousuario;
        strPairs += " WHERE id=" + id;
        return strPairs;

    }
}
