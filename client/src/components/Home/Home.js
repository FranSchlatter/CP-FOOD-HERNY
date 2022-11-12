import  { React, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "./../../redux/actions/index";
import Paginated from '../Paginated/Paginated';

import './Home.css';
import Card from '../Card/Card';

const Home = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector(state => state.recipes);
  const [currentPage, setCurrentPage] = useState(1)
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  useEffect( () => dispatch( actions.getAllRecipes() ), [dispatch] )

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  

  return (
    <div className='main-conteiner'>
      <Paginated recipesPerPage={recipesPerPage} allRecipes={allRecipes.length} paginated={paginated}/>
      {
        currentRecipes && currentRecipes.map(rec => (
          <div key={rec.id} className="card">
            <NavLink to={`/home/recipe/${rec.id}`}>
              <Card key={rec.id} id={rec.id} name={rec.name} image={rec.image} diets={rec.diets} dishtypes={rec.dish_types}/>
            </NavLink>
          </div>
        ))
      }
    </div>
  )
}

export default Home;