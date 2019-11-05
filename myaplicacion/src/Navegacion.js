import React, { Component } from 'react';
import './css/index.css';
class Navegacion extends Component {

  constructor() {
    super();    
    this.handleCerrarSesion = this.handleCerrarSesion.bind(this);
    this.getParameterByName=this.getParameterByName.bind(this);
    this.redireccionaBienvenido=this.redireccionaBienvenido.bind(this);
    this.redireccionaAnade=this.redireccionaAnade.bind(this);
    this.redireccionaModifica=this.redireccionaModifica.bind(this);
    this.redireccionaElimina=this.redireccionaElimina.bind(this);
    this.redireccionaInfo=this.redireccionaInfo.bind(this);
}
    /*componentDidMount() {
      var id=this.getParameterByName('id');
      console.log("Id recuperado: "+id)
    }*/

    handleCerrarSesion(event){
      console.log("Cerrando Session")
      window.location.href='http://localhost:8080/ProjectFinalStruts/index.html';
    }

    redireccionaBienvenido(event){
        window.location.href='http://localhost:8080/ProjectFinalStruts/Administrador/Administrador.html?id='+this.getParameterByName('id');
    }

    redireccionaAnade(event){
      window.location.href='http://localhost:8080/ProjectFinalStruts/Administrador/agregarUsuario.html?id='+this.getParameterByName('id');
    }

    redireccionaModifica(event){
      window.location.href='http://localhost:8080/ProjectFinalStruts/Administrador/modificarUsuario.html?id='+this.getParameterByName('id');
    }
  
    redireccionaElimina(event){
      window.location.href='http://localhost:8080/ProjectFinalStruts/Administrador/eliminarUsuario.html?id='+this.getParameterByName('id');
  }
    redireccionaInfo(event){
      window.location.href='http://localhost:8080/ProjectFinalStruts/Administrador/miInfo.html?id='+this.getParameterByName('id');
    }

    getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-brand" onClick={this.redireccionaInfo}>Mi información</button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <button className="btn nav-item nav-link active" onClick={this.redireccionaBienvenido}>Bienvenido</button>
                <button className="btn nav-item nav-link active" onClick={this.redireccionaAnade}>Añadir datos</button>
                <button className="btn nav-item nav-link active" onClick={this.redireccionaModifica}>Modificar datos</button>
                <button className="btn nav-item nav-link disabled" onClick={this.redireccionaElimina}>Eliminar datos</button>
              </div>
            </div>
            <button className="float-right btn btn-outline-danger" onClick={this.handleCerrarSesion}>Cerrar Sesión</button>
          </nav>
        );
    }
}

export default Navegacion;