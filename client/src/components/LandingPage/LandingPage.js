import React from 'react';
import { NavLink } from 'react-router-dom';

import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='landing'>
      <p>Project created by: Francisco Schlatter</p>
      <div>
        <a href='https://github.com/FranSchlatter/CP-FOOD-HERNY'>
          <img className="icono-img" src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="github"/>
        </a>
        <a href='https://www.linkedin.com/in/francisco-schlatter-a62667218/'> 
          <img className="icono-img" src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="linkedin"/>
        </a>
      </div>
      <NavLink to={"/home"}><button>Start cooking</button></NavLink>
    </div>
  )
}

export default LandingPage;