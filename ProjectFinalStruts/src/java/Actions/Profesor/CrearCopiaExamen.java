package Actions.Profesor;

import entitys.HibernateUtil;
import entitys.Profesor;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.Transaction;
import xml.XMLActions;
import static Complementos.Operaciones.SUCCESS;
import static Complementos.Operaciones.ERROR;
import java.util.Date;
import xml.Examen;

/**
 *
 * @author RodrigoSalazar
 */
public class CrearCopiaExamen {
    private int idProfesor;
    private int numeroExamen;

    public int getNumeroExamen() {
        return numeroExamen;
    }

    public void setNumeroExamen(int numeroExamen) {
        this.numeroExamen = numeroExamen;
    }

    public int getIdProfesor() {
        return idProfesor;
    }

    public void setIdProfesor(int idProfesor) {
        this.idProfesor = idProfesor;
    }

    public String execute(){
        Session hibernateSession;
        hibernateSession = HibernateUtil.getSessionFactory().openSession(); 
        Transaction t = hibernateSession.beginTransaction();
        
        Examen examen = new Examen();
        XMLActions xml = new XMLActions();
        
        Profesor profesor = (Profesor)hibernateSession.load(Profesor.class, this.idProfesor);
        String ruta = profesor.getRutaXmlexamen();
        
        List listaExamen = xml.cargarXmlExamenes(ruta);
        ArrayList<Examen> examenes = xml.convierteList2ArrayListExamenAgregado(listaExamen);
        
        Examen original = examenes.get(this.numeroExamen);
        
        examen.setNumero(Integer.toString(listaExamen.size() + 1));
        examen.setNombre(original.getNombre());
        
        Date fecha = new Date();
        
        String fechaString = "" + fecha.getDay() + "-" + fecha.getMonth() + "-" + fecha.getYear();
        
        examen.setFecha(fechaString);
        
        examen.setEjercicios(original.getEjercicios());
        examen.setPreguntas(original.getPreguntas());
        
        examenes.add(examen);
        
        if(xml.guardarXMLExamenAgregado(examenes)){
            return SUCCESS;
        }else{
            return ERROR;
        }
    }
}
