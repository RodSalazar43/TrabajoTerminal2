package Actions.Administrador;

import entitys.Profesor;
import java.util.HashSet;
import java.util.Set;
import static Complementos.Operaciones.*;
import entitys.Grupo;
import entitys.HibernateUtil;
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
    
    private int idGrupo;
    private String nombre;
    private int ano;
    private String turno;
    
    public int getIdGrupo() {
        return idGrupo;
    }

    public void setIdGrupo(int idGrupo) {
        this.idGrupo = idGrupo;
    }

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
        
        Grupo grupo = new Grupo();
        
        grupo.setNombre(nombre);
        grupo.setAno(ano);
        grupo.setTurno(turno);
        
        Set grupos = new HashSet(0);
        Profesor profe = new Profesor("/xml/preguntas/preguntas.xml", "/xml/ejercicios/ejercicios.xml", "/xml/examenes/examenes.xml", grupos);
        
        grupo.setProfesor(profe);
        
        Set alumnos = new HashSet(0);
        grupo.setAlumnos(alumnos);
        
        XMLActions xml = new XMLActions();
        
        if(xml.crearXMLAsignado(idLast)){
            grupo.setRutaXmlasignados("/xml/asignados/asignados"  + idLast + ".xml");
            System.out.println("XML creado");
        }
        else{
            System.out.println("No lo cree jeje");
        }
        
        hibernateSession.save(grupo);
        t.commit();
        
        return SUCCESS;
    }
}
