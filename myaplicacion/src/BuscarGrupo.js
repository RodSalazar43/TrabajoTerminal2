import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ModificaGrupo from './ModificaGrupo';

class BuscarGrupo extends Component{
    constructor(){
        super();
        this.state = { id:'',usuario:false}
        this.handleSubmit = this.handleSubmit.bind(this);    
        this.handleId=this.handleId.bind(this);
        this.informacionDeUsuario=this.informacionDeUsuario.bind(this);
    }

    handleId(event){
        this.setState({id:event.target.value})
        console.log(this.state)
    }

    informacionDeUsuario(event){
        const administrador = document.getElementById("modificaUsuario");
        const grupo= document.getElementById("grupo");
        const muestraNuevo=this.state.usuario;
            if(muestraNuevo===false){
                grupo ? ReactDOM.render(<ModificaGrupo />,grupo ): false; //simplemente tomo otro div del index.html para mostrar esto
                this.setState({ usuario: !this.state.usuario})
                //ReactDOM.unmountComponentAtNode(profesor)
            }else{
                this.setState({ usuario: !this.state.usuario })
                ReactDOM.unmountComponentAtNode(administrador)
                ReactDOM.unmountComponentAtNode(grupo)
            }
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(this.state)
        console.log(this.state.tipo)
        if(this.state.tipo==="---"||this.state.tipo===""){
            alert("Tipo de usuario no valido");
            return;
        }
        console.log(this.state)
        //http://localhost/struts2react/input1.jsp
        let url = 'http://localhost:8080/ProjectFinalStruts/Revisa?id=' + this.state.id; 
        alert('URL:' + url);
        fetch(url).then(response => response.text()).then(data => {
            this.informacionDeUsuario(event);
            alert(data);
            //window.location.href = data;
            
        });
    }


    render(){
        return(
            <center className="container bg-white">
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <label className="font-weight-bold h5">Ingresa el id del grupo a modificar: </label>
                            </div>
                            <div className="col-8">
                                <input className="form-control" type="text" placeholder="Identificador del grupo" name="id" onChange={this.handleId} value={this.state.id} required></input>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col">
                                <input className="btn btn-info btn-lg btn-block" type="submit" value="Buscar"></input>
                            </div>
                        </div>
                        <br></br>
                    </div>
                </form>
            </center>
        );
    }
}

export default BuscarGrupo;