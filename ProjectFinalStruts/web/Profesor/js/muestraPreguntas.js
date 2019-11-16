function muestraPreguntas(){
    cargarTabla()
}

function cargarTabla() {
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
      var tabla="<table class='container table table-hover table-dark table-striped'>"
          tabla+="<thead>"
          tabla+="<tr>"
      tabla+="<th scope='col'>#</th>"
      tabla+="<th scope='col'>Nombre de la pregunta</th>"
      tabla+="<th scope='col'>Acciones</th>"
      tabla+="</tr>"
      tabla+="</thead>"
      tabla+="<tbody>"
      var pregunta = docXML.getElementsByTagName("pregunta");
      console.log(pregunta)
      for (var i = 0; i < pregunta.length; i++) {
        tabla += "<tr><th socpe='row'>";
        tabla += (i + 1);
        tabla += "</th><td>";
        tabla += pregunta[i].getAttribute("nombre");
        tabla += "</td>";
        tabla += "<td><a class='btn btn-primary col-4' onclick='redireccionaVerPregunta("+(i+1)+")'>Ver pregunta</a>";
        tabla += "<a class='btn btn-warning col-4' onclick='redireccionaModificaPregunta("+(i+1)+")'>Modificar pregunta</a>";
        tabla += "<button type='button' class='btn btn-danger col-4' onclick='eliminaClick("+(i+1)+")'>Eliminar pregunta</button>";
        tabla += "</td></tr>"
      }
      tabla+="</tbody></table>"
      document.getElementById("junto").innerHTML = tabla;
    }
    
    function redireccionaVerPregunta(numero){
          var id=getParameterByName("id");
        window.location.href='http://localhost:8080/ProjectFinalStruts/Profesor/verPregunta.html?id='+id+'&numero='+numero;
    }
      
    function redireccionaModificaPregunta(numero){
          var id=getParameterByName("id");
        window.location.href='http://localhost:8080/ProjectFinalStruts/Profesor/modificaPregunta.html?id='+id+'&numero='+numero;
      }  

    function eliminaClick(numero){
      var opcion = confirm("Desea eliminar el ejercicio: "+numero);
      console.log(opcion);
      if(opcion==true){
          var id=getParameterByName("id");
        let url = 'http://localhost:8080/ProjectFinalStruts/EliminarPregunta?numero='+numero+'&idProfesor='+id;
        //alert('URL:' + url);
        fetch(url).then(response => response.text()).then(data => {
            alert(data);    
            cargarTabla()
        });
      }
        
    }
    
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }