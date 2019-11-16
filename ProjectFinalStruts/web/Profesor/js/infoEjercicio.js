document.getElementById("muestraEjercicio").addEventListener("click", cargaDatos);
      var num;
      
      function redireccionaVerEjercicio(){
          var id=getParameterByName("id");
        window.location.href='http://localhost:8080/ProjectFinalStruts/Profesor/verEjercicio.html?id='+id;
      }
      
      function redireccionaCreaEjercicio(){
          var id=getParameterByName("id");
        window.location.href='http://localhost:8080/ProjectFinalStruts/Profesor/creaEjercicio.html?id='+id;
      }
      
      function redireccionaAgregaExamen(){
          var id=getParameterByName("id");
        window.location.href='http://localhost:8080/ProjectFinalStruts/Profesor/agregaExamen.html?id='+id;
      }
      
      
      function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
      }

      function cargaDatos() {
        var numero = getParameterByName('numero');
        num=numero;
        console.log(numero)
        cargarTodo(numero);
      }

      function cargarTodo(numero) {
        var id=getParameterByName("id");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          cargarXML(this, numero);
        };
        xhr.open("GET", "../xml/ejercicios/ejercicios"+id+".xml", true);
        xhr.send();
      }

      function cargarXML(xml) {
        var docXML = xml.responseXML;
        var infoEjercicio = '';
        var ejercicio = docXML.getElementsByTagName("ejercicio");
        console.log("Elementos en memoria")
        console.log(ejercicio)
        console.log(ejercicio[num-1])
        var nombre=ejercicio[num-1].getAttribute("nombre");
        var tipo=ejercicio[num-1].getAttribute("tipo")
        var ins=ejercicio[num-1].getElementsByTagName("indicaciones")[0].textContent;
        var nuevoTipo="";
        if(tipo==="Linea"){
            nuevoTipo="Unir con lineas";
            var opcion1=ejercicio[num-1].getElementsByTagName("opcion1")[0].textContent;
            var opcion2=ejercicio[num-1].getElementsByTagName("opcion2")[0].textContent;
            var opcion3=ejercicio[num-1].getElementsByTagName("opcion3")[0].textContent;
            var opcion4=ejercicio[num-1].getElementsByTagName("opcion4")[0].textContent;
            var opcion5=ejercicio[num-1].getElementsByTagName("opcion5")[0].textContent;
            var opcion6=ejercicio[num-1].getElementsByTagName("opcion6")[0].textContent;
            var opcion7=ejercicio[num-1].getElementsByTagName("opcion7")[0].textContent;
            var opcion8=ejercicio[num-1].getElementsByTagName("opcion8")[0].textContent;

            infoEjercicio +="<div class='card-columns'>";
            infoEjercicio+="<label class='lead'>Nombre del ejercicio: </label><input type='text' class='form-control' value='"+nombre+"' readOnly/><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'> Instrucciones: </label><input type='text' class='form-control' value='"+ins+"' readOnly/><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'> Tipo de ejercicio</label><input type='text' class='form-control' value='"+nuevoTipo+"' readOnly/> <br></div>"
            infoEjercicio+="<hr><div class='card-columns'><label class='lead'>Opcion 1: </label><input type='text' class='form-control' value='"+opcion1+"' readOnly/><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Opción 2: </label><input type='text' class='form-control' value='"+opcion2+"' readOnly/><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Opción 3: </label><input type='text' class='form-control' value='"+opcion3+"' readOnly/><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Opción 4: </label><input type='text' class='form-control' value='"+opcion4+"' readOnly/><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Respuesta opción 1: </label><input type='text' class='form-control' value='"+opcion5+"' readOnly/><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Respuesta opción 2: </label><input type='text' class='form-control' value='"+opcion6+"' readOnly/><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Respuesta opción 3: </label><input type='text' class='form-control' value='"+opcion7+"' readOnly/><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Respuesta opción 4: </label><input type='text' class='form-control' value='"+opcion8+"' readOnly/><br></div>";
            
        }else if(tipo==="DAD"){
            nuevoTipo="Arrastrar y soltar";
            var opcion1=ejercicio[num-1].getElementsByTagName("opcion1")[0].textContent;
            var opcion2=ejercicio[num-1].getElementsByTagName("opcion2")[0].textContent;
            var opcion3=ejercicio[num-1].getElementsByTagName("opcion3")[0].textContent;
            var opcion4=ejercicio[num-1].getElementsByTagName("opcion4")[0].textContent;
            var resultado=ejercicio[num-1].getElementsByTagName("resultado")[0].textContent;

            infoEjercicio +="<div class='card-columns'>";
            infoEjercicio+="<label class='lead'>Nombre del ejercicio: </label><input type='text' class='form-control' value='"+nombre+"' readOnly/><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'> Instrucciones: </label><input type='text' class='form-control' value='"+ins+"' readOnly/><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'> Tipo de ejercicio</label><input type='text' class='form-control' value='"+nuevoTipo+"' readOnly/> <br></div>"
            infoEjercicio+="<hr><div class='card-columns'><label class='lead'>Opcion 1: </label><input type='text' class='form-control' value='"+opcion1+"' readOnly/><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Opcion 2: </label><input type='text' class='form-control' value='"+opcion2+"' readOnly/><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Opcion 3: </label><input type='text' class='form-control' value='"+opcion3+"' readOnly/><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Opcion 4: </label><input type='text' class='form-control' value='"+opcion4+"' readOnly/><br></div>";
            infoEjercicio+="<hr><div class='card-columns'><label class='lead'>Resultado: </label><input type='text' class='form-control' value='"+resultado+"' readOnly/><br></div>";

        }
        
                    document.getElementById("cuerpo").innerHTML=infoEjercicio;
      }