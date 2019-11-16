package Actions.Administrador;

import java.io.Serializable;
import static Complementos.Operaciones.*;
import Complementos.cifrarContrasenas;
import entitys.HibernateUtil;
import entitys.Usuario;
import java.io.UnsupportedEncodingException;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 *
 * @author RodrigoSalazar
 */
public class ModificarUsuario implements Serializable{
    
    private int id;
    private String nombres;
    private String apellidoPat;
    private String apellidoMat;
    private String nombreUsuario;
    private String contrasena;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidoPat() {
        return apellidoPat;
    }

    public void setApellidoPat(String apellidoPat) {
        this.apellidoPat = apellidoPat;
    }

    public String getApellidoMat() {
        return apellidoMat;
    }

    public void setApellidoMat(String apellidoMat) {
        this.apellidoMat = apellidoMat;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
    
    public String execute() throws UnsupportedEncodingException{
        Session hibernateSession;
        hibernateSession = HibernateUtil.getSessionFactory().openSession(); 
        Transaction t = hibernateSession.beginTransaction();
        
        Usuario user = (Usuario)hibernateSession.load(Usuario.class, this.id);
        
        cifrarContrasenas c = new cifrarContrasenas();
        user.setNombreUsuario(nombreUsuario);
        user.setNombre(nombres);
        user.setApPaterno(apellidoPat);
        user.setApMat(apellidoMat);
        user.setContrasena(c.encriptar(this.contrasena));
        
        hibernateSession.update(user);
        t.commit();
        
        return SUCCESS;
    }
    
    
    
}
