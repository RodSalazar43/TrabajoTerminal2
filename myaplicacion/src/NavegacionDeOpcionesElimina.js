import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EliminaGrupo from './EliminaGrupo';
import EliminaUsuario from './EliminaUsuario'

class NavegacionDeOpcionesElimina extends Component{
    //Esta pagina es para modificar los datos que ya existen en la base de datos
    constructor(){
        super();
        this.state={
            administrador: false,
            profesor: false,
            alumno:false,
            grupo:false
        }
        this.handleUsuario=this.handleUsuario.bind(this);
        this.handleGrupo=this.handleGrupo.bind(this);
    }

    handleUsuario(e) {
            const administrador = document.getElementById("modificaUsuario");
            const profesor= document.getElementById("profesor");
            const alumno=document.getElementById("alumno");
            const grupo=document.getElementById("grupo");
            const muestraNuevo=this.state.administrador;
            if(muestraNuevo===false){
                administrador ? ReactDOM.render(<EliminaUsuario />,administrador ): false;
                this.setState({ administrador: !this.state.administrador})
                this.setState({ profesor: false })
                this.setState({ alumno: false })
                this.setState({ grupo: false })
                ReactDOM.unmountComponentAtNode(profesor)
                ReactDOM.unmountComponentAtNode(alumno)
                ReactDOM.unmountComponentAtNode(grupo)
            }else{
                this.setState({ administrador: !this.state.administrador })
                ReactDOM.unmountComponentAtNode(administrador)
                ReactDOM.unmountComponentAtNode(profesor)
                ReactDOM.unmountComponentAtNode(alumno)
                ReactDOM.unmountComponentAtNode(grupo)
            }
            //console.log(this.state)
    }
    
    handleGrupo(e){
            const administrador = document.getElementById("modificaUsuario");
            const profesor= document.getElementById("profesor");
            const alumno=document.getElementById("alumno");
            const grupo=document.getElementById("grupo");
            const muestraGrupo=this.state.grupo;
            if(muestraGrupo===false){
                grupo ? ReactDOM.render(<EliminaGrupo />,grupo ): false;
                this.setState({ grupo: !this.state.grupo})
                this.setState({ administrador: false })
                this.setState({ profesor: false })
                this.setState({ alumno: false })
                ReactDOM.unmountComponentAtNode(administrador)
                ReactDOM.unmountComponentAtNode(profesor)
                ReactDOM.unmountComponentAtNode(alumno)
            }else{
                this.setState({ grupo: !this.state.grupo })
                ReactDOM.unmountComponentAtNode(alumno)
                ReactDOM.unmountComponentAtNode(administrador)
                ReactDOM.unmountComponentAtNode(profesor)
                ReactDOM.unmountComponentAtNode(grupo)
            }
    }

    render(){
        return(
            <div className="container-fluid">
                <nav className="breadcrumb bg-secondary justify-content-center">
                <ol className="breadcrumb bg-light">
                    <li className="breadcrumb-item"><button className="btn btn-primary" aria-current="page" onClick={this.handleUsuario}>Elimina usuario</button></li>
                    <li className="breadcrumb-item"><button className="btn btn-primary" aria-current="page" onClick={this.handleGrupo}>Elimina grupo</button></li>
                </ol>
            </nav>
            </div>
        );
    }
}

export default NavegacionDeOpcionesElimina;