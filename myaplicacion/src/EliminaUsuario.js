import React, { Component } from 'react';

class EliminaUsuario extends Component{
    constructor(){
        super();
        this.state = { id:''}
        this.handleId= this.handleId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleId(event) {
        this.setState({ id: event.target.value })
        console.log(this.state)
    }


    handleSubmit(event) {
        event.preventDefault();
        var decision=confirm("¿Esta segur@ que desea eliminar el usuario con id: "+this.state.id+"?");
        if(decision===true){
            let url = 'http://localhost:8080/ProjectFinalStruts/EliminarUsuario?id=' + this.state.id;
            alert('URL:' + url);
            fetch(url).then(response => response.text()).then(data => {
                alert(data);
            });
        }else{
            return;
        }
    }


    render(){
        return(
            <center className="container bg-info">
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <label className="font-weight-bold text-white h5">Ingresa id del usuario a borrar: </label>
                            </div>
                            <div className="col-8">
                                <input className="form-control" type="text" placeholder="El usuario debe existir" name="id" onChange={this.handleId} value={this.state.id} required></input>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col">
                                <input className="btn btn-danger btn-lg btn-block" type="submit" value="Eliminar"></input>
                            </div>
                        </div>
                        <br></br>
                    </div>
                </form>
            </center>
        );
    }
}

export default EliminaUsuario;