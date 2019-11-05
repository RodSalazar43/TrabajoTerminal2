import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import Bienvenida from './Bienvenida';
import Prueba from './Prueba'

const wrapper = document.getElementById("welcome");
wrapper ? ReactDOM.render(<Bienvenida texto="Aqui se muestra la información del examen seleccionado"/>, wrapper) : false;

const wrapper1=document.getElementById("testEjercicio");
wrapper1 ? ReactDOM.render(<Prueba />,wrapper1):false;



serviceWorker.unregister();