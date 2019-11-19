package Consultas;

import entitys.HibernateUtil;
import java.io.FileWriter;
import java.io.IOException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.json.simple.JSONObject;
import static Complementos.Operaciones.*;
import entitys.Alumno;
import entitys.Grupo;
import entitys.Usuario;
import java.util.Iterator;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Query;

/**
 *
 * @author RodrigoSalazar
 */
public class BuscarAlumnosPorGrupo {
    private int idGrupo;

    public int getIdGrupo() {
        return idGrupo;
    }

    public void setIdGrupo(int idGrupo) {
        this.idGrupo = idGrupo;
    }

    public String execute(){
        Session hibernateSession;
        hibernateSession = HibernateUtil.getSessionFactory().openSession(); 
        Transaction t = hibernateSession.beginTransaction();
        
        String hql = "FROM Alumno";
        Query query = hibernateSession.createQuery(hql);
        Iterator results = query.iterate();
        
        JSONObject raiz = new JSONObject();
        JSONObject obj = new JSONObject();
        
        int contador = 0;
        
        while(results.hasNext()){
            Alumno alumnoActual = (Alumno)results.next();
            
            if(this.idGrupo == alumnoActual.getGrupo().getIdGrupo()){
                Usuario usuario = (Usuario)hibernateSession.load(Usuario.class, alumnoActual.getIdUsuario());
                System.out.println("El valor es " + usuario.getNombre());
                if(usuario.getNombre().equals(null)){
                    continue;
                }
                else{
                    JSONObject innerObj = new JSONObject();
                
                    innerObj.put("nombre", usuario.getNombre());
                    innerObj.put("Ap_Paterno", usuario.getApPaterno());
                    innerObj.put("Ap_Materno", usuario.getApMat());

                    obj.put(contador, innerObj);
                    raiz.put("idAlumno",obj);
                    contador++;
                }
                
            }
        }
        
        try{
            String hola=ServletActionContext.getServletContext().getRealPath("/json");
            System.out.println("***************************************************************");
            System.out.println(hola);
           
            FileWriter file = new FileWriter(ServletActionContext.getServletContext().getRealPath("/json/resultadoAlumnosPorGrupo.json"));
            file.write(raiz.toJSONString());
            file.flush();
            file.close();
        
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return SUCCESS;
    }
}
