package xml;

/**
 *
 * @author RodrigoSalazar
 */
public class Respuesta {
    int numeroEjercicio;
    int numeroPregunta;
    String respuestaEjercicio;
    String respuestaPregunta;

    public Respuesta() {
    }

    public int getNumeroEjercicio() {
        return numeroEjercicio;
    }

    public void setNumeroEjercicio(int numeroEjercicio) {
        this.numeroEjercicio = numeroEjercicio;
    }

    public int getNumeroPregunta() {
        return numeroPregunta;
    }

    public void setNumeroPregunta(int numeroPregunta) {
        this.numeroPregunta = numeroPregunta;
    }

    public String getRespuestaEjercicio() {
        return respuestaEjercicio;
    }

    public void setRespuestaEjercicio(String respuestaEjercicio) {
        this.respuestaEjercicio = respuestaEjercicio;
    }

    public String getRespuestaPregunta() {
        return respuestaPregunta;
    }

    public void setRespuestaPregunta(String respuestaPregunta) {
        this.respuestaPregunta = respuestaPregunta;
    }
    
    
}
