// Ruta de detalle de receta: debe contener

// [ ] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
// [ ] Resumen del plato
// [ ] Nivel de "comida saludable" (health score)
// [ ] Paso a paso

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from "./../../redux/actions/index";

import './RecipeDetails.css';

const RecipeDetails = () => {
  return (
    <div>
      <p>Holis soy los RecipeDetails</p>
    </div>
  )
}

export default RecipeDetails;