        function crearCopiaEjercicio(e){
          var id=getParameterByName("id");
          var numero=getParameterByName("numero");
          let url = 'http://localhost:8080/ProjectFinalStruts/CrearCopiaEjercicio?idProfesor='+id+'&numeroEjercicio='+numero;
        //alert('URL:' + url);
            fetch(url).then(response => response.text()).then(data => {
                alert(data);    
            });
          
        }
      
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }