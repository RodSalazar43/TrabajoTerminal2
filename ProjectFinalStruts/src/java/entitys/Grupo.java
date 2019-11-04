package entitys;
// Generated 25/10/2019 05:16:54 AM by Hibernate Tools 4.3.1


import java.util.HashSet;
import java.util.Set;

/**
 * Grupo generated by hbm2java
 */
public class Grupo  implements java.io.Serializable {


     private Integer idGrupo;
     private Profesor profesor;
     private String nombre;
     private Integer ano;
     private String turno;
     private String RutaXMLAsignados;
     private Set alumnos = new HashSet(0);

    public Grupo() {
    }

    public String getRutaXMLAsignados() {
        return RutaXMLAsignados;
    }

    public void setRutaXMLAsignados(String RutaXMLAsignados) {
        this.RutaXMLAsignados = RutaXMLAsignados;
    }

    public Grupo(Profesor profesor) {
        this.profesor = profesor;
    }
    public Grupo(Profesor profesor, String nombre, Integer ano, String turno, Set alumnos) {
       this.profesor = profesor;
       this.nombre = nombre;
       this.ano = ano;
       this.turno = turno;
       this.alumnos = alumnos;
    }
   
    public Integer getIdGrupo() {
        return this.idGrupo;
    }
    
    public void setIdGrupo(Integer idGrupo) {
        this.idGrupo = idGrupo;
    }
    public Profesor getProfesor() {
        return this.profesor;
    }
    
    public void setProfesor(Profesor profesor) {
        this.profesor = profesor;
    }
    public String getNombre() {
        return this.nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public Integer getAno() {
        return this.ano;
    }
    
    public void setAno(Integer ano) {
        this.ano = ano;
    }
    public String getTurno() {
        return this.turno;
    }
    
    public void setTurno(String turno) {
        this.turno = turno;
    }
    public Set getAlumnos() {
        return this.alumnos;
    }
    
    public void setAlumnos(Set alumnos) {
        this.alumnos = alumnos;
    }




}


