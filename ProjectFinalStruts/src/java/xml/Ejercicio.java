package xml;

import java.io.Serializable;


public class Ejercicio implements Serializable{
    private String nombre,tipo,pregunta,resultado,numero,opcion1,opcion2,opcion3,opcion4;
    private String opcion5, opcion6, opcion7, opcion8;

    public String getOpcion5() {
        return opcion5;
    }

    public void setOpcion5(String opcion5) {
        this.opcion5 = opcion5;
    }

    public String getOpcion6() {
        return opcion6;
    }

    public void setOpcion6(String opcion6) {
        this.opcion6 = opcion6;
    }

    public String getOpcion7() {
        return opcion7;
    }

    public void setOpcion7(String opcion7) {
        this.opcion7 = opcion7;
    }

    public String getOpcion8() {
        return opcion8;
    }

    public void setOpcion8(String opcion8) {
        this.opcion8 = opcion8;
    }

    public Ejercicio(){   
    }
    public Ejercicio(String name){
        this.nombre=name;
    }

    public String getOpcion1() {
        return opcion1;
    }

    public void setOpcion1(String opcion1) {
        this.opcion1 = opcion1;
    }

    public String getOpcion2() {
        return opcion2;
    }

    public void setOpcion2(String opcion2) {
        this.opcion2 = opcion2;
    }

    public String getOpcion3() {
        return opcion3;
    }

    public void setOpcion3(String opcion3) {
        this.opcion3 = opcion3;
    }

    public String getOpcion4() {
        return opcion4;
    }

    public void setOpcion4(String opcion4) {
        this.opcion4 = opcion4;
    }
    
    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }
    
    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getPregunta() {
        return pregunta;
    }

    public void setPregunta(String pregunta) {
        this.pregunta = pregunta;
    }

    public String getResultado() {
        return resultado;
    }

    public void setResultado(String resultado) {
        this.resultado = resultado;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
}
