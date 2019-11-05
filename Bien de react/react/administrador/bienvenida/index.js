import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import Bienvenida from './Bienvenida';
import Navegacion from './Navegacion';
const wrapper = document.getElementById("welcome");
wrapper ? ReactDOM.render(<Bienvenida texto="Bienvenido Administrador"/>, wrapper) : false;

const wrapper1 = document.getElementById("navega");
wrapper1 ? ReactDOM.render(<Navegacion />, wrapper1) : false;
serviceWorker.unregister();