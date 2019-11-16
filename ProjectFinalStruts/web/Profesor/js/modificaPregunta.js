function modificaPregunta(){
    cargarPregunta()
}
var tipo=""
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
        //console.log(docXML)
        var formulario="";
        var pregunta = docXML.getElementsByTagName("pregunta");
        var id=getParameterByName("id");
        var num=getParameterByName("numero");
        var nombre=pregunta[num-1].getAttribute("nombre");
        var tipol=pregunta[num-1].getAttribute("tipo")
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
        formulario+="<input class='form-control' type='text' name='nombre' placeholder='Pregunta fácil' value='"+nombre+"'> </input>"
        formulario+="</div>"
        formulario+="</div>"
        
        
        formulario+="<div class='row form-group'>"
        formulario+="<div class='col-3'>"
        formulario+="<label class='card-text'>Pregunta: </label>"
        formulario+="</div>"
        formulario+="<div class='col'>"
        formulario+="<input class='form-control' type='text' name='pregunta' placeholder='Pregunta fácil' value='"+ins+"' > </input>"
        formulario+="</div>"
        formulario+="</div>"
        if(tipol==="VF"){
            var nuevoTipo="Verdadero o Falso";
            formulario+="<div class='row form-group'>"
            formulario+="<div class='col-3'>"
            formulario+="<label class='card-text'>Tipo de pregunta: </label>"
            formulario+="</div>"
            formulario+="<div class='col'>"
            formulario+="<input class='form-control' type='text' name='tipo' placeholder='Pregunta fácil' value='"+nuevoTipo+"' readOnly> </input>"
            formulario+="</div>"
            formulario+="</div>"
            formulario+="<div class='row'> "
            formulario+="<div class='col-3'>"
            formulario+="<label class='card-text'>Selecciona la respuesta correcta de la pregunta: </label>"
            formulario+="</div>"
            formulario+="<div class='col'>"
            if(respuesta==="1"){
                formulario+="<input type='radio' class='form-check-input' name='true' value='verdadero' checked> Verdadero<br>"
                formulario+="<input type='radio' class='form-check-input' name='true' value='falso'> Falso<br>"
            }else if(respuesta==="2"){
                formulario+="<input type='radio' class='form-check-input' name='true' value='verdadero'> Verdadero<br>"
                formulario+="<input type='radio' class='form-check-input' name='true' value='falso' checked> Falso<br>"
            }
            formulario+="</div>";
            formulario+="</div>"
        }else if(tipol==="Operacion"){
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
        formulario+="<br><br>"
        formulario+="<button class='btn btn-lg btn-primary col-12' onclick='guardarCambios()'>Guardar cambios</button>"
        tipo=tipol;
      document.getElementById("modificaPregunta").innerHTML = formulario;
    }
    
    function guardarCambios(){
        var id=getParameterByName("id");
        var numero=getParameterByName("numero");
        var nombre=document.getElementsByName("nombre");
        var pregunta=document.getElementsByName("pregunta")
        if(tipo==="Operacion"){
            var opera=document.getElementsByName("opera");
        console.log(opera)
        let url = 'http://localhost:8080/ProjectFinalStruts/ModificarPregunta?idProfesor='+id+'&tipo='+tipo+'&nombre='+nombre[0].value+'&respuesta='+1+'&opcion1='+opera[0].value+'&opcion2='+determinado+'&indicaciones='+pregunta;
        //alert('URL:' + url);
        fetch(url).then(response => response.text()).then(data => {
            alert(data);    
        });
        }else if(tipo==="VF"){
            var verdadero=document.getElementsByName("true")            
            console.log(verdadero[0])
            console.log(verdadero[1])
            if(verdadero[0].checked===true){
                let url = 'http://localhost:8080/ProjectFinalStruts/ModificarPregunta?idProfesor='+id+'&tipo='+tipo+'&nombre='+nombre[0].value+'&respuesta='+1+'&opcion1='+verdadero[0].value+'&opcion2='+verdadero[1].value+'&indicaciones='+pregunta;
            //alert('URL:' + url);
                fetch(url).then(response => response.text()).then(data => {
                    alert(data);    
                });
            }else if(verdadero[1].checked===true){
                let url = 'http://localhost:8080/ProjectFinalStruts/ModificarPregunta?idProfesor='+id+'&tipo='+tipo+'&nombre='+nombre[0].value+'&respuesta='+2+'&opcion1='+verdadero[0].value+'&opcion2='+verdadero[1].value+'&indicaciones='+pregunta;
        //alert('URL:' + url);
                fetch(url).then(response => response.text()).then(data => {
                    alert(data);    
                });
            }
            
            
            
        }
        
    }
    
    
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

