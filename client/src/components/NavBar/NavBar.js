import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div className='nav'>
      <NavLink to={`/home`}>
        <button>Home</button>
      </NavLink>
      <p>imgtitulo - inputbusqueda - filtrardiets - ordenarA-Z-1-100</p>
      <NavLink to={`/home/create`}>
        <button>Create Recipe</button>
      </NavLink>
    </div>
  )
}

export default NavBar;