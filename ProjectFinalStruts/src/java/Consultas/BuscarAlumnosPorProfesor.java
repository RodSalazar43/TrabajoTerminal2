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
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Objects;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Query;

/**
 *
 * @author RodrigoSalazar
 */
public class BuscarAlumnosPorProfesor {
    private int idProfesor;

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
        
        String hql = "FROM Grupo";
        Query query = hibernateSession.createQuery(hql);
        Iterator results = query.iterate();
        
        JSONObject raiz = new JSONObject();
        JSONObject obj = new JSONObject();
        
        int contador = 0;
        
        ArrayList<Integer> idGrupos = new ArrayList<>();
        while(results.hasNext()){
            Grupo grupoActual = (Grupo)results.next();
            
            if(this.idProfesor == grupoActual.getProfesor().getIdUsuario()){
                idGrupos.add(grupoActual.getIdGrupo());
            }
        }
        
        hql = "FROM Alumno";
        query = hibernateSession.createQuery(hql);
        results = query.iterate();
        while(results.hasNext()){
            Alumno alumnoActual = (Alumno)results.next();
            
            for(int i = 0; i < idGrupos.size(); i++){
                
                if(Objects.equals(idGrupos.get(i), alumnoActual.getGrupo().getIdGrupo())){
                    Usuario usuario = (Usuario)hibernateSession.load(Usuario.class, alumnoActual.getIdUsuario());
                    Grupo grupo = (Grupo)hibernateSession.load(Grupo.class, idGrupos.get(i));
                    
                    JSONObject innerObj = new JSONObject();

                    innerObj.put("nombre", usuario.getNombre());
                    innerObj.put("id", usuario.getIdUsuario());
                    innerObj.put("apPaterno", usuario.getApPaterno());
                    innerObj.put("apMaterno", usuario.getApMat());
                    innerObj.put("grupo", grupo.getNombre());
                    innerObj.put("ano", grupo.getAno());
                    innerObj.put("turno", grupo.getTurno());

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
           
            FileWriter file = new FileWriter(ServletActionContext.getServletContext().getRealPath("/json/resultadoAlumnosPorProfesor.json"));
            file.write(raiz.toJSONString());
            file.flush();
            file.close();
        
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return SUCCESS;
    }
}
