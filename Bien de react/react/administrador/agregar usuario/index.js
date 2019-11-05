import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import Bienvenida from './Bienvenida';
import Navegacion from './Navegacion';
import NavegacionDeOpciones from './NavegacionDeOpciones';

const wrapper = document.getElementById("welcome");
wrapper ? ReactDOM.render(<Bienvenida texto="Agregar administrador, alumno, profesor o grupo"/>, wrapper) : false;

const wrapper1 = document.getElementById("navega");
wrapper1 ? ReactDOM.render(<Navegacion />, wrapper1) : false;

const wrapper3 = document.getElementById("opciones");
wrapper3 ? ReactDOM.render(<NavegacionDeOpciones />, wrapper3) : false;

serviceWorker.unregister();