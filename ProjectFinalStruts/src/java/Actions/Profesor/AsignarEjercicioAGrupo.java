package Actions.Profesor;

import entitys.Grupo;
import entitys.HibernateUtil;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Session;
import xml.EjerciciosAsignados;
import xml.ExamenesAsignados;
import xml.PreguntasAsignadas;
import xml.XMLActions;
import static Complementos.Operaciones.*;

/**
 *
 * @author RodrigoSalazar
 */
public class AsignarEjercicioAGrupo {
    private int numeroEjercicio;
    private String numerosEjercicios;   

    public String getNumerosEjercicios() {
        return numerosEjercicios;
    }

    public void setNumerosEjercicios(String numerosEjercicios) {
        this.numerosEjercicios = numerosEjercicios;
    }
    private int idGrupo;

    public int getNumeroEjercicio() {
        return numeroEjercicio;
    }

    public void setNumeroEjercicio(int numeroEjercicio) {
        this.numeroEjercicio = numeroEjercicio;
    }

    public int getIdGrupo() {
        return idGrupo;
    }

    public void setIdGrupo(int idGrupo) {
        this.idGrupo = idGrupo;
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
        System.out.println("asignar ejercicio a gupo " + this.numerosEjercicios + " " + this.idGrupo);
        String[] numeros = this.numerosEjercicios.split(",");
        
        for(int i = 0; i < numeros.length; i++){
            EjerciciosAsignados ea = new EjerciciosAsignados();
            
            ea.setNumeroEjercicio(Integer.parseInt(numeros[i]));
            ea.setNumeroAlumno(0);
            ea.setGrupoCompleto("si");
            ea.setIdGrupo(this.idGrupo);
            
            datosEjercicios.add(ea);
        }
        
        if(xml.guardarXmlAsignados(datosExamenes, datosEjercicios, datosPreguntas, ruta)){
            return SUCCESS;
        }
        else{
            return ERROR;
        }
    }
}
