package Actions.Administrador;

import entitys.HibernateUtil;
import entitys.Usuario;
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
    
    public String EliminarUsuario(){
        Session hibernateSession;
        hibernateSession = HibernateUtil.getSessionFactory().openSession(); 
        Transaction t = hibernateSession.beginTransaction(); 

        Usuario usuario = (Usuario)hibernateSession.createQuery("from Usuario where idUsuario=" + id);
        
        switch(usuario.getTipousuario().getIdTipoUsuario()){
            case 2: //profesor
                break;
            case 3: //alumno
                break;
        }
        
        //Ahora vamos a borrar el usuario de la tabla de usuarios, el switch anterior fue para borrar el usuario de las otras tablas.
        //Ahora vamos a checar el tipo de usuario que es, dependiendo de eso borramos de las tablas correspondientes
        //usuario.
        //login=(Login) hibernateSession.createQuery("from Login where userName='"+userName+"'AND password='"+password+"'").uniqueResult();
        
        /*Usuario usuario = (Usuario)hibernateSession.load(Usuario.class, id);
        //Para eliminar un usuario, checamos su tipo de usuario, después obtenemos el registro de la tabla dependiendo de su tipo 
        //y lo buscamos en la tabla de grupos, si está, lo borramos, también debemos de buscar sus registros en los xml's 
        usuario.getTipousuario().getIdTipoUsuario(); //para
        hibernateSession.delete(usuario);
        t.commit();*/
        return SUCCESS;
    }
    
}
