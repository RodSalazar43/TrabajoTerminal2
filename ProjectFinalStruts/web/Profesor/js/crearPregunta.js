var tipo=""

function crearPregunta(){
    var formulario="";
    formulario+="<div class=' container card'>"
    formulario+="<div class='card-body'>"
    formulario+="<h5 class='card-title'>Llena el formulario para crear una pregunta</h5>"
    formulario+="<h6 class='card-subtitle'>Recuerda que las preguntas solo pueden ser asignados en examenes</h6>"
    formulario+="<hr>"
    formulario+="<div class='row form-group'>"
    formulario+="<div class='col-3'>"
    formulario+="<label class='card-text'>Ingresa el nombre de la pregunta: </label>"
    formulario+="</div>"
    formulario+="<div class='col'>"
    formulario+="<input class='form-control' type='text' name='nombre' placeholder='Pregunta fácil' value=''> </input>"
    formulario+="</div>"
    formulario+="</div>"
    
    formulario+="<div class='row form-group'>"
    formulario+="<div class='col-3'>"
    formulario+="<label class='card-text'>Ingresa la pregunta a hacer al alumno: </label>"
    formulario+="</div>"
    formulario+="<div class='col'>"
    formulario+="<input class='form-control' name='pregunta' placeholder='¿Cuánto es 2.54+1.39?' type='text' value=''> </input>"
    formulario+="</div>"
    formulario+="</div>"
    formulario+="<hr>"
    
    formulario+="<div class='row'>"
    formulario+="<div class='col-3'>"
    formulario+="<label class='card-text'>Selecciona el tipo de pregunta: </label>"
    formulario+="</div>"
    formulario+="<div class='col'>"
    formulario+= "<select id='opcion' class='custom-select' onchange='cambioTipoPregunta()'>"
            formulario+="<option value='---' >---</option>"
            formulario+="<option value='Operacion'>Operación matemática</option>"
            formulario+="<option value='VF'>Verdadero o falso</option>"
            formulario+="</select>"
    formulario+="</div>"
    formulario+="</div>"
    formulario+="<hr>"
    formulario+="<div id='restante'></div>"
    
    formulario+="</div>"
    
    formulario+="</div>"
    formulario+="</div>"
    
    document.getElementById("junto").innerHTML=formulario;
}

function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

function cambioTipoPregunta(){
    var muestra=document.getElementById("opcion").selectedOptions[0].attributes.value;
    //console.log(muestra.value)
    var restante="<div class='row'>"
    if(muestra.value==="Operacion"){
        restante+="<div class='col-3'>"
        restante+="<label class='card-text'>Ingresa la respuesta correcta de la pregunta: </label>"
        restante+="</div>"
        restante+="<div class='col'>"
        restante+="<input class='form-control' type='text' name='opera' value=''><br>"
        restante+="</div>";
    }else if(muestra.value==="VF"){
        restante+="<div class='col-3'>"
        restante+="<label class='card-text'>Selecciona la respuesta correcta de la pregunta: </label>"
        restante+="</div>"
        restante+="<div class='col'>"
        restante+="<input type='radio' class='form-check-input' name='true' value='verdadero'> Verdadero<br>"
        restante+="<input type='radio' class='form-check-input' name='false' value='falso'> Falso<br>"
        restante+="</div>";
        
    }
    restante+="</div>";
    restante+="<div class='row'>"
        restante+="<button class='btn btn-success btn-lg col-12' onclick='guardaPregunta()'>Crear pregunta</button>"
    restante+="</div>"
    
    tipo=muestra.value;
    document.getElementById("restante").innerHTML=restante;
}

function guardaPregunta(){
    var nombre=document.getElementsByName("nombre");
    var pregunta=document.getElementsByName("pregunta");
    var id=getParameterByName("id");
    console.log(tipo);
    console.log(nombre[0].value);
    console.log(pregunta[0].value)
    var determinado="default";
    if(tipo==="Operacion"){
        var opera=document.getElementsByName("opera");
        console.log(opera)
        let url = 'http://localhost:8080/ProjectFinalStruts/AgregarPregunta?idProfesor='+id+'&tipo='+tipo+'&nombre='+nombre[0].value+'&respuesta='+1+'&opcion1='+opera[0].value+'&opcion2='+determinado+'&indicaciones='+pregunta;
        //alert('URL:' + url);
        fetch(url).then(response => response.text()).then(data => {
            alert(data);    
        });
    }else if(tipo==="VF"){
        var verdadero=document.getElementsByName("true");
        var falso=document.getElementsByName("false");
        if(verdadero[0].checked===true&&falso[0].checked===false){
            let url = 'http://localhost:8080/ProjectFinalStruts/AgregarPregunta?idProfesor='+id+'&tipo='+tipo+'&nombre='+nombre[0].value+'&respuesta='+1+'&opcion1='+verdadero[0].value+'&opcion2='+falso[0].value+'&indicaciones='+pregunta;
        //alert('URL:' + url);
            fetch(url).then(response => response.text()).then(data => {
                alert(data);    
            });
        }else if(verdadero[0].checked===false&&falso[0].checked===true){
            let url = 'http://localhost:8080/ProjectFinalStruts/AgregarPregunta?idProfesor='+id+'&tipo='+tipo+'&nombre='+nombre[0].value+'&respuesta='+2+'&opcion1='+verdadero[0].value+'&opcion2='+falso[0].value+'&indicaciones='+pregunta;
        //alert('URL:' + url);
            fetch(url).then(response => response.text()).then(data => {
                alert(data);    
            });
        }else{
            alert("Debe seleccionar una opción");
        }        
        
    }
    
    //location.reload();
}
