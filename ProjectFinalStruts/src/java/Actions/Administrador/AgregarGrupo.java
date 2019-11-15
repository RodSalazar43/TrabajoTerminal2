package Actions.Administrador;

import entitys.Profesor;
import java.util.HashSet;
import java.util.Set;
import static Complementos.Operaciones.*;
import entitys.Alumno;
import entitys.Grupo;
import entitys.HibernateUtil;
import entitys.Usuario;
import java.io.IOException;
import java.io.Serializable;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import xml.XMLActions;

/**
 *
 * @author RodrigoSalazar
 */
public class AgregarGrupo implements Serializable{
    
    private String nombre;
    private int ano;
    private String turno;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public String getTurno() {
        return turno;
    }

    public void setTurno(String turno) {
        this.turno = turno;
    }

    public String execute() throws IOException{
        Session hibernateSession;
        hibernateSession = HibernateUtil.getSessionFactory().openSession(); 
        Transaction t = hibernateSession.beginTransaction();
        
        //Para obtener el último registro en la tabla grupos
        Query query = hibernateSession.createQuery("from Grupo order by idGrupo DESC");
        query.setMaxResults(1);
        Grupo gru = (Grupo)query.uniqueResult();
        int idLast = gru.getIdGrupo() + 1;
        
        XMLActions xml = new XMLActions();
        
        Grupo grupo = new Grupo();
        
        grupo.setNombre(nombre);
        grupo.setAno(ano);
        grupo.setTurno(turno);
        
        Set grupos = new HashSet(0);
        Set alumnos = new HashSet(0);
        Usuario user = new Usuario();
        Alumno alumno = new Alumno();
        
        Profesor profe = new Profesor("bandera", " ", " ", grupos);
        
        profe.setUsuario(user);
        profe.setGrupos(grupos);
        
        grupo.setProfesor(profe);
        grupo.setAlumnos(alumnos);
        
        user.setAlumno(alumno);
        user.setProfesor(profe);
        
        alumno.setGrupo(grupo);
        
        if(xml.crearXMLAsignado(idLast)){
            grupo.setRutaXmlasignados("/xml/asignados/asignados"  + idLast + ".xml");
            System.out.println("XML creado");
        }
        else{
            System.out.println("No lo cree jeje");
        }
        
        hibernateSession.save(profe);
        hibernateSession.save(grupo);
        t.commit();
        
        return SUCCESS;
    }
}
