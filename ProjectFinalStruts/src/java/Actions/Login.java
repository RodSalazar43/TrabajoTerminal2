package Actions;

import static Complementos.Operaciones.LOGOUT;
import Complementos.cifrarContrasenas;
import com.opensymphony.xwork2.ActionSupport;
import entitys.Alumno;
import java.util.List;
import entitys.Usuario;
import entitys.Tipo;
import java.io.UnsupportedEncodingException;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.struts2.dispatcher.SessionMap;
import org.apache.struts2.interceptor.SessionAware;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Login extends ActionSupport implements SessionAware{
    private final String PROFESOR="profesor";
    private final String ALUMNO="alumno";
    private final String ADMINISTRADOR="administrador";
    String usuario, contra;
    int id;
    int idGrupo;
    private Usuario dato;
    private Tipo tipo;

    public int getIdGrupo() {
        return idGrupo;
    }

    public void setIdGrupo(int idGrupo) {
        this.idGrupo = idGrupo;
    }

    //Para añadir a la sesión
    private SessionMap<String, Object> sessionMap;

    public SessionMap<String, Object> getSessionMap() {
        return sessionMap;
    }
    
    @Override
    public void setSession(Map<String, Object> map) {
        sessionMap = (SessionMap<String, Object>) map;
    }
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getContra() {
        return contra;
    }

    public void setContra(String contra) {
        this.contra = contra;
    }

    public Login() {
    }

    @Override
    public String execute() {
        if(this.checkUser()){
            switch(tipo.getIdTipo()){
                case 1:
                    return ADMINISTRADOR;
                case 2:
                    return PROFESOR;
                case 3:
                    return ALUMNO;
                default:
                    return NONE;
            }
        }
        return NONE;
    }

    private boolean checkUser() {
        SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();    //recupero la session factory de hibernate
        Session session = sessionFactory.openSession();            //creo la session y la abro de hibernate
        session.beginTransaction();                              //comienzo la transaccion de hibernate
        Query query = session.createQuery("from Usuario where NombreUsuario=:username and contrasena=:password");  //query en hql
        cifrarContrasenas cc=new cifrarContrasenas();
        String cifrado="";
        try {
            cifrado=cc.encriptar(contra);
        } catch (UnsupportedEncodingException ex) {
            Logger.getLogger(Login.class.getName()).log(Level.SEVERE, null, ex);
        }
        query.setString("username", usuario);  //meto los parametros
        query.setString("password", cifrado);
        System.out.println("Se obtuvieron "+query.list().size());
        List list = query.list();    //creo la lista de los objetos obtenidos
        if (list.size() == 1) { //si solo es uno sucess
            dato = (Usuario) query.uniqueResult();  //obtengo ese usuario que obtuve
            id = dato.getIdUsuario();
            tipo = dato.getTipo();           //otengo el tipo de usuario            
            
            if(tipo.getIdTipo() == 3){
                Alumno alumno = (Alumno)session.load(Alumno.class, id);
                idGrupo = alumno.getGrupo().getIdGrupo();
            }
            
            sessionMap.put("idUsuario", id);        //Para agregar el usuario a la sesión
            return true;

        } else {
            return false;
        }
    }
    
    public String Logout(){
        
        sessionMap.remove("idUsuario");
        sessionMap.invalidate();
        
        return LOGOUT;
    }
}
