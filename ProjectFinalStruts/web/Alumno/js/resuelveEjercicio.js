function resuelveEjercicio(){
    XMLEjercicios();
}

function XMLEjercicios(){
          var id=getParameterByName("idProfesor")
          var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          cargarXMLEjercicios(this);
          //console.log(this)
        };
        xhr.open("GET", "../xml/ejercicios/ejercicios"+id+".xml", true);
        xhr.send();
      }
      
      function cargarXMLEjercicios(xml){
        var docXML = xml.responseXML;
        var ejercicios = docXML.getElementsByTagName("ejercicio");
        console.log("Ejercicios en memoria")
        var num=getParameterByName("numero")
        var docXML = xml.responseXML;
        var infoExamen = '';        
        var nombre=ejercicios[num-1].getAttribute("nombre");
        var tipo=ejercicios[num-1].getAttribute("tipo");
        console.log("Nombre de ejercicio: "+nombre)
        console.log("Tipo: "+tipo)
        if(tipo=="DAD"){
                var nombreEjercicio=ejercicios[num-1].getAttribute("nombre");
                var ins=ejercicios[num-1].getElementsByTagName("indicaciones")[0].textContent;
                var opcion1=ejercicios[num-1].getElementsByTagName("opcion1")[0].textContent;
                var opcion2=ejercicios[num-1].getElementsByTagName("opcion2")[0].textContent;
                var opcion3=ejercicios[num-1].getElementsByTagName("opcion3")[0].textContent;
                var opcion4=ejercicios[num-1].getElementsByTagName("opcion4")[0].textContent;
                var resultado=ejercicios[num-1].getElementsByTagName("resultado")[0].textContent;
                infoExamen+="<center>"
                infoExamen+="<div class='contenido-mediano card'>";
                infoExamen+="<div class='header-card bg-light'>"
                infoExamen+="<p class='lead'>Nombre del ejercicio: "+nombreEjercicio+"</p>";
                infoExamen+="<hr>";
                infoExamen+="<p class='lead'>Instrucciones: "+ins+"</p>";
                infoExamen+="</div>";
                infoExamen+="<div class='body-card'>";
                infoExamen+="<div class='wrapper'>";
                infoExamen+="<div class='box' id='primero'>"
                infoExamen+="<div id='opcion1' class='task' draggable='true'>";
                infoExamen+=""+opcion1+"";
                infoExamen+="</div>";
                infoExamen+="<div id='opcion2' class='task' draggable='true'>";
                infoExamen+=""+opcion2+"";
                infoExamen+="</div>";
                infoExamen+="<div id='opcion3' class='task' draggable='true'>";
                infoExamen+=""+opcion3+"";
                infoExamen+="</div>"
                infoExamen+="<div id='opcion4' class='task' draggable='true'>"
                infoExamen+=""+opcion4+"";
                infoExamen+="</div>";
                infoExamen+="</div>";
                infoExamen+="<div class='box' id='segundo'></div>";
                infoExamen+="</div>";
                infoExamen+="</div>";
                infoExamen+="<div class='footer-card bg-success'>";
                infoExamen+="<p class='font-weight-bold lead'>Ordena de arriba hacia abajo</p>";
                infoExamen+="</div>"
                infoExamen+="</div>"
                infoExamen+="</center>"
                infoExamen+="<button class='btn btn-outline-danger btn-light form-control' onclick='obtieneRespuestasDAD("+resultado+")'>Guardar respuesta</button>"
                document.getElementById("muestraEjercicio").innerHTML=infoExamen;
                creaEventos();
            }else if(tipo=="Linea"){
                var nombreEjercicio=ejercicios[num-1].getAttribute("nombre");
                    var ins=ejercicios[num-1].getElementsByTagName("indicaciones")[0].textContent;
                    var opcion1=ejercicios[num-1].getElementsByTagName("opcion1")[0].textContent;
                    var opcion2=ejercicios[num-1].getElementsByTagName("opcion2")[0].textContent;
                    var opcion3=ejercicios[num-1].getElementsByTagName("opcion3")[0].textContent;
                    var opcion4=ejercicios[num-1].getElementsByTagName("opcion4")[0].textContent;
                    var opcion5=ejercicios[num-1].getElementsByTagName("opcion5")[0].textContent;
                    var opcion6=ejercicios[num-1].getElementsByTagName("opcion6")[0].textContent;
                    var opcion7=ejercicios[num-1].getElementsByTagName("opcion7")[0].textContent;
                    var opcion8=ejercicios[num-1].getElementsByTagName("opcion8")[0].textContent;
                    var aleatorio1=Math.round(Math.random()*3)+1
                    var aleatorio2=Math.round(Math.random()*3)+1
                    while(aleatorio1===aleatorio2){
                        var aleatorio2=Math.round(Math.random()*3)+1
                    }
                    var opcionNueva1=""
                    var respuestaNueva1=""
                    var opcionNueva2=""
                    var respuestaNueva2=""
                    if(aleatorio1===1){
                        opcionNueva1=opcion1;
                        respuestaNueva1=opcion5;
                    }else if(aleatorio1===2){
                        opcionNueva1=opcion2
                        respuestaNueva1=opcion6;
                    }else if(aleatorio1===3){
                        opcionNueva1=opcion3
                        respuestaNueva1=opcion7;
                    }else{
                        opcionNueva1=opcion4
                        respuestaNueva1=opcion8;
                    }
                    
                    if(aleatorio2===1){
                        opcionNueva2=opcion1
                        respuestaNueva2=opcion5;
                    }else if(aleatorio2===2){
                        opcionNueva2=opcion2
                        respuestaNueva2=opcion6;
                    }else if(aleatorio1===3){
                        opcionNueva2=opcion3
                        respuestaNueva2=opcion7;
                    }else{
                        opcionNueva2=opcion4
                        respuestaNueva2=opcion8;
                    }
                    
                    var canvas=""
                    
                    infoExamen+="<div class='contenido-mediano card'>";
                    infoExamen+="<div class='header-card bg-light'>"
                    infoExamen+="<p class='lead'>Nombre del ejercicio: "+nombreEjercicio+"</p>";
                    infoExamen+="<hr>";
                    infoExamen+="<p class='lead'>Instrucciones: "+ins+"</p>";
                    infoExamen+="</div>";
                    infoExamen+="</div>";                                       
                    canvas+="<div class='row justify-content-around'>"
                    canvas+="<div class='col-4 bg-secondary h3 text-white'>"
                    canvas+=opcionNueva1
                    canvas+="</div>"
                    canvas+="<div class='col-4 bg-success h3 text-white'>"
                    canvas+=opcionNueva2
                    canvas+="</div>"
                    canvas+="</div>"
                    canvas+="<canvas id='linea1' width='500px' height='400px' onclick='dibuja()' onmousemove='procesoDibuja()' style='background-color: black;'>Su navegador no soporta canvas :( </canvas>"    
                    canvas+="<div class='row justify-content-around'>"
                    canvas+="<div class='col-4 bg-danger h3 text-white'>"
                    var ayudaOtro=0
                    if(Math.round(Math.random())===0){
                        canvas+=respuestaNueva1    
                        ayudaOtro++;
                    }else{
                        canvas+=respuestaNueva2
                    }
                    canvas+="</div>"
                    canvas+="<div class='col-4 bg-warning h3 text-white'>"
                    if(ayudaOtro===0){
                        canvas+=respuestaNueva1
                    }else{
                        canvas+=respuestaNueva2
                    }
                    
                    canvas+="</div>"
                    canvas+="</div>"
                    //console.log(siguiente)
                    infoExamen+="<button class='btn btn-outline-danger btn-secondary text-white form-control' onclick='obtieneRespuestasLinea()'>Guardar respuesta</button>"
                    canvas+="<p class='h3 bg-light'>Une con lineas los circulos para guardar tus respuestas</p>"
                    document.getElementById("canvas").innerHTML=canvas
                    document.getElementById("muestraEjercicio").innerHTML=infoExamen;   
            }
      }
      
      function obtieneRespuestasDAD(resultado){
          console.log(resultado)
          var recupero=document.getElementById("segundo");
          var respuestaDada=""
          var ayuda=0
          for(var i=0;i<recupero.childNodes.length;i++){
              if(recupero.childNodes[i].id==="opcion1"){
                  if(ayuda===0){
                      respuestaDada="1"
                  }else{
                      respuestaDada+=",1";
                  }
              }else if(recupero.childNodes[i].id==="opcion2"){
                  if(ayuda===0){
                      respuestaDada="2"
                      ayuda++
                  }else{
                      respuestaDada+=",2";
                  }
              }else if(recupero.childNodes[i].id==="opcion3"){
                  if(ayuda===0){
                      respuestaDada="3"
                      ayuda++
                  }else{
                      respuestaDada+=",3";
                  }
              }else if(recupero.childNodes[i].id==="opcion4"){
                  if(ayuda===0){
                      respuestaDada="4"
                      ayuda++
                  }else{
                      respuestaDada+=",4";
                  }
              }
          }
          console.log(respuestaDada)
          var id=getParameterByName("id")
                var numero=getParameterByName("numero")
                //alert("Obtuviste "+correctas+" respuestas correctas")               
                 let url = 'http://localhost:8080/ProjectFinalStruts/RegistrarRespuestaEjercicio?idAlumno='+id+'&numeroEjercicio='+numero+'&respuesta='+respuestaDada;
                //alert('URL:' + url);
                fetch(url).then(response => response.text()).then(data => {
                    alert(data);    
                });
                var regresar="<button class='btn btn-lg btn-warning' onlick='redireccionaInicio()'>Regresar al inicio</button>"
                document.getElementById("canvas").innerHTML=regresar;
          
      }
      
      
      
      
      function creaEventos(){
            var dropTarget = document.querySelector(".wrapper");
          dropTarget.addEventListener("dragover", function(event) {
          event.preventDefault();
            });

            var draggables = document.querySelectorAll(".task");
                for (let i = 0; i < draggables.length; i++) {
                  draggables[i].addEventListener("dragstart", function(ev) {
                  ev.dataTransfer.setData("srcId", ev.target.id);
                  });
                }


            dropTarget.addEventListener("drop", function(event) {
              event.preventDefault();
              let target = event.target;
              let droppable = target.classList.contains("box");
              let srcId = event.dataTransfer.getData("srcId");
              if (droppable) event.target.appendChild(document.getElementById(srcId));
            });

        }
      
      
      function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
      }
      
      
      
      var numeroClick=0;
            var coordenada1;
            var todas_las_coordenadas=new Array();
            
            function dibuja() {
	        var canvas = document.getElementById("linea1");
                var coordenadas;
                var linea=new Object();
                numeroClick++;
		        if (canvas && canvas.getContext) {
		            var ctx = canvas.getContext("2d");
                            var ctx2 = canvas.getContext("2d");
                    console.log(numeroClick)
			        if (ctx) {
                            ctx2.strokeStyle= "#0f0"    
                            ctx2.beginPath();
                            ctx2.arc(25,25,25,0,(Math.PI/180)*360,true);
                            ctx2.stroke();
                            ctx2.beginPath();
                            ctx2.arc(475,25,25,0,(Math.PI/180)*360,true);
                            ctx2.stroke();
                            ctx2.beginPath();
                            ctx2.arc(25,375,25,0,(Math.PI/180)*360,true);
                            ctx2.stroke();
                            ctx2.beginPath();
                            ctx2.arc(475,375,25,0,(Math.PI/180)*360,true);
                            ctx2.stroke();
                            
                        if(numeroClick===1){
                            ctx.lineWidth = 3;
		            ctx.strokeStyle = "#f00";
		            ctx.beginPath();
                            coordenadas= obtieneCoordenada();
                            coordenada1=coordenadas;
                            ctx.moveTo(coordenadas.x, coordenadas.y);
                            ctx.lineTo(coordenadas.x, coordenadas.y);
		            ctx.stroke();
                        }else{                            
		            ctx.beginPath();
                            coordenadas= obtieneCoordenada();
		            ctx.moveTo(coordenada1.x, coordenada1.y);
                            ctx.lineTo(coordenadas.x, coordenadas.y);
                            ctx.stroke();
                            linea.x1=coordenada1.x;
                            linea.y1=coordenada1.y;
                            linea.x2=coordenadas.x;
                            linea.y2=coordenadas.y;
                            console.log(linea);
                            todas_las_coordenadas.push(linea);
                            console.log(todas_las_coordenadas);
                            pintaTodo();
                            numeroClick=0;
                        }
				        
                        
			        }
		        }
            }

            function pintaTodo(){
                var linea;
                var canvas = document.getElementById("linea1");
                if (canvas && canvas.getContext) {
		            var ctx = canvas.getContext("2d");
                            var ctx2=canvas.getContext("2d")
                            console.log(numeroClick)
			if (ctx) {
                            ctx2.strokeStyle= "#0f0"    
                            ctx2.beginPath();
                            ctx2.arc(25,25,25,0,(Math.PI/180)*360,true);
                            ctx2.stroke();
                            ctx2.beginPath();
                            ctx2.arc(475,25,25,0,(Math.PI/180)*360,true);
                            ctx2.stroke();
                            ctx2.beginPath();
                            ctx2.arc(25,375,25,0,(Math.PI/180)*360,true);
                            ctx2.stroke();
                            ctx2.beginPath();
                            ctx2.arc(475,375,25,0,(Math.PI/180)*360,true);
                            ctx2.stroke();
                            ctx.strokeStyle = "#f00";
                        for(var i=0;i<todas_las_coordenadas.length;i++){
                            ctx.beginPath();
                            linea=todas_las_coordenadas[i];
			    ctx.moveTo(linea.x1, linea.y1);
                            ctx.lineTo(linea.x2, linea.y2);
			    ctx.stroke();
                            
                        }
                    }
                }
            }
            
            function procesoDibuja(){
                var canvas = document.getElementById("linea1");
                var coordenadas;
		        if (canvas && canvas.getContext) {
		            var ctx = canvas.getContext("2d");
                            var ctx2 = canvas.getContext("2d");
			        if (ctx) {
                            ctx2.strokeStyle= "#0f0"    
                            ctx2.beginPath();
                            ctx2.arc(25,25,25,0,(Math.PI/180)*360,true);
                            ctx2.stroke();
                            ctx2.beginPath();
                            ctx2.arc(475,25,25,0,(Math.PI/180)*360,true);
                            ctx2.stroke();
                            ctx2.beginPath();
                            ctx2.arc(25,375,25,0,(Math.PI/180)*360,true);
                            ctx2.stroke();
                            ctx2.beginPath();
                            ctx2.arc(475,375,25,0,(Math.PI/180)*360,true);
                            ctx2.stroke();
                            
                        if(numeroClick===1){
                            ctx.lineWidth = 3;
			    ctx.strokeStyle = "#ff0";
                            ctx.clearRect(0,0,1000,1000);
			    ctx.beginPath();
                            coordenadas= obtieneCoordenada();
                            console.log(coordenadas)
                            ctx.moveTo(coordenada1.x, coordenada1.y);
                            coordenadas=obtieneCoordenada();
			    ctx.lineTo(coordenadas.x, coordenadas.y);
			    ctx.stroke();
                        }
			        }
		        }
            }

            function obtieneCoordenada(){
                var x = window.event.clientX;
                var y = window.event.clientY;
                console.log("Coordenada x:"+x)
                console.log("Coordenada y:"+y)
                return {
                    x: window.event.clientX-700,
                    y: window.event.clientY-410 
                };
            }
            
            function obtieneRespuestasLinea(){
                console.log(todas_las_coordenadas);
                var correctas=0;
                for(var i=0;i<todas_las_coordenadas.length;i++){
                    var x1=todas_las_coordenadas[0].x1;
                    var y1=todas_las_coordenadas[0].y1;
                    var x2=todas_las_coordenadas[0].x2;
                    var y2=todas_las_coordenadas[0].y2;
                    if(x1-53<=0&&500-x2<=53){
                        if(y1-53<=0&&400-y2<=53){
                            console.log("Punto adentro");
                            correctas++;
                        }
                    }
                }
                var id=getParameterByName("id")
                var numero=getParameterByName("numero")
                //alert("Obtuviste "+correctas+" respuestas correctas")               
                 let url = 'http://localhost:8080/ProjectFinalStruts/RegistrarRespuestaEjercicio?idAlumno='+id+'&numeroEjercicio='+numero+'&respuesta='+correctas;
                //alert('URL:' + url);
                fetch(url).then(response => response.text()).then(data => {
                    alert(data);    
                });
                var regresar="<button class='btn btn-lg btn-warning' onclick='redireccionaInicio()'>Regresar al inicio</button>"
                document.getElementById("canvas").innerHTML=regresar;
            }
            
            function redireccionaInicio(){
                var id=getParameterByName("id");
                var idGrupo=getParameterByName("idGrupo");
                var idProfesor=getParameterByName("idProfesor");
                window.location.href='Alumno.html?id='+id+'&idProfesor='+idProfesor+'&idGrupo='+idGrupo;
            }