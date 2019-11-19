function verEjercicios() {
        XMLEjercicios();
}

function XMLEjercicios(){
          var id=getParameterByName("idProfesor")
          var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          cargarXMLEjercicios(this);
        };
        xhr.open("GET", "../xml/ejercicios/ejercicios"+id+".xml", true);
        xhr.send();
      }
      
      function cargarXMLEjercicios(xml){
        var docXML = xml.responseXML;
        var ejercicios = docXML.getElementsByTagName("ejercicio");
        console.log("Ejercicios en memoria")
        cargarAsignados(ejercicios)
        
      }
      
      function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    
    function cargarAsignados(ejercicios){
        var id=getParameterByName("idGrupo")
          var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          cargarXMLAsignados(this,ejercicios);
        };
        xhr.open("GET", "../xml/asignados/asignados"+id+".xml", true);
        xhr.send();
    }
    
    function cargarXMLAsignados(xml,ejercicios){
        var docXML = xml.responseXML;
        var ejerciciosAsignados = docXML.getElementsByTagName("ejercicio");
        var tabla = "<tr class='bg-light text-dark'><th scope='col'>#</th><th scope='col'>Nombre del ejercicio</th><th scope='col'>Acción</th></tr>"
        for(var i=0;i<ejercicios.length;i++){
            for(var x=0;x<ejerciciosAsignados.length;x++){
                if(ejerciciosAsignados[x].getAttribute("numeroEjercicio")===ejercicios[i].getAttribute("numero")){
                    var grupoCompleto=ejerciciosAsignados[x].getAttribute("grupoCompleto")
                    if(grupoCompleto==="si"){
                        tabla += "<tr><th socpe='row'>";
                        tabla += (x + 1);
                        tabla += "</th><td>";
                        tabla += ejercicios[i].getAttribute("nombre");
                        tabla += "</td>";
                        tabla += "<td><a class='btn btn-warning' onclick='redireccionaResolverEjercicio("+(i+1)+")'>Resolver</a>";
                        tabla += "</td></tr>"
                    }else{
                     console.log("no aceptado")   
                    }
                }
            }
        }
        
        document.getElementById("tabla").innerHTML=tabla;
        
    }
    
    function redireccionaResolverEjercicio(numero){
        var id=getParameterByName("id");
        var idGrupo=getParameterByName("idGrupo");
        var idProfesor=getParameterByName("idProfesor");
        window.location.href='http://localhost:8080/ProjectFinalStruts/Alumno/resulveEjercicio.html?id='+id+'&idProfesor='+idProfesor+'&idGrupo='+idGrupo+'&numero='+numero;
    }

