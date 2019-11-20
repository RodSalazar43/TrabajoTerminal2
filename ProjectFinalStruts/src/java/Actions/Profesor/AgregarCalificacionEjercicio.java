package Actions.Profesor;

import entitys.Alumno;
import entitys.HibernateUtil;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Session;
import xml.Comentario;
import xml.EjercicioCalificado;
import xml.PreguntaCalificada;
import xml.XMLActions;
import static Complementos.Operaciones.*;

/**
 *
 * @author RodrigoSalazar
 */
public class AgregarCalificacionEjercicio {
    private int numeroEjercicio;
    private String calificacion;
    private int idAlumno;

    public int getIdAlumno() {
        return idAlumno;
    }

    public void setIdAlumno(int idAlumno) {
        this.idAlumno = idAlumno;
    }

    public int getNumeroEjercicio() {
        return numeroEjercicio;
    }

    public void setNumeroEjercicio(int numeroEjercicio) {
        this.numeroEjercicio = numeroEjercicio;
    }

    public String getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(String calificacion) {
        this.calificacion = calificacion;
    }
    
    public String execute(){
        Session hibernateSession;
        hibernateSession = HibernateUtil.getSessionFactory().openSession();
        
        Alumno alumno = (Alumno)hibernateSession.load(Alumno.class, this.idAlumno);
        String ruta = alumno.getRutaXmlcalificaciones();
        
        XMLActions xml = new XMLActions();

        List ejercicios = xml.cargarXmlEjerciciosCalificados(ruta);
        List preguntas = xml.cargarXmlPreguntasCalificadas(ruta);
        List comentarios = xml.cargarXmlComentarios(ruta);
        
        ArrayList<EjercicioCalificado> datosEjercicios = xml.convierte2ArrayListEjerciciosCalificados(ejercicios);
        ArrayList<PreguntaCalificada> datosPreguntas = xml.convierte2ArrayListPreguntasCalificadas(preguntas);
        ArrayList<Comentario> datosComentarios = xml.convierte2ArrayListComentarios(comentarios);
        
        EjercicioCalificado nuevoEjercicio = new EjercicioCalificado();
        
        nuevoEjercicio.setNumeroEjercicio(this.numeroEjercicio);
        nuevoEjercicio.setCalificacion(this.calificacion);
        
        datosEjercicios.add(nuevoEjercicio);
        
        if(xml.guardarXmlCalificaciones(datosEjercicios, datosPreguntas, datosComentarios, ruta)){
            return SUCCESS;
        }
        else{
            return ERROR;
        }
        
    }
}
