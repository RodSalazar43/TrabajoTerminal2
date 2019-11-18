package Consultas;

import entitys.HibernateUtil;
import java.io.FileWriter;
import java.io.IOException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.json.simple.JSONObject;
import static Complementos.Operaciones.*;
import entitys.Grupo;
import java.util.Iterator;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Query;

/**
 *
 * @author RodrigoSalazar
 */
public class BuscarGruposPorProfesor {
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
        
        while(results.hasNext()){
            Grupo grupoActual = (Grupo)results.next();
            
            if(this.idProfesor == grupoActual.getProfesor().getIdUsuario()){
                JSONObject innerObj = new JSONObject();
                innerObj.put("nombre", grupoActual.getNombre());
                innerObj.put("turno", grupoActual.getTurno());
                innerObj.put("ano", grupoActual.getAno());
                innerObj.put("id", grupoActual.getIdGrupo());
                
                obj.put(contador, innerObj);
                raiz.put("idGrupo",obj);
                contador++;
            }
        }
        
        try{
            String hola=ServletActionContext.getServletContext().getRealPath("/json");
            System.out.println("***************************************************************");
            System.out.println(hola);
           
            FileWriter file = new FileWriter(ServletActionContext.getServletContext().getRealPath("/json/resultadoConsultaGruposPorProfesor.json"));
            file.write(raiz.toJSONString());
            file.flush();
            file.close();
        
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return SUCCESS;
    }
}
