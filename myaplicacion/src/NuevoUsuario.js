import React, { Component } from 'react';

class NuevoUsuario extends Component{
    constructor(){
        super();
        this.state = { nombre: '',username:'', apaterno: '' ,amaterno: '', contra:'',tipo:''}
        this.handleChangeNombre = this.handleChangeNombre.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangeContra = this.handleChangeContra.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeApaterno=this.handleChangeApaterno.bind(this);
        this.handleChangeAmaterno=this.handleChangeAmaterno.bind(this);
        this.handleChangeTipo=this.handleChangeTipo.bind(this);
    }

    handleChangeNombre(event) {
        this.setState({ nombre: event.target.value })
        console.log(this.state)
    }

    handleChangeUserName(event){
        this.setState({username: event.target.value})
        console.log(this.state)
    }

    handleChangeContra(event) {
        this.setState({ contra: event.target.value })
        console.log(this.state)
    }

    handleChangeApaterno(event) {
        this.setState({ apaterno: event.target.value })
        console.log(this.state)
    }

    handleChangeAmaterno(event) {
        this.setState({ amaterno: event.target.value })
        console.log(this.state)
    }
    handleChangeTipo(event) {
        var combo = document.getElementById("tipoUsuario");
        var selected = combo.options[combo.selectedIndex].text;
        this.setState({ tipo: selected })
        console.log(this.state)
    }

    handleSubmit(event) {
        event.preventDefault();
        var tipo;
        if(this.state.tipo==="---"||this.state.tipo===""){
            alert("Tipo de usuario no valido");
            return;
        }else if(this.state.tipo==="Administrador"){
            tipo="1";
        }else if(this.state.tipo==="Profesor"){
            tipo="2";
        }else if(this.state.tipo==="Alumno"){
            tipo="3"
        }
        //http://localhost/struts2react/input1.jsp
        let url = 'http://localhost:8080/ProjectFinalStruts/AgregarUsuario?nombres=' + this.state.nombre + '&nombreUsuario='+this.state.username+'&apellidoPat=' + this.state.apaterno+'&apellidoMat='+this.state.amaterno+'&contrasena='+this.state.contra+'&tipousuario='+tipo;
        fetch(url).then(response => response.text()).then(data => {
            alert(data);    
        });
    }


    render(){
        return(
            <center className="container bg-info">
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <label className="font-weight-bold text-white h5">Ingresa el nombre o nombres del nuevo usuario: </label>
                            </div>
                            <div className="col-8">
                                <input className="form-control" type="text" placeholder="Nombre o nombres" name="nombre" onChange={this.handleChangeNombre} value={this.state.nombre} required></input>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-4">
                                <label className="font-weight-bold text-white h5">Ingresa el nombre de usuario (Forma de inicio de sesión): </label>
                            </div>
                            <div className="col-8">
                                <input className="form-control" type="text" placeholder="Apodo del usuario para iniciar sesión" name="username" onChange={this.handleChangeUserName} value={this.state.username} required></input>
                            </div>
                        </div>
                        <br></br>
                        <div className="row"> 
                            <div className="col-4">
                                <label className="font-weight-bold text-white h5">Ingresa el apellido paterno: </label>
                            </div>
                            <div className="col-8">
                                <input className="form-control" type="text" placeholder="Apellido paterno" name="apaterno" onChange={this.handleChangeApaterno} value={this.state.apaterno} required></input>
                            </div>
                        </div>
                        <br></br>
                        <div className="row"> 
                            <div className="col-4">
                                <label className="font-weight-bold text-white h5">Ingresa el apellido materno: </label>
                            </div>
                            <div className="col-8">
                                <input className="form-control" type="text" placeholder="Apellido materno" name="amaterno" onChange={this.handleChangeAmaterno} value={this.state.amaterno} required></input>
                            </div>
                        </div>
                        <br></br>
                        <div className="row"> 
                            <div className="col-4">
                                <label className="font-weight-bold text-white h5">Contraseña: </label>
                            </div>
                            <div className="col-8">
                                <input className="form-control" type="text" placeholder="Contraseña para el usuario" name="contrasena" onChange={this.handleChangeContra} value={this.state.contra} required></input>
                            </div>
                        </div>
                        <br></br>
                        <div className="row"> 
                            <div className="col-4">
                                <label className="font-weight-bold text-white h5">Selecciona el tipo de usuario: </label>
                            </div>
                            <div className="col-8">
                                <select id="tipoUsuario" className="custom-select" onChange={this.handleChangeTipo} value={this.state.tipo}>
                                    <option >---</option>
                                    <option>Administrador</option>
                                    <option>Alumno</option>
                                    <option>Profesor</option>
                                </select>                                
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col">
                                <input className="btn btn-secondary btn-outline-light btn-lg btn-block" type="submit" value="Registrar"></input>
                            </div>
                        </div>
                        <br></br>
                    </div>
                </form>
            </center>
        );
    }
}

export default NuevoUsuario;