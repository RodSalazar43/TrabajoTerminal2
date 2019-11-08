package Consultas;

import entitys.HibernateUtil;
import java.io.FileWriter;
import java.io.IOException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.json.simple.JSONObject;
import static Complementos.Operaciones.*;
import Complementos.cifrarContrasenas;
import entitys.Usuario;
import java.io.UnsupportedEncodingException;

/**
 *
 * @author RodrigoSalazar
 */
public class BuscarUnUsuario {
    private int idUsuario;

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }
    
    public String execute() throws UnsupportedEncodingException{
        Session hibernateSession;
        hibernateSession = HibernateUtil.getSessionFactory().openSession(); 
        Transaction t = hibernateSession.beginTransaction();
        cifrarContrasenas c = new cifrarContrasenas();
        
        Usuario usuario = (Usuario)hibernateSession.load(Usuario.class, this.idUsuario);
        
        JSONObject raiz = new JSONObject();
        JSONObject obj = new JSONObject();
        JSONObject innerObj = new JSONObject();
        
        innerObj.put("nombre", usuario.getNombre());
        innerObj.put("apellidoPat", usuario.getApPaterno());
        innerObj.put("apellidoMat", usuario.getApMat());
        innerObj.put("nombreUsuario", usuario.getNombreUsuario());
        
        String contrasena = c.desencriptar(usuario.getContrasena());
        innerObj.put("contrasena", contrasena);
        
        obj.put(usuario.getIdUsuario(), innerObj);
        raiz.put("id", obj);

        try{
            FileWriter file = new FileWriter("C:\\jars\\json\\resultadoConsulta.json");
            file.write(raiz.toJSONString());
            file.flush();
            file.close();
        
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return SUCCESS;
    }
}
