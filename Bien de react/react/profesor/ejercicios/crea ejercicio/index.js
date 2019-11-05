import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import Bienvenida from './Bienvenida';
import EjercicioNuevo from './EjercicioNuevo';

const wrapper = document.getElementById("welcome");
wrapper ? ReactDOM.render(<Bienvenida texto="Agrega un nuevo ejercicio para tus alumnos."/>, wrapper) : false;

const wrapper2 = document.getElementById("formulario");
wrapper2 ? ReactDOM.render(<EjercicioNuevo />, wrapper2) : false;



serviceWorker.unregister();