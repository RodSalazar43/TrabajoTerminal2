import React, { Component } from 'react'

class EjercicioNuevo extends Component {
  constructor() {
    super();
    this.state = {
      ejercicio: {
        instruccion: '', nombre: '', opcion1: '', opcion2: '', opcion3: '', opcion4: '', resultado: ''
      }

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    console.log(this.state.ejercicio)
    this.setState({
      ejercicio: {
        ...this.state.ejercicio,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.ejercicio.nombre);
    event.preventDefault();
    const data = new FormData(event.target);
    //http://localhost/struts2react/input1.jsp
    let url = `http://localhost:8080/ProjectFinalStruts/inEjercicio?inst=${this.state.ejercicio.instruccion}&op1=${this.state.ejercicio.opcion1}&op2=${this.state.ejercicio.opcion2}&op3=${this.state.ejercicio.opcion3}&op4=${this.state.ejercicio.opcion4}&res=${this.state.ejercicio.resultado}`;
    alert('URL:' + url);
    fetch(url).then(response => response.text()).then(data => {
      console.log(response)
      alert(data);
      console.log(data)
      window.location.href = data;
    });
  }

  render() {
    return (
      <div className="contenido-grande alert-secondary" >
        <div className="card-header">
          <h3 className="text-center">Ingresa los datos del nuevo ejercicio a agregar</h3>
        </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <label className='font-weight-bold'>Nombre del ejercicio:</label>
              <input className="form-control border-dark " type="text" name="nombre" value={this.state.ejercicio.nombre} onChange={this.handleChange} />
              <label className='font-weight-bold'>Ingresa las instrucciones para el alumno:</label>
              <input className="form-control border-dark" type="nombre" name="instruccion" value={this.state.ejercicio.instruccion} onChange={this.handleChange} />
              <label className="font-italic font-weight-bold text-uppercase">Ingresa las opciones para que el alumno elija</label><br></br>
              <center>
                <label className='font-weight-bold'>
                  Opcion 1:
                <input className="form-control border-dark " type="text" name="opcion1" value={this.state.ejercicio.opcion1} onChange={this.handleChange} />
                </label>
                <label className='font-weight-bold'>
                  Opcion 2:
                <input className="form-control border-dark " type="text" name="opcion2" value={this.state.ejercicio.opcion2} onChange={this.handleChange} />
                </label>
                <label className='font-weight-bold'>
                  Opcion 3:
                <input className="form-control border-dark " type="text" name="opcion3" value={this.state.ejercicio.opcion3} onChange={this.handleChange} />
                </label>
                <label className='font-weight-bold'>
                  Opcion 4:
                <input className="form-control border-dark " type="text" name="opcion4" value={this.state.ejercicio.opcion4} onChange={this.handleChange} />
                </label><br></br>
              </center>
              <label className='font-weight-bold'>Ingresa el resultado correcto: </label>
              <input className="form-control border-dark " type="text" name="resultado" value={this.state.ejercicio.resultado} onChange={this.handleChange} />
              <br></br>
              <input type="submit" className="btn btn-success form-control" value="Guardar" />
              <br></br><br></br>
            </form>
          </div>
      </div>
    );
  }
}

export default EjercicioNuevo;