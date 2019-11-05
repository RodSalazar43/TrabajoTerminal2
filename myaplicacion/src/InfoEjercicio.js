import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class InfoEjercicio extends Component {
    constructor() {
        super();
        this.state = {
            ejercicio: {
                nombre: '',
                instrucciones: '',
                opcion1: '',
                opcion2: '',
                opcion3: '',
                opcion4: '',
                resultado: ''
            },
            numero: ''
        }
    }

    render() {
        
        return (
            <Fragment>
                <div className="card align-items-start chico">
                    <Button href="verEjercicio.html">Mostrar Ejercicios</Button>
                    <Button href="creaEjercicio.html">Crear ejercicio</Button>
                </div>

                <Container maxWidth="sm">
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc', width: '100hv', height: '90vh' }} >
                        <label className="lead">Nombre del ejercicio: </label> <center><TextField value={this.state.ejercicio.nombre} readOnly></TextField></center><br></br>
                        <label className="lead">Instrucciones: </label><center><TextField value={this.state.ejercicio.instrucciones} readOnly></TextField></center><br></br>
                        <hr></hr>
                        <center><label className="h3 lead">Opciones</label><br></br></center>
                        <label className="lead">Opcion 1: </label><center><TextField value={this.state.ejercicio.opcion1} readOnly></TextField></center><br></br>
                        <label className="lead">Opcion 2: </label><center><TextField value={this.state.ejercicio.opcion2} readOnly></TextField></center><br></br>
                        <label className="lead">Opcion 3: </label><center><TextField value={this.state.ejercicio.opcion3} readOnly></TextField></center><br></br>
                        <label className="lead">Opcion 4: </label><center><TextField value={this.state.ejercicio.opcion4} readOnly></TextField></center><br></br>
                        <hr></hr>
                        <label className="lead">Resultado: </label><center><TextField value={this.state.ejercicio.resultado} readOnly></TextField></center><br></br>
                    </Typography>
                </Container>

            </Fragment>
        );
    }
}

export default InfoEjercicio;