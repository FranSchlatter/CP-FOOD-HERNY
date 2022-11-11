// Ruta principal: debe contener

// [ ] Input de búsqueda para encontrar recetas por nombre
// [ ] Área donde se verá el listado de recetas. Deberá mostrar su:
// Imagen
// Nombre
// Tipo de dieta (vegetariano, vegano, apto celíaco, etc)
// [ ] Botones/Opciones para filtrar por por tipo de dieta
// [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por health score (nivel de comida saludable).
// [ ] Paginado para ir buscando y mostrando las siguientes recetas, 9 recetas por pagina, mostrando las primeros 9 en la primer pagina.
// IMPORTANTE: Dentro de la Ruta Principal se deben mostrar tanto las recetas traidas desde la API como así también las de la base de datos. 
// Debido a que en la API existen alrededor de 5 mil recetas, por cuestiones de performance pueden tomar la simplificación de obtener y paginar las primeras 100.

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from "./../../redux/actions/index";

import './Home.css';
import Cards from '../Cards/Cards';

const Home = () => {
  return (
    <div className='main-conteiner'>
      <Cards/>
    </div>
  )
}

export default Home;