/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.service.specificServiceImplementation_1;


import javax.servlet.http.HttpServletRequest;
import net.daw.service.genericServiceImplementation.GenericServiceImplementation;
import net.daw.service.publicServiceInterface.ServiceInterface;

public class FacturaService_1 extends GenericServiceImplementation implements ServiceInterface {

    public FacturaService_1(HttpServletRequest oRequest) {
        super(oRequest);
        ob = oRequest.getParameter("ob");
        //oUsuarioBeanSession = (UsuarioBean) oRequest.getSession().getAttribute("user");
    }

    

//    public ReplyBean getpageXusuario() throws Exception {
//        ReplyBean oReplyBean;
//        ConnectionInterface oConnectionPool = null;
//        Connection oConnection;
//        try {
//            Integer id_usuario = Integer.parseInt(oRequest.getParameter("id"));
//            Integer iRpp = Integer.parseInt(oRequest.getParameter("rpp"));
//            Integer iPage = Integer.parseInt(oRequest.getParameter("page"));
//            oConnectionPool = ConnectionFactory.getConnection(ConnectionConstants.connectionPool);
//            oConnection = oConnectionPool.newConnection();
//            FacturaDao_1 oFacturaDao = new FacturaDao_1(oConnection, ob, oUsuarioBeanSession);
//            ArrayList<FacturaBean> alLineaBean = oFacturaDao.getpageXusuario(iRpp, iPage, id_usuario, 1);
//            Gson oGson = new Gson();
//            oReplyBean = new ReplyBean(200, oGson.toJson(alLineaBean));
//        } catch (Exception ex) {
//            throw new Exception("ERROR: Service level: getLineaFactura method: " + ob + " object" + ex.getMessage(), ex);
//        } finally {
//            oConnectionPool.disposeConnection();
//        }
//        return oReplyBean;
//
//    }
}