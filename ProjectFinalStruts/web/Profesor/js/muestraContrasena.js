function muestraContrasena(){
    var id=getParameterByName("id")
        let url = 'http://localhost:8080/ProjectFinalStruts/BuscarGruposPorProfesor?idProfesor='+id;;
        //alert('URL:' + url);
        fetch(url).then(response => response.text()).then(data => {
            alert(data);
            cargaGruposProfesorContra();
        });
}

function cargaGruposProfesorContra(){
    var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            muestraGruposProfesorContra(this);
         };
        xhr.open("GET", "../json/resultadoConsultaGruposPorProfesor.json", true);
        xhr.send();
}

function muestraGruposProfesorContra(json){
    var docJson = json.responseText;
        var archivojson=JSON.parse(docJson);
        //console.log(archivojson)
        var idGrupo=archivojson.idGrupo;        
        var muestraGrupo=""     
        muestraGrupo+="<h2 class='text-white'>Solo es posible asignar una contraseña a la vez</h2>"
        muestraGrupo+="<h4 class='text-white'>Con esta contraseña podrán tener acceso tus alumnos de este grupo</h4>"
        muestraGrupo+="<br>"
        muestraGrupo+="<table class='container table table-hover table-dark'>"
        muestraGrupo+="<thead>"
        muestraGrupo+="<tr>"
        muestraGrupo+="<th scope='col'>Id</th>"
        muestraGrupo+="<th scope='col'>Nombre</th>"
        muestraGrupo+="<th scope='col'>Turno</th>"
        muestraGrupo+="<th scope='col'>Año</th>"
        muestraGrupo+="<th scope='col'>Contraseña</th>"
        muestraGrupo+="</tr>"
        muestraGrupo+="</thead>"
        muestraGrupo+="<tbody>"
        var i=0;
        while(true){
            if(idGrupo[i]===undefined){
                break;
            }
            muestraGrupo+="<tr>"
            muestraGrupo+="<th scope='row'>"+idGrupo[i].id+"</th>"
            muestraGrupo+="<td>"+idGrupo[i].nombre+"</td>"
            console.log(idGrupo[i].nombre)
            muestraGrupo+="<td>"+idGrupo[i].turno+"</td>"
            muestraGrupo+="<td>"+idGrupo[i].ano+"</td>"
            muestraGrupo+="<td><input type='text' id='"+idGrupo[i].id+"' name='contra' value='' placeholder='Escribe aquí la contraseña'></td>"
            muestraGrupo+="</tr>"
            i++;
        }
        muestraGrupo+="</tbody>"
        muestraGrupo+="</table>"
        muestraGrupo+="<center><button class='btn btn-block btn-lg btn-warning btn-outline-light text-dark' onclick='asignaPass()'>Asignar contraseña</button></center>"
        document.getElementById("muestraGrupo").innerHTML=muestraGrupo;
}

function asignaPass(){
    var contrasena=document.getElementsByName("contra");
    console.log(contrasena)
    var grupoSeleccionado;
    for(var i=0;i<contrasena.length;i++){
        if(contrasena[i].value===""){
            grupoSeleccionado=contrasena[i];
        }
    }
    if(grupoSeleccionado===undefined){
        alert("Es necesario cambiar una contraseña para guardar");
    }
    
    let url = 'http://localhost:8080/ProjectFinalStruts/AsignarContrasenaAGrupo?idGrupo='+grupoSeleccionado.id+'&nuevaContrasena='+grupoSeleccionado.value
        //alert('URL:' + url);
            fetch(url).then(response => response.text()).then(data => {
                alert(data);    
            });
            location.reload()
    
    
    
}