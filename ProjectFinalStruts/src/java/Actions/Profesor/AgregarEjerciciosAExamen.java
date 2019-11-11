package Actions.Profesor;

import entitys.HibernateUtil;
import entitys.Profesor;
import org.hibernate.Session;
import xml.XMLActions;

/**
 *
 * @author RodrigoSalazar
 */
public class AgregarEjerciciosAExamen {
    private String numeroEjercicios;
    private int idExamen;
    private int idProfesor;

    public int getIdProfesor() {
        return idProfesor;
    }

    public void setIdProfesor(int idProfesor) {
        this.idProfesor = idProfesor;
    }

    public String getNumeroEjercicios() {
        return numeroEjercicios;
    }

    public void setNumeroEjercicios(String numeroEjercicios) {
        this.numeroEjercicios = numeroEjercicios;
    }

    public int getIdExamen() {
        return idExamen;
    }

    public void setIdExamen(int idExamen) {
        this.idExamen = idExamen;
    }
    
    public String execute(){
        Session hibernateSession;
        hibernateSession = HibernateUtil.getSessionFactory().openSession();
        
        XMLActions xml = new XMLActions();
        
        Profesor profesor = (Profesor)hibernateSession.load(Profesor.class, this.idProfesor);
        String rutaExamen = profesor.getRutaXmlexamen();
        String rutaEjercicios = profesor.getRutaXmlejercicios();
        /*
        XMLActions xml = new XMLActions();
        
        Grupo grupo = (Grupo)hibernateSession.load(Grupo.class, this.idGrupo);
        String ruta = grupo.getRutaXmlasignados();
        
        List examenes = xml.cargarXmlExamenesAsignados(ruta);
        List ejercicios = xml.cargarXmlEjerciciosAsignados(ruta);
        List preguntas = xml.cargarXmlPreguntasAsignadas(ruta);
        
        ArrayList<ExamenesAsignados> datosExamenes = xml.convierte2ArrayListExamenesAsignados(examenes);
        ArrayList<EjerciciosAsignados> datosEjercicios = xml.convierte2ArrayListEjerciciosAsignados(ejercicios);
        ArrayList<PreguntasAsignadas> datosPreguntas = xml.convierte2ArrayListPreguntasAsignadas(preguntas);
        
        String cachos[] = this.numerosAlumnos.split(",");
        
        for (String cacho : cachos) {
            EjerciciosAsignados ea = new EjerciciosAsignados();
            
            ea.setGrupoCompleto("no");
            ea.setIdGrupo(this.idGrupo);
            ea.setNumeroAlumno(Integer.parseInt(cacho));
            ea.setNumeroEjercicio(this.numeroEjercicio);
            
            datosEjercicios.add(ea);
        }
        
        if(xml.guardarXmlAsignados(datosExamenes, datosEjercicios, datosPreguntas, ruta)){
            return SUCCESS;
        }
        else{
            return ERROR;
        }
        */
              
        return "";
    }
}
