function creaEjercicio(){
    var muestra=document.getElementById("opcion").selectedOptions[0].attributes.value;
    console.log(muestra.value)
    var formulario="";
    if(muestra.value==="Linea"){
        formulario+="<div id='formulario' ></div>"
    }else if(muestra.value==="DAD"){
        formulario+="<div class='contenido-grande alert-secondary'>"
        formulario+="<div class='card-header'>"
          formulario+="<h3 class='text-center'>Ingresa los datos del nuevo ejercicio a agregar</h3>"
        formulario+="</div>"
          formulario+="<div class='card-body'>"
              formulario+="<label class='font-weight-bold'>Nombre del ejercicio:</label>"
              formulario+="<input class='form-control border-dark' type='text' name='nombre' value=''/ required>"
              formulario+="<label class='font-weight-bold'>Ingresa las instrucciones para el alumno:</label>"
              formulario+="<input class='form-control border-dark' type='nombre' name='instruccion' value='' required/>"
              formulario+="<label class='font-italic font-weight-bold text-uppercase'>Ingresa las opciones para que el alumno elija</label><br>"
              formulario+="<center>"
                formulario+="<label class='font-weight-bold'>"
                  formulario+="Opcion 1:"
                formulario+="<input class='form-control border-dark' type='text' name='opcion1' value='' required/>"
                formulario+="</label>"
                formulario+="<label class='font-weight-bold'>"
                  formulario+="Opcion 2:"
                formulario+="<input class='form-control border-dark' type='text' name='opcion2' value='' required/>"
                formulario+="</label>"
                formulario+="<label class='font-weight-bold'>"
                  formulario+="Opcion 3:"
                formulario+="<input class='form-control border-dark' type='text' name='opcion3' value='' required/>"
                formulario+="</label>"
                formulario+="<label class='font-weight-bold'>"
                  formulario+="Opcion 4:"
                formulario+="<input class='form-control border-dark' type='text' name='opcion4' value='' required/>"
                formulario+="</label><br>"
              formulario+="</center>"
              formulario+="<label class='font-weight-bold'>Ingresa el resultado correcto: </label>"
              formulario+="<input class='form-control border-dark' placeholder='1,2,3,4 -> el orden de la respuesta' type='text' name='resultado' value='' required/>"
              formulario+="<br>"
              formulario+="<button class='btn btn-success form-control' >Guardar</button>"
              formulario+="<br><br>"
            formulario+="</div> </div>"
                }
    document.getElementById("tipo").innerHTML=formulario;
}

