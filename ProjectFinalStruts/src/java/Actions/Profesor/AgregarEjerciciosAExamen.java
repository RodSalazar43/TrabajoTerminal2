package Actions.Profesor;

import entitys.HibernateUtil;
import org.hibernate.Session;

/**
 *
 * @author RodrigoSalazar
 */
public class AgregarEjerciciosAExamen {
    private int numeroEjercicios;
    private int idExamen;

    public int getNumeroEjercicios() {
        return numeroEjercicios;
    }

    public void setNumeroEjercicios(int numeroEjercicios) {
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
