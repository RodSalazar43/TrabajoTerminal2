var nombre,ins,opcion1,opcion2,opcion3,opcion4,resultado,opcion5,opcion6,opcion7,opcion8,tipo;
      var numero;
      function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
      }
      
      function modificaEjercicio(){
          cargaDatos();
      }

      function cargaDatos() {
        numero = getParameterByName('numero');
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

      function cargarXML(xml, num) {
        var docXML = xml.responseXML;
        var infoEjercicio = '';
        var ejercicio = docXML.getElementsByTagName("ejercicio");
        console.log("Elementos en memoria")
        console.log(ejercicio)
        console.log(ejercicio[num-1])
        var nombrel=ejercicio[num-1].getAttribute("nombre");
        var tipol=ejercicio[num-1].getAttribute("tipo")
        tipo=tipol;
        var insl=ejercicio[num-1].getElementsByTagName("indicaciones")[0].textContent;
        var nuevoTipo="";
        if(tipo==="Linea"){
            nuevoTipo="Unir con lineas";
            var opcion1l=ejercicio[num-1].getElementsByTagName("opcion1")[0].textContent;
            var opcion2l=ejercicio[num-1].getElementsByTagName("opcion2")[0].textContent;
            var opcion3l=ejercicio[num-1].getElementsByTagName("opcion3")[0].textContent;
            var opcion4l=ejercicio[num-1].getElementsByTagName("opcion4")[0].textContent;
            var opcion5l=ejercicio[num-1].getElementsByTagName("opcion5")[0].textContent;
            var opcion6l=ejercicio[num-1].getElementsByTagName("opcion6")[0].textContent;
            var opcion7l=ejercicio[num-1].getElementsByTagName("opcion7")[0].textContent;
            var opcion8l=ejercicio[num-1].getElementsByTagName("opcion8")[0].textContent;

            infoEjercicio +="<div class='card-columns'>";
            infoEjercicio+="<label class='lead'>Nombre del ejercicio: </label><input type='text' class='form-control' onchange='cambioNombre()' id='nombreInput' value='"+nombre+"'/><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'> Instrucciones: </label><input type='text' onchange='cambioIns()' id='instInput' class='form-control' value='"+ins+"'/><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'> Tipo de ejercicio</label><input type='text' class='form-control' value='"+nuevoTipo+"' readOnly/> <br></div>"
            infoEjercicio+="<hr><div class='card-columns'><label class='lead'>Opcion 1: </label><input type='text' onchange='cambioOp1()' id='op1Input' class='form-control' value='"+opcion1+"' /><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Opción 2: </label><input type='text' id='op2Input' onchange='cambioOp2()' class='form-control' value='"+opcion2+"' /><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Opción 3: </label><input type='text' id='op3Input' onchange='cambioOp3()' class='form-control' value='"+opcion3+"' /><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Opción 4: </label><input type='text' id='op4Input' onchange='cambioOp4()' class='form-control' value='"+opcion4+"' /><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Respuesta opción 1: </label><input id='op5Input' onchange='cambioOp5()' type='text' class='form-control' value='"+opcion5+"' /><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Respuesta opción 2: </label><input type='text' onchange='cambioOp6()' id='op6Input' class='form-control' value='"+opcion6+"' /><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Respuesta opción 3: </label><input type='text' onchange='cambioOp7()' id='op7Input' class='form-control' value='"+opcion7+"' /><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Respuesta opción 4: </label><input type='text' onchange='cambioOp8()' id='op8Input' class='form-control' value='"+opcion8+"' /><br></div>";
            infoEjercicio+="<button class='btn btn-success btn-lg' onclick='guardarCambios()'>Guardar cambios</button>"
            
        }else if(tipo==="DAD"){
            nuevoTipo="Arrastrar y soltar";
            var opcion1l=ejercicio[num-1].getElementsByTagName("opcion1")[0].textContent;
            var opcion2l=ejercicio[num-1].getElementsByTagName("opcion2")[0].textContent;
            var opcion3l=ejercicio[num-1].getElementsByTagName("opcion3")[0].textContent;
            var opcion4l=ejercicio[num-1].getElementsByTagName("opcion4")[0].textContent;
            var resultadol=ejercicio[num-1].getElementsByTagName("resultado")[0].textContent;

            infoEjercicio +="<div class='card-columns'>";
            infoEjercicio+="<label class='lead'>Nombre del ejercicio: </label><input type='text' class='form-control' onchange='cambioNombre()' id='nombreInput' value='"+nombrel+"' /><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'> Instrucciones: </label><input type='text' onchange='cambioIns()' id='instInput' class='form-control' value='"+insl+"' /><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'> Tipo de ejercicio</label><input type='text' class='form-control' value='"+nuevoTipo+"' readOnly/> <br></div>"
            infoEjercicio+="<hr><div class='card-columns'><label class='lead'>Opcion 1: </label><input type='text' id='op1Input' onchange='cambioOp1()' class='form-control' value='"+opcion1l+"' /><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Opcion 2: </label><input type='text' id='op2Input' onchange='cambioOp2()' class='form-control' value='"+opcion2l+"' /><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Opcion 3: </label><input type='text' id='op3Input' onchange='cambioOp3()' class='form-control' value='"+opcion3l+"' /><br></div>";
            infoEjercicio+="<div class='card-columns'><label class='lead'>Opcion 4: </label><input type='text' id='op4Input' onchange='cambioOp4()' class='form-control' value='"+opcion4l+"' /><br></div>";
            infoEjercicio+="<hr><div class='card-columns'><label class='lead'>Resultado: </label><input type='text' id='resInput' onchange='cambioRes()' class='form-control' value='"+resultadol+"' /><br></div>";
            infoEjercicio+="<button class='btn btn-success btn-lg' onclick='guardarCambios()'>Guardar cambios</button>"

        }
                    document.getElementById("cuerpo").innerHTML=infoEjercicio;
      }

      function cambioNombre(e){
        //nombre=e.target.value;
        nombre=document.getElementById("nombreInput").value;
        //console.log("Nombre: "+nombre)
      }

      function cambioIns(e){
        ins=document.getElementById("instInput").value;
        //console.log("Instrucciones "+ins)
      }

      function cambioOp1(e){
        opcion1=document.getElementById("op1Input").value;
        //console.log("Op1 "+opcion1)
      }
      function cambioOp2(e){
        opcion2=document.getElementById("op2Input").value;
        //console.log("Op2 "+opcion2)
      }
      function cambioOp3(e){
        opcion3=document.getElementById("op3Input").value;
        //console.log("Op3 "+opcion3)
      }
      function cambioOp4(e){
        opcion4=document.getElementById("op4Input").value;
        //console.log("Op4 "+opcion4)
      }
      
      function cambioOp5(e){
        opcion5=document.getElementById("op5Input").value;
        //console.log("Op5"+opcion5)
      }
      
      function cambioOp6(e){
        opcion6=document.getElementById("op6Input").value;
        //console.log("Op6 "+opcion6)
      }
      
      function cambioOp7(e){
        opcion7=document.getElementById("op7Input").value;
        //console.log("Op7 "+opcion7)
      }
      
      function cambioOp8(e){
        opcion8=document.getElementById("op8Input").value;
        //console.log("Op8 "+opcion8)
      }
      
      
      function cambioRes(e){
        resultado=document.getElementById("resInput").value;
        //console.log("Resultado: "+resultado)
      }

      function guardarCambios(event){
        var id=getParameterByName("id");
        var numero=getParameterByName("numero");
        console.log(id);
        var determinado="default";
        if(tipo==="DAD"){
            if(nombre===""||ins===""||opcion1===""||opcion2===""||opcion3===""||opcion4===""||resultado===""){
                alert("Por favor llene el campo vacío");
            }else{
                let url = 'http://localhost:8080/ProjectFinalStruts/ModificarEjercicio?idProfesor='+id+'&nombre='+nombre+'&indicaciones='+ins+'&opcion1='+opcion1+'&opcion2='+opcion2+'&opcion3='+opcion3+'&opcion4='+opcion4+'&opcion5='+determinado+'&opcion6='+determinado+'&opcion7='+determinado+'&opcion8='+determinado+'&resultado='+resultado+'&tipo='+tipo+'&numero='+numero;
                //alert('URL:' + url);
                fetch(url).then(response => response.text()).then(data => {
                    alert(data);    
                });
            }   
     
        }else if(tipo==="Linea"){
            if(nombre===""||ins===""||opcion1===""||opcion2===""||opcion3===""||opcion4===""){
                alert("Por favor llene el campo vacío");
            }else{
                let url = 'http://localhost:8080/ProjectFinalStruts/ModificarEjercicio?idProfesor='+id+'&nombre='+nombre+'&indicaciones='+ins+'&opcion1='+opcion1+'&opcion2='+opcion2+'&opcion3='+opcion3+'&opcion4='+opcion4+'&opcion5='+opcion5+'&opcion6='+opcion6+'&opcion7='+opcion7+'&opcion8='+opcion8+'&resultado='+determinado+'&tipo='+tipo+'&numero='+numero;
            //alert('URL:' + url);
                fetch(url).then(response => response.text()).then(data => {
                    alert(data);    
                });
            }
        }
    
      }