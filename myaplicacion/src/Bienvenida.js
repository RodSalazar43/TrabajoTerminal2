import React, { Component } from 'react';
import './css/index.css';
class Bienvenida extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <center className="font-weight-bold text-dark">
            <div className="jumbotron fondo-azulado">
                <center><h1 className="display-4">Bienvenido Administrador</h1>
                <p className="lead">Aquí podras gestionar a los usuarios de la escuela a la que estas a cargo.</p>                
                <p>{this.props.texto}</p></center>
            </div>
            </center>
                );
        }
    }
export default Bienvenida;