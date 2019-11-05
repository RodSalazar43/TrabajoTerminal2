import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ModificaAlumno from './ModificaAlumno';
import BuscarUsuario from './BuscarUsuario';
import ModificaGrupo from './ModificaGrupo';
import ModificaProfesor from './ModificaProfesor';
import BuscarGrupo from './BuscarGrupo';


class NavegacionDeOpcionesModifica extends Component{
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
        this.handleProfesor=this.handleProfesor.bind(this);
        this.handleAlumno=this.handleAlumno.bind(this);
        this.handleGrupo=this.handleGrupo.bind(this);
    }

    handleUsuario(e) {
            const administrador = document.getElementById("modificaUsuario");
            const profesor= document.getElementById("profesor");
            const alumno=document.getElementById("alumno");
            const grupo=document.getElementById("grupo");
            const muestraNuevo=this.state.administrador;
            if(muestraNuevo===false){
                administrador ? ReactDOM.render(<BuscarUsuario />,administrador ): false;
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
    
    handleProfesor(e) {
            const administrador = document.getElementById("modificaUsuario");   
            const profesor= document.getElementById("profesor");
            const alumno=document.getElementById("alumno");
            const grupo=document.getElementById("grupo");
            const muestraProfe=this.state.profesor;
            if(muestraProfe===false){
                profesor ? ReactDOM.render(<ModificaProfesor />,profesor ): false;
                this.setState({ profesor: !this.state.profesor})
                this.setState({ administrador: false })
                this.setState({ alumno: false })
                this.setState({ grupo: false })
                ReactDOM.unmountComponentAtNode(administrador)
                ReactDOM.unmountComponentAtNode(alumno)
                ReactDOM.unmountComponentAtNode(grupo)
            }else{
                this.setState({ profesor: !this.state.profesor })          
                ReactDOM.unmountComponentAtNode(administrador)
                ReactDOM.unmountComponentAtNode(profesor)
                ReactDOM.unmountComponentAtNode(alumno)
                ReactDOM.unmountComponentAtNode(grupo)
                
            }
            //console.log(this.state)
    }
   
    handleAlumno(e) {
            const administrador = document.getElementById("modificaUsuario");
            const profesor= document.getElementById("profesor");
            const alumno=document.getElementById("alumno");
            const grupo=document.getElementById("grupo");
            const muestraAlumno=this.state.alumno;
            if(muestraAlumno===false){
                administrador ? ReactDOM.render(<ModificaAlumno />,alumno ): false;
                this.setState({ alumno: !this.state.alumno})
                this.setState({ administrador: false })
                this.setState({ profesor: false })
                this.setState({ grupo: false })
                ReactDOM.unmountComponentAtNode(administrador)
                ReactDOM.unmountComponentAtNode(profesor)
                ReactDOM.unmountComponentAtNode(grupo)
            }else{
                this.setState({ alumno: !this.state.alumno })
                ReactDOM.unmountComponentAtNode(alumno)
                ReactDOM.unmountComponentAtNode(administrador)
                ReactDOM.unmountComponentAtNode(profesor)
                ReactDOM.unmountComponentAtNode(grupo)
            }
            //console.log(this.state)
    }

    handleGrupo(e){
            const administrador = document.getElementById("modificaUsuario");
            const grupo=document.getElementById("profesor");
            const muestraGrupo=this.state.grupo;
            if(muestraGrupo===false){
                grupo ? ReactDOM.render(<BuscarGrupo />,grupo ): false;
                this.setState({ grupo: !this.state.grupo})
                this.setState({ administrador: false })
                ReactDOM.unmountComponentAtNode(administrador)
            }else{
                this.setState({ grupo: !this.state.grupo })
                ReactDOM.unmountComponentAtNode(administrador)
                ReactDOM.unmountComponentAtNode(grupo)
            }
    }

    render(){
        return(
            <div className="container-fluid">
                <nav className="breadcrumb bg-secondary justify-content-center">
                <ol className="breadcrumb bg-light">
                    <li className="breadcrumb-item"><button className="btn btn-primary" aria-current="page" onClick={this.handleUsuario}>Modificar usuario</button></li>
                    <li className="breadcrumb-item"><button className="btn btn-primary" aria-current="page" onClick={this.handleGrupo}>Modificar grupo</button></li>
                </ol>
            </nav>
            </div>
        );
    }
}

export default NavegacionDeOpcionesModifica;