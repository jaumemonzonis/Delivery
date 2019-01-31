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
public class MunicipioBean extends GenericBeanImplementation implements BeanInterface{
    
    @Expose
    private String poblacion;
    @Expose(serialize = false)
     int id_area;
    @Expose(deserialize = false)
     AreaBean obj_area;
  

    public String getPoblacion() {
        return poblacion;
    }

    public void setPoblacion(String poblacion) {
        this.poblacion = poblacion;
    }
    
    
     
    @Override
    public MunicipioBean fill(ResultSet oResultSet, Connection oConnection, Integer expand, UsuarioBean oUsuarioBeanSession) throws Exception {
        this.setId(oResultSet.getInt("id"));
        this.setPoblacion(oResultSet.getString("poblacion"));
         if (expand > 0) {
             DaoInterface oAreaDao = DaoFactory.getDao(oConnection, "area", oUsuarioBeanSession);
            this.setObj_area((AreaBean) oAreaDao.get(oResultSet.getInt("id_area"), expand - 1));
        } else {
            this.setId_area(oResultSet.getInt("id_area"));
        }
        
        return this;
    }

    @Override
    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "poblacion,";
        strColumns += "id_area";
        return strColumns;
    }

    @Override
    public String getValues() {
        String strColumns = "";
        strColumns += "null,";
        strColumns += EncodingHelper.quotate(poblacion)+ ",";
        strColumns += this.getId_area();
        return strColumns;
    }

    @Override
    public String getPairs() {
        String strPairs = "";
        strPairs += "id=" + id + ",";
        strPairs += "poblacion=" + EncodingHelper.quotate(poblacion) + ",";
        strPairs += "id_area=" + getId_area();
        strPairs += " WHERE id=" + id;
        return strPairs;
    }

    /**
     * @return the id_area
     */
    public int getId_area() {
        return id_area;
    }

    /**
     * @param id_area the id_area to set
     */
    public void setId_area(int id_area) {
        this.id_area = id_area;
    }

    /**
     * @return the obj_area
     */
    public AreaBean getObj_area() {
        return obj_area;
    }

    /**
     * @param obj_area the obj_area to set
     */
    public void setObj_area(AreaBean obj_area) {
        this.obj_area = obj_area;
    }

  
    
    
    
    
    
}
