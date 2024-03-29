package Actions.Profesor;

import static Complementos.Operaciones.ERROR;
import static Complementos.Operaciones.SUCCESS;
import entitys.HibernateUtil;
import entitys.Profesor;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.hibernate.Session;
import xml.Examen;
import xml.XMLActions;

/**
 *
 * @author RodrigoSalazar
 */
public class AgregarExamen {
    private String nombre;
    private int idProfesor;
    private int numero;
    private String numerosEjercicios;
    private String numerosPreguntas;

    public String getNumerosPreguntas() {
        return numerosPreguntas;
    }

    public void setNumerosPreguntas(String numerosPreguntas) {
        this.numerosPreguntas = numerosPreguntas;
    }

    public String getNumerosEjercicios() {
        return numerosEjercicios;
    }

    public void setNumerosEjercicios(String numerosEjercicios) {
        this.numerosEjercicios = numerosEjercicios;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public int getIdProfesor() {
        return idProfesor;
    }

    public void setIdProfesor(int idProfesor) {
        this.idProfesor = idProfesor;
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
        
        XMLActions xml = new XMLActions();
        
        Profesor profesor = (Profesor)hibernateSession.load(Profesor.class, this.idProfesor);
        String rutaExamen = profesor.getRutaXmlexamen();
        
        List listaExamen = xml.cargarXmlExamenes(rutaExamen);
        ArrayList<Examen> examenes = xml.convierteList2ArrayListExamenAgregado(listaExamen);
        
        Examen examen = new Examen();
        
        Date fecha = new Date();
        
        String fechaString = "" + fecha.getDate()+ "-" + fecha.getMonth() + "-" + fecha.getYear();
        //this.setNumero(examenes.size()+1);
        
        Examen nuevo = examenes.get(examenes.size() - 1);
        
        int nuevoNumero = Integer.parseInt(nuevo.getNumero()) + 1;
        
        examen.setNumero(Integer.toString(nuevoNumero));
        examen.setNombre(this.nombre);
        examen.setFecha(fechaString);
        examen.setEjercicios(xml.generaArregloEjercicios(this.numerosEjercicios));
        examen.setPreguntas(xml.generaArregloPreguntas(this.numerosPreguntas));
        System.out.println("El nuevo examen tendra el numero " + nuevoNumero + " agregar examen");
        examenes.add(examen);
        
        if(xml.guardarXMLExamenAgregado(examenes, rutaExamen)){
            return SUCCESS;
        }else{
            return ERROR;
        }
    }
}