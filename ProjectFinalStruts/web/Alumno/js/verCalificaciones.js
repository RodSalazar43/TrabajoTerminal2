        function verCalificaciones(){
        var numero=getParameterByName("id")
               var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    cargaResultados(this);
                 };
                xhr.open("GET", "../xml/calificaciones/calificaciones"+numero+".xml", true);
                xhr.send();
        }

        function getParameterByName(name) {
                 name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
                return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
              }
    
    
            function cargaResultados(xml) {
                var docXML = xml.responseXML;
                console.log(docXML)
                var ejercicio = docXML.getElementsByTagName("ejercicio");
                var comentario = docXML.getElementsByTagName("comentario")
                console.log(ejercicio)
                console.log(comentario)
                var ejercicioTabla=""
                ejercicioTabla+="<table class='table table-striped table-dark'>"
                ejercicioTabla+="<thead>"
                ejercicioTabla+="<tr>"
                  ejercicioTabla+="<th scope='col'>#</th>"
                  ejercicioTabla+="<th scope='col'>Ejercicio/Pregunta</th>"
                  ejercicioTabla+="<th scope='col'>Calificacion</th>"
                ejercicioTabla+="</tr>"
              ejercicioTabla+="</thead>"
              ejercicioTabla+="<tbody>"
              for(var i=0;i<ejercicio.length;i++){
                  if(ejercicio[i].attributes[0].value==0){
                      continue;
                  }
                    ejercicioTabla+="<tr>"
                    ejercicioTabla+="<th scope='row'>"+ejercicio[i].attributes[0].value+"</th>"
                    ejercicioTabla+="<td>Ejercicio</td>"
                    ejercicioTabla+="<td>"+ejercicio[i].attributes[1].value+"</td>"
                    ejercicioTabla+="</tr>"
              }
              
              for(var x=0;x<comentario.length;x++){
                  if(comentario[x].attributes[0].value==0){
                      continue;
                  }
                    ejercicioTabla+="<tr>"
                    ejercicioTabla+="<th scope='row'>"+comentario[x].attributes[0].value+"</th>"
                    ejercicioTabla+="<td>Comentario</td>"
                    ejercicioTabla+="<td>"+comentario[i].attributes[x].value+"</td>"
                    ejercicioTabla+="</tr>"
              }
              
              
              
              
                
              ejercicioTabla+="</tbody>"
            ejercicioTabla+="</table>"
                ejercicioTabla+="<br><br>"
                document.getElementById("tabla").innerHTML=ejercicioTabla;
                
            }