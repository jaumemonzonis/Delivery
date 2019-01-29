/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao.specificDaoImplementation_2;


import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import net.daw.bean.beanImplementation.UsuarioBean;
import net.daw.bean.publicBeanInterface.BeanInterface;
import net.daw.dao.genericDaoImplementation.GenericDaoImplementation;
import net.daw.dao.publicDaoInterface.DaoInterface;

/**
 *
 * @author jaume monzonis
 */
public class ZonaDao_2 extends GenericDaoImplementation implements DaoInterface{
     public ZonaDao_2(Connection oConnection, String ob,UsuarioBean oUsuarioBeanSession) {
        super(oConnection, ob, oUsuarioBeanSession);

    }
     @Override
    public int remove(int id) throws Exception {
        throw new Exception("Error en Dao remove de " + ob + ": No autorizado");
    }

    @Override
    public int getcount() throws Exception {
        throw new Exception("Error en Dao getcount de " + ob + ": No autorizado");
    }

    @Override
    public BeanInterface create(BeanInterface oBean) throws Exception {
        throw new Exception("Error en Dao create de " + ob + ": No autorizado");
    }

    @Override
    public int update(BeanInterface oBean) throws Exception {
        throw new Exception("Error en Dao update de " + ob + ": No autorizado");
    }

    @Override
    public ArrayList<BeanInterface> getpage(int iRpp, int iPage, HashMap<String, String> hmOrder, Integer expand) throws Exception {
        throw new Exception("Error en Dao getpage de " + ob + ": No autorizado");

    }
 @Override
    public int getcountX(int idajena) throws Exception {//hacer private, consultar desde el pojo y no poder preguntar desde fuera del servidor
        //String strSQL = "";

        strSQL_getcount = "SELECT COUNT(id) FROM " + ob + " WHERE id_restaurante=" + idajena;

        //se cambia la query y se llama al getcount normal para devolverlo
        return super.getcount();
    }
    
    @Override
    public ArrayList<BeanInterface> getpageX(int iRpp, int iPage, int idajena, HashMap<String, String> hmOrder, Integer expand) throws Exception {
        strSQL_WhereGetpagex = " WHERE id_restaurante=?";
         return super.getpageX(iRpp, iPage, idajena,hmOrder, expand);

    }
}
