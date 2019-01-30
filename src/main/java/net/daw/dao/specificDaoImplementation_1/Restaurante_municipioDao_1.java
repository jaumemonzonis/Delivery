/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao.specificDaoImplementation_1;

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
public class Restaurante_municipioDao_1 extends GenericDaoImplementation implements DaoInterface{
     public Restaurante_municipioDao_1(Connection oConnection, String ob,UsuarioBean oUsuarioBeanSession) {
        super(oConnection, ob, oUsuarioBeanSession);

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
      return super.getpageX(iRpp, iPage, idajena, hmOrder, expand);

    }
}
