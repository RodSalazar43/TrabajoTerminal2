package Actions.Profesor;

import entitys.HibernateUtil;
import entitys.Profesor;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Session;
import xml.Examen;
import xml.XMLActions;
import static Complementos.Operaciones.*;
import xml.Pregunta;

/**
 *
 * @author RodrigoSalazar
 */
public class AgregarPreguntasAExamen {
    private String numeroPreguntas;
    private String nombreExamen;
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

    public String getNumeroPreguntas() {
        return numeroPreguntas;
    }

    public void setNumeroPreguntas(String numeroPreguntas) {
        this.numeroPreguntas = numeroPreguntas;
    }

    public String getNombreExamen() {
        return nombreExamen;
    }

    public void setNombreExamen(String nombreExamen) {
        this.nombreExamen = nombreExamen;
    }
    public String execute(){
        Session hibernateSession;
        hibernateSession = HibernateUtil.getSessionFactory().openSession();
        
        XMLActions xml = new XMLActions();
        
        Profesor profesor = (Profesor)hibernateSession.load(Profesor.class, this.idProfesor);
        String rutaExamen = profesor.getRutaXmlexamen();
        
        List listaExamen = xml.cargarXmlExamenes(rutaExamen);
        ArrayList<Examen> examenes = xml.convierteList2ArrayListExamenAgregado(listaExamen);
        String[] numerosPreguntas = this.numeroPreguntas.split(",");
        
        int indicador = 0;
        
        for(int i = 0; i < examenes.size(); i++){
            if((this.numeroExamen - 1) == Integer.parseInt(examenes.get(i).getNumero())){
                indicador = i;
            }
        }    
        
        Examen nuevo = examenes.get(indicador);
        ArrayList<Pregunta> preguntasGuardadas = nuevo.getPreguntas();
        nuevo.setPreguntas(xml.regresaPreguntasA(preguntasGuardadas, numerosPreguntas));
        examenes.remove(indicador);
        examenes.add(nuevo);
        
        if(xml.guardarXMLExamenAgregado(examenes, rutaExamen)){
            return SUCCESS;
        }else{
            return ERROR;
        }
    }
}
