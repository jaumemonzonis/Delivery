/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao.specificDaoImplementation_2;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import net.daw.bean.beanImplementation.RestauranteBean;
import net.daw.bean.beanImplementation.UsuarioBean;
import net.daw.bean.publicBeanInterface.BeanInterface;
import net.daw.dao.genericDaoImplementation.GenericDaoImplementation;
import net.daw.dao.publicDaoInterface.DaoInterface;

/**
 *
 * @author jaume monzonis
 */
public class RestauranteDao_2 extends GenericDaoImplementation implements DaoInterface {

    public RestauranteDao_2(Connection oConnection, String ob, UsuarioBean oUsuarioBeanSession) {
        super(oConnection, ob, oUsuarioBeanSession);

    }

    @Override
    public int remove(int id) throws Exception {
        throw new Exception("Error en Dao remove de " + ob + ": No autorizado");
    }

    @Override
    public BeanInterface create(BeanInterface oBean) throws Exception {
        throw new Exception("Error en Dao create de " + ob + ": No autorizado");
    }

    @Override
    public int update(BeanInterface oBean) throws Exception {
        throw new Exception("Error en Dao update de " + ob + ": No autorizado");
    }

    public ArrayList<BeanInterface> getpageSinarea() throws Exception {
        ArrayList<BeanInterface> alBean;
        String pob = oUsuarioBeanSession.getPoblacion();
        int iRes = 0;
        String strSQL_getIdRestaurante = "SELECT * FROM `restaurante` WHERE restaurante.id IN (SELECT restaurante_municipio.id_restaurante FROM `restaurante_municipio` WHERE restaurante_municipio.id_municipio IN (SELECT municipio.id FROM municipio WHERE municipio.id_area<>(SELECT m.id_area from municipio m WHERE m.poblacion='" + pob + "')))";
        PreparedStatement oPreparedStatement = null;
        ResultSet oResultSet = null;
        try {
            oPreparedStatement = oConnection.prepareStatement(strSQL_getIdRestaurante);
            oResultSet = oPreparedStatement.executeQuery();
            alBean = new ArrayList<BeanInterface>();
            while (oResultSet.next()) {
                RestauranteBean oRestauranteBean = new RestauranteBean();
                oRestauranteBean.fill(oResultSet, oConnection, 1, oUsuarioBeanSession);
                alBean.add(oRestauranteBean);
            }
        } catch (SQLException e) {
            throw new Exception("Error en Dao getpageSinarea de " + ob, e);
        } finally {
            if (oResultSet != null) {
                oResultSet.close();
            }
            if (oPreparedStatement != null) {
                oPreparedStatement.close();
            }
        }

        return alBean;

    }
}