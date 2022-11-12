import * as actions from "./../../redux/actions/index";
import {React, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import './RecipeDetails.css';

const RecipeDetails = (props) => {
  const recipeId = props.match.params.id

  const dispatch = useDispatch();

  const recipeDetail = useSelector(state => state.recipeDetail);

  useEffect( () => dispatch( actions.getRecipeDetails(recipeId) ) )

  if(!isNaN(recipeId)) {
    return (
      <div>     
        <h1>{recipeDetail.name}</h1>
        <img className="card-img" src={recipeDetail.image} alt="img"/>
        <h4>tipo de plato: {recipeDetail.dish_types}</h4>
        <h4>healt score: {recipeDetail.health_score}</h4>
        <h4>tipo de dieta: {recipeDetail.diets}</h4>
        <h4>res plato: {recipeDetail.res}</h4>
        <h4>steps: {recipeDetail.steps}</h4>
      </div>
    )
  }

  return (
    <div>     
      <h1>{recipeDetail.name}</h1>
      <img className="card-img" src={recipeDetail.image} alt="img"/>
      <h4>healt score: {recipeDetail.health_score}</h4>
      <h4>tipo de dieta: {recipeDetail.diets}</h4>
      <h4>steps: {recipeDetail.steps}</h4>
    </div>
  )
}

export default RecipeDetails;