function verPregunta(){
    cargarPregunta()
}

function cargarPregunta() {
      var id=getParameterByName("id");
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        cargarXML(this);
      };
      xhr.open("GET", "../xml/preguntas/preguntas"+id+".xml", true);
      xhr.send();
    }
    
    function cargarXML(xml) {
        var docXML = xml.responseXML;
        console.log(docXML)
        var formulario="";
        var pregunta = docXML.getElementsByTagName("pregunta");
        var id=getParameterByName("id");
        var num=getParameterByName("numero");
        var nombre=pregunta[num-1].getAttribute("nombre");
        var tipo=pregunta[num-1].getAttribute("tipo")
        var ins=pregunta[num-1].getElementsByTagName("cuestionamiento")[0].textContent;
        var op1=pregunta[num-1].getElementsByTagName("opcion1")[0].textContent;
        var op2=pregunta[num-1].getElementsByTagName("opcion2")[0].textContent;
        var respuesta=pregunta[num-1].getElementsByTagName("respuesta")[0].textContent;
        
        formulario+="<div class=' container card bg-dark text-white' >"
        formulario+="<div class='card-body'>"
        formulario+="<h5 class='card-title'>Esta es la información de la pregunta</h5>"
        formulario+="<h6 class='card-subtitle'>Recuerda que las preguntas solo pueden ser asignados en examenes</h6>"
        formulario+="<hr>"
        
        
        formulario+="<div class='row form-group'>"
        formulario+="<div class='col-3'>"
        formulario+="<label class='card-text'>Nombre de la pregunta: </label>"
        formulario+="</div>"
        formulario+="<div class='col'>"
        formulario+="<input class='form-control' type='text' name='nombre' placeholder='Pregunta fácil' value='"+nombre+"' readOnly> </input>"
        formulario+="</div>"
        formulario+="</div>"
        
        
        formulario+="<div class='row form-group'>"
        formulario+="<div class='col-3'>"
        formulario+="<label class='card-text'>Pregunta: </label>"
        formulario+="</div>"
        formulario+="<div class='col'>"
        formulario+="<input class='form-control' type='text' name='nombre' placeholder='Pregunta fácil' value='"+ins+"' readOnly> </input>"
        formulario+="</div>"
        formulario+="</div>"
        if(tipo==="VF"){
            var nuevoTipo="Verdadero o Falso";
            formulario+="<div class='row form-group'>"
            formulario+="<div class='col-3'>"
            formulario+="<label class='card-text'>Tipo de pregunta: </label>"
            formulario+="</div>"
            formulario+="<div class='col'>"
            formulario+="<input class='form-control' type='text' name='nombre' placeholder='Pregunta fácil' value='"+nuevoTipo+"' readOnly> </input>"
            formulario+="</div>"
            formulario+="</div>"
            formulario+="<div class='row'> "
            formulario+="<div class='col-3'>"
            formulario+="<label class='card-text'>Selecciona la respuesta correcta de la pregunta: </label>"
            formulario+="</div>"
            formulario+="<div class='col'>"
            if(respuesta==="1"){
                formulario+="<input type='radio' class='form-check-input' name='true' value='verdadero' checked> Verdadero<br>"
                formulario+="<input type='radio' class='form-check-input' name='false' value='falso'> Falso<br>"
            }else if(respuesta==="2"){
                formulario+="<input type='radio' class='form-check-input' name='true' value='verdadero'> Verdadero<br>"
                formulario+="<input type='radio' class='form-check-input' name='false' value='falso' checked> Falso<br>"
            }
            formulario+="</div>";
            formulario+="</div>"
        }else if(tipo==="Operacion"){
            var nuevoTipo="Operación matemática"
            formulario+="<div class='row form-group'>"
            formulario+="<div class='col-3'>"
            formulario+="<label class='card-text'>Nombre de la pregunta: </label>"
            formulario+="</div>"
            formulario+="<div class='col'>"
            formulario+="<input class='form-control' type='text' name='nombre' placeholder='Pregunta fácil' value='"+nuevoTipo+"' readOnly> </input>"
            formulario+="</div>"
            formulario+="</div>"
            formulario+="<div class='row'>"
            formulario+="<div class='col-3'>"
            formulario+="<label class='card-text'>La respuesta correcta de la pregunta: </label>"
            formulario+="</div>"
            formulario+="<div class='col'>"
            formulario+="<input class='form-control' type='text' name='opera' value='"+op1+"'><br>"
            formulario+="</div>";
            formulario+="</div>"
        }
        
   
      document.getElementById("verPregunta").innerHTML = formulario;
    }
    
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

