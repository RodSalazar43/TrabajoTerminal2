import React, { Component } from 'react';

class Alerta extends Component {
    render() {
        return (
            <center>
                <div className="fondo-superman" role="alert">
                    <p className="h4"></p>
                </div>
                <div class="alert alert-warning">
                    <strong>{this.props.texto}</strong>
                </div>
            </center>
        );
    }
}

export default Alerta;