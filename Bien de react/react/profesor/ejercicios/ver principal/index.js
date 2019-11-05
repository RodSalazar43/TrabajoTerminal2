import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import Bienvenida from './Bienvenida';
import NavegacionProfesor from './NavegacionProfesor';
import Alerta from './Alerta';

const wrapper = document.getElementById("welcome");
wrapper ? ReactDOM.render(<Bienvenida texto="Al presionar el botón se cargará la tabla mostrando los ejercicios."/>, wrapper) : false;

const wrapper1 = document.getElementById("navegaProfe");
wrapper1 ? ReactDOM.render(<NavegacionProfesor />, wrapper1) : false;


const wrapper2 = document.getElementById("alerta");
wrapper2 ? ReactDOM.render(<Alerta texto="Si al presionar el botón no carga ningun ejercicio. Intenta agregar un nuevo ejercicio o contacta al administrador" />, wrapper2) : false;

serviceWorker.unregister();