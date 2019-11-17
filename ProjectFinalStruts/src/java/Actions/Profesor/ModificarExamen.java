package Actions.Profesor;

import entitys.HibernateUtil;
import entitys.Profesor;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.Transaction;
import xml.XMLActions;
import static Complementos.Operaciones.*;
import xml.Ejercicio;
import xml.Examen;

/**
 *
 * @author RodrigoSalazar
 */
public class ModificarExamen {
    private int idProfesor;
    private String numero;
    private String nombre;
    

    
    public int getIdProfesor() {
        return idProfesor;
    }

    public void setIdProfesor(int idProfesor) {
        this.idProfesor = idProfesor;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
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
        Transaction t = hibernateSession.beginTransaction();
        
        Profesor profesor = (Profesor)hibernateSession.load(Profesor.class, this.idProfesor);
        String ruta = profesor.getRutaXmlexamen();
        
        XMLActions xml = new XMLActions();        
        List lista = xml.cargarXmlExamenes(ruta);
        
        ArrayList<Examen> examenes = xml.convierteList2ArrayListExamenAgregado(lista);
        Examen original = examenes.get(Integer.parseInt(this.numero) - 1);
        
        Examen examenModificado = new Examen();
        examenModificado.setNumero(original.getNumero());
        examenModificado.setNombre(this.nombre);
        examenModificado.setFecha(original.getFecha());
        examenModificado.setEjercicios(original.getEjercicios());
        examenModificado.setPreguntas(original.getPreguntas());
        
        examenes = xml.modificaExamen(examenes, numero, examenModificado);
        
        if(xml.guardarXMLExamenAgregado(examenes, ruta)){
            return SUCCESS;
        }else{
            return ERROR;
        }
    }
}
