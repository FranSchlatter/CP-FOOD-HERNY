import React from 'react';
import { NavLink } from 'react-router-dom';

import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='landing'>
      <p>S</p>
      <NavLink to={"/home"}><button>Start cooking</button></NavLink>
    </div>
  )
}

export default LandingPage;