import React, { Component } from 'react';

class Profe2Grupo extends Component{
    constructor(){
        super();
        this.state={
            grupo: '', idProfesor: ''
        }
        this.handleId=this.handleId.bind(this);
    }
    handleId(e){
        this.setState({grupo:event.target.value})
        console.log(this.state)
    }
    render(){
            return(
                <center className="container bg-warning">
                <br></br>
                    <form onSubmit={this.handleSubmit}>
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <label className="font-weight-bold h5">Ingresa el id del profesor: </label>
                                </div>
                                <div className="col-8">
                                    <input className="form-control" type="text" placeholder="El grupo debe existir" name="grupo" onChange={this.handleId} value={this.state.id} required></input>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-12">
                                    <input type="submit" className="btn btn-success btn-outline-light btn-block" value="Buscar"></input>
                                </div>
                                
                            </div>
                        </div>
                    </form>
                </center>
            );
    }

}

export default Profe2Grupo;