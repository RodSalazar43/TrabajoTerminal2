  import React, { Component } from 'react';
  import './css/index.css';

  class NavegacionProfesor extends Component {
    render() {
      return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="miInfo.html">Mi información</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="Profesor.html">Bienvenido</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fa-search" href="verEjercicio.html">Ver ejercicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="agregaExamen.html">Añadir examen</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fa-search" href="verExamen.html">Ver examenes</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-danger text-white fa-user" href="#" >Cerrar Sesión</a>
            </li>
          </ul>
        </nav>
      );
    }
  }

  export default NavegacionProfesor;