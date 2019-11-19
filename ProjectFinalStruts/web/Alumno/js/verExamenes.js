function verExamenes() {
        XMLExamenes();
}

function XMLExamenes(){
          var id=getParameterByName("idProfesor")
          var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          cargarXMLExamenes(this);
        };
        xhr.open("GET", "../xml/examenes/examenes"+id+".xml", true);
        xhr.send();
      }
      
      function cargarXMLExamenes(xml){
        var docXML = xml.responseXML;
        var examenes = docXML.getElementsByTagName("examen");
        console.log("Examenes en memoria")
        cargarAsignadosExamen(examenes)
        
      }
      
      function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    
    function cargarAsignadosExamen(examenes){
        var id=getParameterByName("idGrupo")
          var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          cargarXMLAsignadosExamen(this,examenes);
        };
        xhr.open("GET", "../xml/asignados/asignados"+id+".xml", true);
        xhr.send();
    }
    
    function cargarXMLAsignadosExamen(xml,examenes){
        var docXML = xml.responseXML;
        var examenesAsignados = docXML.getElementsByTagName("examen");
        var tabla = "<tr class='bg-danger text-dark'><th scope='col'>#</th><th scope='col'>Nombre del ejercicio</th><th scope='col'>Acción</th></tr>"
        for(var i=0;i<examenes.length;i++){
            for(var x=0;x<examenesAsignados.length;x++){
                if(examenesAsignados[x].getAttribute("numeroExamen")===examenes[i].getAttribute("numero")){
                    var grupoCompleto=examenesAsignados[x].getAttribute("grupoCompleto")
                    if(grupoCompleto==="si"){
                        tabla += "<tr><th socpe='row'>";
                        tabla += (x + 1);
                        tabla += "</th><td>";
                        tabla += examenes[i].getAttribute("nombre");
                        tabla += "</td>";
                        tabla += "<td><a class='btn btn-danger' onclick='redireccionaResolverExamen("+(i+1)+")'>Resolver</a>";
                        tabla += "</td></tr>"
                    }else{
                     console.log("no aceptado")   
                    }
                }
            }
        }
        
        document.getElementById("tabla").innerHTML=tabla;
        
    }
    
    function redireccionaResolverExamen(numero){
        var id=getParameterByName("id");
        var idGrupo=getParameterByName("idGrupo");
        var idProfesor=getParameterByName("idProfesor");
        window.location.href='http://localhost:8080/ProjectFinalStruts/Alumno/resulveExamen.html?id='+id+'&idProfesor='+idProfesor+'&idGrupo='+idGrupo+'&numero='+numero;
    }

