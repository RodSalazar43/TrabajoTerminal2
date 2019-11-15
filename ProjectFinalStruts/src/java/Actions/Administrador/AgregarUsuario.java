package Actions.Administrador;

import entitys.Usuario;
import entitys.Profesor;
import entitys.Alumno;
import static Complementos.Operaciones.*;
import entitys.Grupo;
import entitys.HibernateUtil;
import java.io.Serializable;
import org.hibernate.Session;
import org.hibernate.Transaction;
import entitys.Tipo;
import xml.XMLActions;
import Complementos.cifrarContrasenas;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.HashSet;
import java.util.Set;
import org.hibernate.Query;

/**
 *
 * @author RodrigoSalazar
 */

public class AgregarUsuario implements Serializable {
    
    //public static final String SUCCESS = "success";
    
    private int tipousuario;
    private String nombres;
    private String apellidoPat;
    private String apellidoMat;
    private String nombreUsuario;
    private String contrasena;

    public int getTipousuario() {
        return tipousuario;
    }

    public void setTipousuario(int tipousuario) {
        this.tipousuario = tipousuario;
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
    
    public String execute() throws UnsupportedEncodingException, IOException{
        Session hibernateSession;
        hibernateSession = HibernateUtil.getSessionFactory().openSession(); 
        Transaction t = hibernateSession.beginTransaction();   
        
        cifrarContrasenas c = new cifrarContrasenas();
        
        XMLActions xml = new XMLActions();
        
        //Para obtener el último registro en la tabla usuarios
        Query query = hibernateSession.createQuery("from Usuario order by idUsuario DESC");
        query.setMaxResults(1);
        Usuario u = (Usuario)query.uniqueResult();
        int idLast = u.getIdUsuario() + 1;
        
        Grupo grupo = new Grupo("",2019,"","");
        
        Set grupos = new HashSet(0);
        Profesor profe = new Profesor("/xml/preguntas/preguntas" + idLast + ".xml", "/xml/ejercicios/ejercicios" + idLast + ".xml", "/xml/examenes/examenes" + idLast + ".xml", grupos);
        grupo.setProfesor(profe);
        
        Alumno alum = new Alumno(grupo, "/xml/respuestas/respuestas" + idLast + ".xml");
        
        Tipo tu = (Tipo)hibernateSession.load(Tipo.class, this.tipousuario);
        Usuario user = new Usuario(tu, this.nombres, this.apellidoPat, this.apellidoMat, this.nombreUsuario, c.encriptar(this.contrasena));
        
        profe.setUsuario(user);
        
        alum.setUsuario(user);
        
        user.setAlumno(alum);
        user.setProfesor(profe);
        
        
        if(this.tipousuario == 2){ //profesor
            if(xml.crearXMLExamen(idLast)){
                System.out.println("XML Examen creado");
            }
            else{
                System.out.println("No lo cree jeje");
            }
            
            if(xml.crearXMLPregunta(idLast)){
                System.out.println("XML Preguntas creado");
            }
            else{
                System.out.println("No lo cree jeje");
            }
            
            if(xml.crearXMLEjercicio(idLast)){
                System.out.println("XML Ejercicio creado");
            }
            else{
                System.out.println("No lo cree jeje");
            }
            hibernateSession.save(profe);
        }
        
        if(this.tipousuario == 3){ //Alumno
            if(xml.crearXMLRespuestas(idLast)){
                System.out.println("XML Ejercicio creado");
            }
            else{
                System.out.println("No lo cree jeje");
            }
            hibernateSession.save(profe);
            hibernateSession.save(grupo);
            hibernateSession.save(alum);
        }
        
        hibernateSession.save(user);
        t.commit();
        return SUCCESS;
    }    
}