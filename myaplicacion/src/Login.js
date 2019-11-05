import React, { Component } from 'react';
import Bienvenida from "./Bienvenida";

class Login extends Component {
    constructor() {
        super();
        this.state = { usuario: '', contra: '' }
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangeContra = this.handleChangeContra.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUser(event) {
        this.setState({ usuario: event.target.value })
    }

    handleChangeContra(event) {
        this.setState({ contra: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(this.state)
        //http://localhost/struts2react/input1.jsp
        let url = 'http://localhost:8080/ProjectFinalStruts/Revisa?usuario=' + this.state.usuario + '&contra=' + this.state.contra;
        alert('URL:' + url);
        fetch(url).then(response => response.text()).then(data => {
            alert(data);
            window.location.href = data;
        });
    }

    render() {
        return (    
            <div className="contenido-chico caja-sombreada signos text-white" >
                <center>
                    <form onSubmit={this.handleSubmit}>
                        <span className="badge badge-dark"><strong><label htmlFor="inputEmail4">Nombre de usuario</label></strong></span>
                        <br></br>
                        <input className="form-control " type="text" value={this.state.usuario} placeholder="Ingresa el nombre de usuario" onChange={this.handleChangeUser} ></input>
                        <br></br>
                        <span className="badge badge-dark"><strong><label htmlFor="inputPassword4">Contraseña</label></strong></span>
                        <input className="form-control border-secondary" type="password" value={this.state.contra} placeholder="Escribe tu contraseña" onChange={this.handleChangeContra} />
                        <br></br>
                        <input className="btn btn-warning" type="submit" value="Iniciar Sesión" />
                    </form>
                </center>
            </div>
        );
    }
}

export default Login;