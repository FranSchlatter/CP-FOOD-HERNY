import {React, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import Card from "../Card/Card"
import * as actions from "../../redux/actions/index";
import { NavLink } from "react-router-dom";

const Cards = () => {
  const recipes = useSelector(state => state.recipes);
  const dispatch = useDispatch();

  useEffect( () => dispatch( actions.getAllRecipes() ), [dispatch] )

  return (
    <div>
      {
        recipes && recipes.map(rec => (
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

export default Cards;