import { React } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return ( 
    <div className='nav'>
      <NavLink to={`/home`}>
        <button>Home</button>
      </NavLink>
      <h2>HEALTHY LIFE</h2>
      <NavLink to={`/home/create`}>
        <button>Create Recipe</button>
      </NavLink>
    </div>
  )
}

export default NavBar;