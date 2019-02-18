/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.helper;

import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;

/**
 *
 * @author jaume monzonis
 */
public class UserActivationEmail {

    public static String respuesta = "";

    public static String sendActivationEmail(String email, String nombre, String token) throws Exception {
        // Recipient's email ID needs to be mentioned.
        String to = email;
        String from = "eatitburgerdaw@gmail.com";
        String pass = "eatit2019";

        String link = "http://localhost:8081/delivery/json?ob=usuario&op=activar&token=" + token;
//        String linkTexto = "http://localhost:8081/delivery/json?ob=usuario&op=activar&token=" + token;
        
        Properties properties = new Properties();
        
        properties.setProperty("mail.smtp.host", "smtp.gmail.com");
        properties.setProperty("mail.smtp.starttls.enable", "true");
        properties.setProperty("mail.smtp.port", "587");
        properties.setProperty("mail.smtp.user", from);
        properties.setProperty("mail.smtp.auth", "true");
        //Properties properties = System.getProperties();
        //properties.setProperty("mail.smtp.host", "localhost");
        //properties.setProperty("mail.smtp.port", "8081");
        Session session = Session.getDefaultInstance(properties);

        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

            message.setSubject("confirme su alta en EAT IT");
            message.setText("Bienvenido a la hamburguesería <span style='color:blue;'>EAT IT</span> " + nombre + ","
                    + "<br> Para finalizar su alta como usuario accede a este <a href='" + link + "'>enlace</a> "
                    + "<br><p style='font-size:11px;'>El equipo de Eat It</p>"
                    + "<br><br><small>Mensaje automático; por favor, no responda este correo</small>",
                    "utf-8", "html");
            // Transport.send(message);
            Transport t = session.getTransport("smtp");
            t.connect(from, pass);
            t.sendMessage(message, message.getAllRecipients());

            // Cierre.
            t.close();

            respuesta = "Mesaje enviado con exito";
        } catch (MessagingException mex) {
            respuesta = "Ha habido un error al enviar el mensaje: " + mex.getMessage();
            throw new Exception("Error en UserActivationEmail sendActivationEmail: " + mex.getMessage(), mex);

        }
        return respuesta;
    }

    public static String sendCofirmationEmail(String email, String nombre) throws Exception {
        // Recipient's email ID needs to be mentioned.
        String to = email;
        String from = "eatitburgerdaw@gmail.com";
        String pass = "eatit2019";

        Properties properties = new Properties();
        properties.setProperty("mail.smtp.host", "smtp.gmail.com");
        properties.setProperty("mail.smtp.starttls.enable", "true");
        properties.setProperty("mail.smtp.port", "587");
        properties.setProperty("mail.smtp.user", from);
        properties.setProperty("mail.smtp.auth", "true");
        //Properties properties = System.getProperties();
        //properties.setProperty("mail.smtp.host", "localhost");
        //properties.setProperty("mail.smtp.port", "8081");
        Session session = Session.getDefaultInstance(properties);

        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

            message.setSubject("Alta EAT IT correcta");
            message.setText("Hola " + nombre + " !!!"
                    + "<br>Te damos la bienvenida a <span style='color:blue;'>EAT IT</span>."
                    + "<br>Realiza tu pedido entrando en el siguiente <a href='http://localhost:8081/delivery/'>este enlace</a>"
                    + "<br><p style='font-size:11px;'>El equipo de Eat It</p>"
                    + "<br><br><small>Mensaje automático; por favor, no responda este correo</small>",
                    "utf-8", "html");
            // Transport.send(message);
            Transport t = session.getTransport("smtp");
            t.connect(from, pass);
            t.sendMessage(message, message.getAllRecipients());

            // Cierre.
            t.close();

            respuesta = "Mesaje enviado con exito";
        } catch (MessagingException mex) {
            respuesta = "Ha habido un error al enviar el mensaje: " + mex.getMessage();
            throw new Exception("Error en UserActivationEmail sendCofirmationEmail: " + mex.getMessage(), mex);

        }
        return respuesta;
    }

}
