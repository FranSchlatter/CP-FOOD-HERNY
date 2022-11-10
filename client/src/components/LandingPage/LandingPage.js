// Pagina inicial: deben armar una landing page con

// > Alguna imagen de fondo representativa al proyecto
// > Botón para ingresar al home (Ruta principal)

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from "./../../redux/actions/index";

import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='landing'>
      <p>Welcome to Panchitos</p>
      <NavLink to={"/home"}><button>Home</button></NavLink>
    </div>
  )
}

export default LandingPage;