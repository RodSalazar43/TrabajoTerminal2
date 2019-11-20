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
public class AgregarComentarioPregunta {
    private int numeroPregunta;
    private String comentario;
    private int idAlumno;

    public int getNumeroPregunta() {
        return numeroPregunta;
    }

    public void setNumeroPregunta(int numeroPregunta) {
        this.numeroPregunta = numeroPregunta;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public int getIdAlumno() {
        return idAlumno;
    }

    public void setIdAlumno(int idAlumno) {
        this.idAlumno = idAlumno;
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
        
        Comentario comentario = new Comentario();
        
        comentario.setNumeroEjercicio(0);
        comentario.setNumeroExamen(0);
        comentario.setNumeroPregunta(this.numeroPregunta);
        comentario.setComentario(this.comentario);
        
        datosComentarios.add(comentario);
        
        if(xml.guardarXmlCalificaciones(datosEjercicios, datosPreguntas, datosComentarios, ruta)){
            return SUCCESS;
        }
        else{
            return ERROR;
        }
        
    }
}
