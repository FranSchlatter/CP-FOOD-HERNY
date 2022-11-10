// Ruta de creación de recetas: debe contener

// [ ] Un formulario controlado con JavaScript con los siguientes campos:
// Nombre
// Resumen del plato
// Nivel de "comida saludable" (health score)
// Paso a paso
// [ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas
// [ ] Botón/Opción para crear una nueva receta

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from "./../../redux/actions/index";

import './Form.css';

const Form = () => {
  return (
    <div>
      <p>Holis soy el formulario</p>
    </div>
  )
}

export default Form;