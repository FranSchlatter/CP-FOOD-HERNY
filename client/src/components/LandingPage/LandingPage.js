import React from 'react';
import { NavLink } from 'react-router-dom';

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