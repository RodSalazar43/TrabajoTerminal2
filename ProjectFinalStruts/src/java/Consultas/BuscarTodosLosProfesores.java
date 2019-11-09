package Consultas;

import entitys.Usuario;
import entitys.HibernateUtil;
import java.io.FileWriter;
import java.io.IOException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.json.simple.JSONObject;
import static Complementos.Operaciones.*;
import entitys.Profesor;
import java.util.Iterator;
import org.hibernate.Query;

/**
 *
 * @author RodrigoSalazar
 */
public class BuscarTodosLosProfesores {
    
    public String execute(){
        Session hibernateSession;
        hibernateSession = HibernateUtil.getSessionFactory().openSession(); 
        Transaction t = hibernateSession.beginTransaction();
        
        JSONObject raiz = new JSONObject();
        JSONObject obj = new JSONObject();
        
        String hql = "FROM Profesor";
        Query query = hibernateSession.createQuery(hql);
        Iterator results = query.iterate();        
        int contador=0;
        while(results.hasNext()){
            Profesor profesor = (Profesor)results.next();
            Usuario usuario = (Usuario)hibernateSession.load(Usuario.class, profesor.getIdUsuario());
            
            JSONObject innerObj = new JSONObject();
            innerObj.put("nombre", usuario.getNombre());
            innerObj.put("id", profesor.getIdUsuario());
            obj.put(contador,innerObj);
            raiz.put("idProfesores", obj);
            contador++;
        }
        
        try{
            FileWriter file = new FileWriter("C:\\jars\\json\\resultadoConsultaProfesores.json");
            file.write(raiz.toJSONString());
            file.flush();
            file.close();
        
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return SUCCESS;
    }
}
