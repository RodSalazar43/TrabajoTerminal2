package Actions.Profesor;

import static Complementos.Operaciones.ERROR;
import static Complementos.Operaciones.SUCCESS;
import entitys.Grupo;
import entitys.HibernateUtil;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Session;
import xml.EjerciciosAsignados;
import xml.ExamenesAsignados;
import xml.PreguntasAsignadas;
import xml.XMLActions;

/**
 *
 * @author RodrigoSalazar
 */

public class AsignarExamenAAlumnos {
    private String numerosAlumnos;
    private String numerosExamenes;
    private int idGrupo;
    private int numeroExamen;

    public String getNumerosExamenes() {
        return numerosExamenes;
    }

    public void setNumerosExamenes(String numerosExamenes) {
        this.numerosExamenes = numerosExamenes;
    }

    public String getNumerosAlumnos() {
        return numerosAlumnos;
    }

    public void setNumerosAlumnos(String numerosAlumnos) {
        this.numerosAlumnos = numerosAlumnos;
    }

    public int getIdGrupo() {
        return idGrupo;
    }

    public void setIdGrupo(int idGrupo) {
        this.idGrupo = idGrupo;
    }

    public int getNumeroExamen() {
        return numeroExamen;
    }

    public void setNumeroExamen(int numeroExamen) {
        this.numeroExamen = numeroExamen;
    }
    
    public String execute(){
        Session hibernateSession;
        hibernateSession = HibernateUtil.getSessionFactory().openSession(); 

        XMLActions xml = new XMLActions();
        
        Grupo grupo = (Grupo)hibernateSession.load(Grupo.class, this.idGrupo);
        String ruta = grupo.getRutaXmlasignados();
        
        List examenes = xml.cargarXmlExamenesAsignados(ruta);
        List ejercicios = xml.cargarXmlEjerciciosAsignados(ruta);
        List preguntas = xml.cargarXmlPreguntasAsignadas(ruta);
        
        ArrayList<ExamenesAsignados> datosExamenes = xml.convierte2ArrayListExamenesAsignados(examenes);
        ArrayList<EjerciciosAsignados> datosEjercicios = xml.convierte2ArrayListEjerciciosAsignados(ejercicios);
        ArrayList<PreguntasAsignadas> datosPreguntas = xml.convierte2ArrayListPreguntasAsignadas(preguntas);
        System.out.println("Valores recibidos");
        System.out.println("alumno "+this.numerosAlumnos );
        System.out.println("examenes: "+this.numerosExamenes);
        System.out.println("grupo: "+this.idGrupo);
        String cachos[] = this.numerosAlumnos.split(",");
        String numeros[] = this.numerosExamenes.split(",");
        
        for (String cacho : cachos) {
            for(String numero: numeros){
                ExamenesAsignados ea = new ExamenesAsignados();
                System.out.println("un par de zapatos");
                ea.setGrupoCompleto("no");
                ea.setIdGrupo(this.idGrupo);
                System.out.println("Alumno:"+cacho);
                ea.setNumeroAlumno(Integer.parseInt(cacho));
                ea.setNumeroExamen(Integer.parseInt(numero));

                datosExamenes.add(ea);
            }
        }
        
        if(xml.guardarXmlAsignados(datosExamenes, datosEjercicios, datosPreguntas, ruta)){
            return SUCCESS;
        }
        else{
            return ERROR;
        }
    }
}
