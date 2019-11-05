import React, { Component } from 'react';

class Profe2Grupo extends Component{
    constructor(){
        super();
        this.state={
            grupo: '', idProfesor: ''
        }
        this.handleChangeGrupo=this.handleChangeGrupo.bind(this);
        this.handleChangeProfesor=this.handleChangeProfesor.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChangeGrupo(e){
        this.setState({grupo:event.target.value})
        console.log(this.state)
    }

    handleChangeProfesor(e){
        this.setState({idProfesor:event.target.value})
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
            window.location.href = data;
        });
    }

    render(){
            return(
                <center className="container bg-warning">
                <br></br>
                    <form onSubmit={this.handleSubmit}>
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <label className="font-weight-bold h5">Ingresa el id del profesor que impartirá clase en el grupo: </label>
                                </div>
                                <div className="col-8">
                                    <input className="form-control" type="text" placeholder="El id del profesor debe ser válido" name="idProfesor" onChange={this.handleChangeProfesor} value={this.state.profesor} required></input>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-4">
                                    <label className="font-weight-bold h5">Ingresa el id del grupo donde será asignado el profesor: </label>
                                </div>
                                <div className="col-8">
                                    <input className="form-control" type="text" placeholder="El grupo debe existir" name="grupo" onChange={this.handleChangeGrupo} value={this.state.grupo} required></input>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-12">
                                    <button className="btn btn-success btn-outline-light btn-block">Asignar profesor a grupo</button>
                                </div>
                                
                            </div>
                        </div>
                    </form>
                </center>
            );
    }

}

export default Profe2Grupo;