package entitys;
// Generated 6/11/2019 10:35:44 PM by Hibernate Tools 4.3.1



/**
 * Usuario generated by hbm2java
 */
public class Usuario  implements java.io.Serializable {


     private Integer idUsuario;
     private Tipo tipo;
     private String nombre;
     private String apPaterno;
     private String apMat;
     private String nombreUsuario;
     private String contrasena;
     private Profesor profesor;
     private Alumno alumno;

    public Usuario() {
    }

    public Usuario(Tipo tipo, String nombre, String apPaterno, String apMat, String nombreUsuario, String contrasena, Profesor profesor, Alumno alumno) {
       this.tipo = tipo;
       this.nombre = nombre;
       this.apPaterno = apPaterno;
       this.apMat = apMat;
       this.nombreUsuario = nombreUsuario;
       this.contrasena = contrasena;
       this.profesor = profesor;
       this.alumno = alumno;
    }
   
    public Integer getIdUsuario() {
        return this.idUsuario;
    }
    
    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
    }
    public Tipo getTipo() {
        return this.tipo;
    }
    
    public void setTipo(Tipo tipo) {
        this.tipo = tipo;
    }
    public String getNombre() {
        return this.nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApPaterno() {
        return this.apPaterno;
    }
    
    public void setApPaterno(String apPaterno) {
        this.apPaterno = apPaterno;
    }
    public String getApMat() {
        return this.apMat;
    }
    
    public void setApMat(String apMat) {
        this.apMat = apMat;
    }
    public String getNombreUsuario() {
        return this.nombreUsuario;
    }
    
    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }
    public String getContrasena() {
        return this.contrasena;
    }
    
    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
    public Profesor getProfesor() {
        return this.profesor;
    }
    
    public void setProfesor(Profesor profesor) {
        this.profesor = profesor;
    }
    public Alumno getAlumno() {
        return this.alumno;
    }
    
    public void setAlumno(Alumno alumno) {
        this.alumno = alumno;
    }




}


