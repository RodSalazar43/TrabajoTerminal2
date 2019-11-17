package Actions.Profesor;

import entitys.HibernateUtil;
import entitys.Profesor;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Session;
import xml.Examen;
import xml.XMLActions;
import static Complementos.Operaciones.*;
import xml.Ejercicio;

/**
 *
 * @author RodrigoSalazar
 */
public class AgregarEjerciciosAExamen {
    private String numeroEjercicios;
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

    public String getNumeroEjercicios() {
        return numeroEjercicios;
    }

    public void setNumeroEjercicios(String numeroEjercicios) {
        this.numeroEjercicios = numeroEjercicios;
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
        String[] numerosEjercicios = this.numeroEjercicios.split(",");
        
        int indicador = 0;
        
        for(int i = 0; i < examenes.size(); i++){
            if((this.numeroExamen - 1) == Integer.parseInt(examenes.get(i).getNumero())){
                System.out.println("Si coincide");
                indicador = i;
                System.out.println("La posición en el arreglo es " + indicador + "=" + i);
            }
        }
        
        Examen nuevo = examenes.get(indicador);
        ArrayList<Ejercicio> ejerciciosGuardados = nuevo.getEjercicios();
        nuevo.setEjercicios(xml.regresaEjerciciosA(ejerciciosGuardados, numerosEjercicios));
        examenes.remove(indicador);
        examenes.add(nuevo);
        
        if(xml.guardarXMLExamenAgregado(examenes, rutaExamen)){
            return SUCCESS;
        }else{
            return ERROR;
        }

    }
}
