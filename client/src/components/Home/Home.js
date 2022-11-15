import { React, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "./../../redux/actions/index";
import Paginated from '../Paginated/Paginated';
import Filters from '../Filters/Filters';
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

  const paginated = (pageNumber) => setCurrentPage(pageNumber)

  function recipesxpage(e) {
    setRecipesPerPage(e.target.value)
  }
  
  if(currentRecipes.length === 0) { // agregar timeout
    return (
      <div className='error'>
        <select onChange={(e) => recipesxpage(e)}>
          <option>Recipes x pag</option>
          <option value={6}>6</option>
          <option value={9}>9</option>
          <option value={12}>12</option>
          <option value={16}>16</option>
          <option value={20}>20</option>
        </select>
        <Paginated recipesPerPage={recipesPerPage} allRecipes={allRecipes.length} paginated={paginated} recipesxpage={recipesxpage}/>
        <Filters paginated={paginated}/>
        <h1>There are no matching recipes</h1>
      </div>
    )
  }

  // lo que quiero hacer, es que cuando este cargando aparezca loading, pero caundo filtre por x y no haya nada... deberia mostrar otra cosa (muestra loading ahora)
  // if(currentRecipes.length === 0) { // if loading true??
  //   return (
  //     <div className='error'>
  //       <h1>Loading</h1>
  //     </div>
  //   )
  // }

  return (
    <div className='main-conteiner'>
      <select onChange={(e) => recipesxpage(e)}>
        <option>Recipes x pag</option>
        <option value={6}>6</option>
        <option value={9}>9</option>
        <option value={12}>12</option>
        <option value={16}>16</option>
        <option value={20}>20</option>
      </select>
      <Paginated recipesPerPage={recipesPerPage} allRecipes={allRecipes.length} paginated={paginated} recipesxpage={recipesxpage}/>
      <Filters paginated={paginated}/>
      {
        currentRecipes && currentRecipes.map(rec => (
          <div key={rec.id} className="card">
            <NavLink to={`/home/recipe/${rec.id}`}>
              <Card key={rec.id} id={rec.id} name={rec.name} image={rec.image} diets={rec.diets} health_score={rec.health_score}/> 
            </NavLink>
          </div>
        ))
      }
    </div>
  )
}

export default Home;