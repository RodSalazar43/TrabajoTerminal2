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
public class CrearCopiaEjercicio{
    private int idProfesor;
    private int numeroEjercicio;

    public int getNumeroEjercicio() {
        return numeroEjercicio;
    }

    public void setNumeroEjercicio(int numeroEjercicio) {
        this.numeroEjercicio = numeroEjercicio;
    }

    public int getIdProfesor() {
        return idProfesor;
    }

    public void setIdProfesor(int idProfesor) {
        this.idProfesor = idProfesor;
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
        
        Ejercicio eac = datos.get(this.numeroEjercicio - 1);
        
        ejercicio.setNumero(Integer.toString(listas.size() + 1));
        ejercicio.setPregunta(eac.getPregunta());
        ejercicio.setNombre(eac.getNombre());
        ejercicio.setOpcion1(eac.getOpcion1());
        ejercicio.setOpcion2(eac.getOpcion2());
        ejercicio.setOpcion3(eac.getOpcion3());
        ejercicio.setOpcion4(eac.getOpcion4());
        ejercicio.setOpcion5(eac.getOpcion5());
        ejercicio.setOpcion6(eac.getOpcion6());
        ejercicio.setOpcion7(eac.getOpcion7());
        ejercicio.setOpcion8(eac.getOpcion8());
        ejercicio.setResultado(eac.getResultado());
        ejercicio.setTipo(eac.getTipo());
        
        datos.add(ejercicio);
        
        if(xml.guardarXmlEjercicio(datos, ruta) == true){
            return SUCCESS;
        }
        else{
            return ERROR;
        }
    }
}
