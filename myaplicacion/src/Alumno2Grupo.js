import React, { Component } from 'react';

class Alumno2Grupo extends Component{
    constructor(){
        super();
        this.state={
            grupo:''
        }
        this.handleChangeGrupo=this.handleChangeGrupo.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChangeGrupo(e){
        this.setState({grupo:event.target.value})
        console.log(this.state)
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(this.state)
        //http://localhost/struts2react/input1.jsp
        let url = 'http://localhost:8080/ProjectFinalStruts/Revisa?profesor=' + this.state.idProfesor + '&grupo=' + this.state.grupo;
        alert('URL:' + url);
        fetch(url).then(response => response.text()).then(data => {
            alert(data);
        });
    }
    
    render(){
        return(
            <center className="container bg-primary">
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <label className="font-weight-bold h5">Ingresa el id del grupo para agregar el alumno: </label>
                            </div>
                            <div className="col-8">
                                <input className="form-control" type="text" placeholder="El grupo debe existir" name="grupo" onChange={this.handleChangeGrupo} value={this.state.grupo} required></input>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-4">
                                <label className="font-weight-bold h5">Ingresa el id del alumno: </label>
                            </div>
                            <div className="col-8">
                                <input className="form-control" type="text" placeholder="El alumno debe estar dado de alta" name="alumno" onChange={this.handleChangeAlumno} value={this.state.alumno} required></input>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-12">
                                <button className="btn btn-secondary btn-outline-light btn-lg btn-block">Asignar alumno a grupo</button>
                            </div>
                        </div>
                        <br></br>
                    </div>
                </form>
                </center>
        );
    }
}

export default Alumno2Grupo;