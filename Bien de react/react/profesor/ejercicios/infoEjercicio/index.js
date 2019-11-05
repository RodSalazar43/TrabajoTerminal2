import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import Bienvenida from './Bienvenida';
import InfoEjercicio from './InfoEjercicio';

const wrapper = document.getElementById("welcome");
wrapper ? ReactDOM.render(<Bienvenida texto="Aqui se muestra la información del ejercicio seleccionado"/>, wrapper) : false;



serviceWorker.unregister();