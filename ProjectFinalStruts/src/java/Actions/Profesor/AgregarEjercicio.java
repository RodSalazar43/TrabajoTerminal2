package Actions.Profesor;

import entitys.HibernateUtil;
import entitys.Profesor;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.Transaction;
import xml.XMLActions;
import static Complementos.Operaciones.SUCCESS;
import static Complementos.Operaciones.ERROR;
import xml.Ejercicio;

/**
 *
 * @author RodrigoSalazar
 */
public class AgregarEjercicio {
    private int idProfesor;
    private String tipo;
    private String indicaciones;
    private String resultado;
    private String nombre;
    private String opcion1;
    private String opcion2;
    private String opcion3;
    private String opcion4;
    private String opcion5;
    private String opcion6;
    private String opcion7;
    private String opcion8;

    public String getOpcion5() {
        return opcion5;
    }

    public void setOpcion5(String opcion5) {
        this.opcion5 = opcion5;
    }

    public String getOpcion6() {
        return opcion6;
    }

    public void setOpcion6(String opcion6) {
        this.opcion6 = opcion6;
    }

    public String getOpcion7() {
        return opcion7;
    }

    public void setOpcion7(String opcion7) {
        this.opcion7 = opcion7;
    }

    public String getOpcion8() {
        return opcion8;
    }

    public void setOpcion8(String opcion8) {
        this.opcion8 = opcion8;
    }

    public String getOpcion3() {
        return opcion3;
    }

    public void setOpcion3(String opcion3) {
        this.opcion3 = opcion3;
    }

    public String getOpcion4() {
        return opcion4;
    }

    public void setOpcion4(String opcion4) {
        this.opcion4 = opcion4;
    }

    public int getIdProfesor() {
        return idProfesor;
    }

    public void setIdProfesor(int idProfesor) {
        this.idProfesor = idProfesor;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getIndicaciones() {
        return indicaciones;
    }

    public void setIndicaciones(String indicaciones) {
        this.indicaciones = indicaciones;
    }

    public String getResultado() {
        return resultado;
    }

    public void setResultado(String resultado) {
        this.resultado = resultado;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getOpcion1() {
        return opcion1;
    }

    public void setOpcion1(String opcion1) {
        this.opcion1 = opcion1;
    }

    public String getOpcion2() {
        return opcion2;
    }

    public void setOpcion2(String opcion2) {
        this.opcion2 = opcion2;
    }
    
    public String execute(){
        Session hibernateSession;
        hibernateSession = HibernateUtil.getSessionFactory().openSession(); 
        Transaction t = hibernateSession.beginTransaction();
        
        Ejercicio ejercicio = new Ejercicio();
        XMLActions xml = new XMLActions();
        
        Profesor profesor = (Profesor)hibernateSession.load(Profesor.class, this.idProfesor);
        String ruta = profesor.getRutaXmlejercicios();
        List listas = xml.cargarXmlEjercicios(ruta);
        ArrayList<Ejercicio> datos = xml.convierte2ArrayListEjercicios(listas);
        
        ejercicio.setNumero(Integer.toString(listas.size() + 1));
        ejercicio.setPregunta(indicaciones);
        ejercicio.setNombre(nombre);
        ejercicio.setOpcion1(opcion1);
        ejercicio.setOpcion2(opcion2);
        ejercicio.setOpcion3(opcion3);
        ejercicio.setOpcion4(opcion4);
        ejercicio.setOpcion5(opcion5);
        ejercicio.setOpcion6(opcion6);
        ejercicio.setOpcion7(opcion7);
        ejercicio.setOpcion8(opcion8);
        ejercicio.setResultado(resultado);
        ejercicio.setTipo(tipo);
        
        datos.add(ejercicio);
        
        if(xml.guardarXmlEjercicio(datos, ruta)){
            System.out.println("si guarda el ejercicio");
            return SUCCESS;
        }
        else{
            return ERROR;
        }
    }
}
