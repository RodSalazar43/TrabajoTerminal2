package Actions.Profesor;

import entitys.HibernateUtil;
import entitys.Profesor;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.Transaction;
import xml.Pregunta;
import xml.XMLActions;
import static Complementos.Operaciones.*;
import xml.Examen;

/**
 *
 * @author RodrigoSalazar
 */
public class EliminarExamen {
    private int numero;
    private int idProfesor;

    public int getIdProfesor() {
        return idProfesor;
    }

    public void setIdProfesor(int idProfesor) {
        this.idProfesor = idProfesor;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }
    
    public String execute(){
        Session hibernateSession;
        hibernateSession = HibernateUtil.getSessionFactory().openSession(); 
        Transaction t = hibernateSession.beginTransaction();
        
        Profesor profesor = (Profesor)hibernateSession.load(Profesor.class, this.idProfesor);
        String ruta = profesor.getRutaXmlexamen();
        
        XMLActions xml = new XMLActions();
        
        List listaExamen = xml.cargarXmlExamenes(ruta);
        ArrayList<Examen> examenes = xml.convierteList2ArrayListExamenAgregado(listaExamen);
        
        examenes = xml.eliminaExamen(examenes, this.numero);
        
        if(xml.guardarXMLExamenAgregado(examenes)){
            return SUCCESS;
        }
        else{
            return ERROR;
        }        
    }
}
