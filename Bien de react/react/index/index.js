import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Login from './Login';
import * as serviceWorker from './serviceWorker';
import Bienvenida from './Bienvenida';
import Alerta from './Alerta';

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Login />, wrapper) : false;

const wrapper1 = document.getElementById("welcome");
wrapper1 ? ReactDOM.render(<Bienvenida boton="Ver más información" texto="Amigable para el alumno y fácil para el maestro."/>, wrapper1) : false;

const wrapper2 = document.getElementById("alerta");
wrapper2 ? ReactDOM.render(<Alerta texto="Si no estas registrado, contacta al administrador o profesor"/>, wrapper2) : false;

//ReactDOM.render(<Login />, document.getElementById('root'));
//ReactDOM.render(<Bienvenida boton="Ver más información" texto="Amigable para el alumno y fácil para el maestro."/>,document.getElementById('welcome'));
//ReactDOM.render(<Alerta texto="Si no estas registrado, contacta al administrador o profesor"/>,document.getElementById('alerta'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
