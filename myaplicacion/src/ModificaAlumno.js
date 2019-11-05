import React, { Component } from 'react';

class ModificaAlumno extends Component{
    constructor(){
        super();
        this.state={
            id:'',
        }
        this.handleId=this.handleId.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleId(event){
        this.setState({id:event.target.value})
        console.log(this.state)
    }

    handleSubmit(event){

    }
    
    render(){
        return(
            <center className="container bg-primary">
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <label className="font-weight-bold h5">Ingresa el id del alumno: </label>
                            </div>
                            <div className="col-8">
                                <input className="form-control" type="text" placeholder="El grupo debe existir" name="grupo" onChange={this.handleId} value={this.state.id} required></input>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-12">
                                <input type="submit" className="btn btn-secondary btn-outline-light btn-block" value="Buscar"></input>
                            </div>  
                        </div>
                    </div>
                </form>
                </center>
        );
    }
}

export default ModificaAlumno;