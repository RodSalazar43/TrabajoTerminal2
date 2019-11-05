import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Grupo extends Component{
    constructor(){
        super();
        this.state={
            nombre:'',anio:'',turno:'',profesor:'', alumno:''
        }
        this.handleNombre=this.handleNombre.bind(this);
        this.handleAnio=this.handleAnio.bind(this);
        this.handleTurno=this.handleTurno.bind(this);
        this.handleProfesor=this.handleProfesor.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleAlumno=this.handleAlumno.bind(this);
    }

    handleAlumno(event){
        this.setState({alumno:event.target.value})
        console.log(this.state)
    }

    handleNombre(event){
        this.setState({nombre:event.target.value})
        console.log(this.state)
    }
    
    handleProfesor(event){
        this.setState({profesor:event.target.value})
        console.log(this.state)
    }

    handleTurno(event){
        this.setState({turno:event.target.value})
        console.log(this.state)
    }

    handleAnio(event){
        this.setState({anio:event.target.value})
        console.log(this.state)
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(this.state)
        //http://localhost/struts2react/input1.jsp
        let url = 'http://localhost:8080/ProjectFinalStruts/AgregarGrupo?nombre='+this.state.nombre+'&ano='+this.state.anio+'&turno='+this.state.turno+'&profesor='+this.state.profesor+'&alumno='+this.state.alumno;
        alert('URL:' + url);
        fetch(url).then(response => response.text()).then(data => {
            alert(data);
        });
    }

    render(){
        return(
        <center className="container bg-success">
            <br></br>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <label className="font-weight-bold h5">Ingresa el nombre del grupo: </label>
                            </div>
                            <div className="col-8">
                                <input className="form-control" type="text" placeholder="Sera un identificador de grupo" name="nombre" onChange={this.handleNombre} value={this.state.nombre} required></input>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-4">
                                <label className="font-weight-bold h5">Ingresa el año del grupo: </label>
                            </div>
                            <div className="col-8">
                                <input className="form-control" type="text" placeholder="Ejemplo: 2018" name="anio" onChange={this.handleAnio} value={this.state.anio} required></input>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-4">
                                <label className="font-weight-bold h5">Ingresa el turno del grupo: </label>
                            </div>
                            <div className="col-8">
                                <input className="form-control" type="text" placeholder="Matutino/Vespertino" name="turno" onChange={this.handleTurno} value={this.state.turno} required></input>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-4">
                                <label className="font-weight-bold h5">Ingresa el id del profesor: </label>
                            </div>
                            <div className="col-8">
                                <input className="form-control" type="text" placeholder="Será el maestro que impartirá clases" name="profesor" onChange={this.handleProfesor} value={this.state.profesor} required></input>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-4">
                                <label className="font-weight-bold h5">Ingresa el id de el primer alumno en este grupo: </label>
                            </div>
                            <div className="col-8">
                                <input className="form-control" type="text" placeholder="El alumno ya debe estar dado de alta" name="alumno" onChange={this.handleAlumno} value={this.state.alumno} required></input>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-12">
                                <input type="submit" className="btn btn-secondary btn-lg btn-outline-light btn-block" value="Crear grupo"></input>
                            </div>    
                        </div>
                        <br></br>
                    </div>
                </form>
        </center>);
    }
}
export default Grupo;