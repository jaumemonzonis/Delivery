/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao.specificDaoImplementation_2;


import java.sql.Array;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import net.daw.bean.beanImplementation.MunicipioBean;
import net.daw.bean.beanImplementation.TipousuarioBean;
import net.daw.bean.beanImplementation.UsuarioBean;
import net.daw.bean.publicBeanInterface.BeanInterface;
import net.daw.dao.genericDaoImplementation.GenericDaoImplementation;
import net.daw.dao.publicDaoInterface.DaoInterface;
import net.daw.factory.BeanFactory;
import net.daw.helper.EncodingHelper;
import net.daw.helper.SqlBuilder;

/**
 *
 * @author jaume monzonis
 */
public class MunicipioDao_2 extends GenericDaoImplementation implements DaoInterface{
     public MunicipioDao_2(Connection oConnection, String ob,UsuarioBean oUsuarioBeanSession) {
        super(oConnection, ob, oUsuarioBeanSession);

    }
    

    public int getIdRestaurante(String poblacion_cliente) throws Exception {
        int iRes = 0;
        String strSQL_getIdRestaurante = "SELECT zona.id_restaurante FROM zona WHERE zona.id_municipio=(SELECT m.id from municipio m WHERE m.poblacion=?)";
        PreparedStatement oPreparedStatement = null;
          ResultSet oResultSet = null;
        try {
            oPreparedStatement = oConnection.prepareStatement(strSQL_getIdRestaurante);
            String poblaciocliente = EncodingHelper.quotate(poblacion_cliente);
            oPreparedStatement.setString(1, poblaciocliente);
           oResultSet = oPreparedStatement.executeQuery();
           if (oResultSet.next()) {
                iRes = oResultSet.getInt(1);
            }
           
           
        } catch (SQLException e) {
            throw new Exception("Error en Dao getIdRestaurante de " + ob, e);
        } finally {
            if (oPreparedStatement != null) {
                oPreparedStatement.close();
            }
        }
        return iRes;
    }
    
}
