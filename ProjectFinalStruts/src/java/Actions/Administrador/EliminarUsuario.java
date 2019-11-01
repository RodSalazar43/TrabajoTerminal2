package Actions.Administrador;

import entitys.HibernateUtil;
import entitys.Usuario;
import entitys.Grupo;
import entitys.Profesor;
import entitys.Alumno;
import static Complementos.Operaciones.SUCCESS;
import java.io.Serializable;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 *
 * @author RodrigoSalazar
 */

public class EliminarUsuario implements Serializable{
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    public String execute(){
        Session hibernateSession;
        hibernateSession = HibernateUtil.getSessionFactory().openSession(); 
        Transaction t = hibernateSession.beginTransaction(); 

        Usuario usuario = (Usuario)hibernateSession.createQuery("from Usuario where idUsuario=" + this.id);
        
        switch(usuario.getTipousuario().getIdTipoUsuario()){
            case 2: //profesor
                Profesor profe = (Profesor)hibernateSession.createQuery("from Profesor where idUsuario="+ this.id); //Aquí le mando un usuario como parámetro del where
                
                Grupo grupo = (Grupo)hibernateSession.createQuery("from Grupo where profesor=" + profe);
                
                Profesor profe2 = new Profesor();
                grupo.setProfesor(profe2);
                
                hibernateSession.update(grupo);
                t.commit();
                
                hibernateSession.delete(profe);
                t.commit();
                
                break;
                
            case 3: //alumno
                Alumno alum = (Alumno)hibernateSession.load(Alumno.class, this.id);
                hibernateSession.delete(alum);
                t.commit();
                break;
        }
                
        hibernateSession.delete(usuario);
        t.commit();
        return SUCCESS;
    }
    
}
