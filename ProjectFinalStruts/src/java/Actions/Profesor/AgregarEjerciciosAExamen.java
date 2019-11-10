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
        return "";
    }
}
