/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao.specificDaoImplementation_1;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import net.daw.bean.beanImplementation.LineaBean;
import net.daw.bean.beanImplementation.UsuarioBean;
import net.daw.bean.publicBeanInterface.BeanInterface;
import net.daw.dao.genericDaoImplementation.GenericDaoImplementation;
import net.daw.dao.publicDaoInterface.DaoInterface;

/**
 *
 * @author a021792876p
 */
public class LineaDao_1 extends GenericDaoImplementation implements DaoInterface {

    public LineaDao_1(Connection oConnection, String ob, UsuarioBean oUsuarioBeanSession) {
        super(oConnection, ob, oUsuarioBeanSession);

    }

//    public ArrayList<LineaBean> getLineaFactura(int iRpp, int iPage, int idFactura, Integer expand) throws Exception {
//        String strSQL = "SELECT * FROM " + ob;
//        ArrayList<LineaBean> alLineaBean;
//        if (iRpp > 0 && iRpp < 100000 && iPage > 0 && iPage < 100000000) {
//            strSQL += " WHERE id_factura=? ";
//            strSQL += " LIMIT " + (iPage - 1) * iRpp + ", " + iRpp;
//            ResultSet oResultSet = null;
//            PreparedStatement oPreparedStatement = null;
//            try {
//
//                oPreparedStatement = oConnection.prepareStatement(strSQL);
//                oPreparedStatement.setInt(1, idFactura);
//                oResultSet = oPreparedStatement.executeQuery();
//                alLineaBean = new ArrayList<LineaBean>();
//
//                while (oResultSet.next()) {
//                    LineaBean oLineaBean = new LineaBean();
//                    oLineaBean.fill(oResultSet, oConnection, expand, oUsuarioBeanSession);
//                    alLineaBean.add(oLineaBean);
//                }
//            } catch (SQLException e) {
//                throw new Exception("Error en Dao getpage de " + ob, e);
//            } finally {
//                if (oResultSet != null) {
//                    oResultSet.close();
//                }
//                if (oPreparedStatement != null) {
//                    oPreparedStatement.close();
//                }
//            }
//        } else {
//            throw new Exception("Error en Dao getpage de " + ob);
//        }
//        return alLineaBean;
//
//    }
    @Override
    public int getcountX(int idajena) throws Exception {//hacer private, consultar desde el pojo y no poder preguntar desde fuera del servidor
        //String strSQL = "";

        strSQL_getcount = "SELECT COUNT(id) FROM " + ob + " WHERE id_factura=" + idajena;

        //se cambia la query y se llama al getcount normal para devolverlo
        return super.getcount();
    }

    @Override
    public ArrayList<BeanInterface> getpageX(int iRpp, int iPage, int idajena, HashMap<String, String> hmOrder, Integer expand) throws Exception {
        strSQL_WhereGetpagex = " WHERE id_factura=?";

        return super.getpageX(iRpp, iPage, idajena, hmOrder, expand);

    }
}
