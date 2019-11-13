package Actions.Profesor;

import static Complementos.Operaciones.ERROR;
import static Complementos.Operaciones.SUCCESS;
import entitys.HibernateUtil;
import entitys.Profesor;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.hibernate.Session;
import xml.Examen;
import xml.XMLActions;

/**
 *
 * @author RodrigoSalazar
 */
public class AgregaExamen {
    private String nombre;
    private int idProfesor;

    public int getIdProfesor() {
        return idProfesor;
    }

    public void setIdProfesor(int idProfesor) {
        this.idProfesor = idProfesor;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public String execute(){
        Session hibernateSession;
        hibernateSession = HibernateUtil.getSessionFactory().openSession();
        
        XMLActions xml = new XMLActions();
        
        Profesor profesor = (Profesor)hibernateSession.load(Profesor.class, this.idProfesor);
        String rutaExamen = profesor.getRutaXmlexamen();
        
        List listaExamen = xml.cargarXmlExamenes(rutaExamen);
        ArrayList<Examen> examenes = xml.convierteList2ArrayListExamenAgregado(listaExamen);
        
        Examen examen = new Examen();
        
        Date fecha = new Date();
        
        String fechaString = "" + fecha.getDay() + "-" + fecha.getMonth() + "-" + fecha.getYear();
        
        examen.setNumero(Integer.toString(examenes.size() + 1));
        examen.setNombre(this.nombre);
        examen.setFecha(fechaString);
        examen.setEjercicios(xml.generaArregloEjercicios());
        examen.setPreguntas(xml.generaArregloPreguntas());
        
        examenes.add(examen);
        
        if(xml.guardarXMLExamenAgregado(examenes)){
            return SUCCESS;
        }else{
            return ERROR;
        }
    }
}