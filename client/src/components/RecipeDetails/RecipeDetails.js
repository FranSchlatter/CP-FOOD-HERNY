import {React, useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "./../../redux/actions/index";
import './RecipeDetails.css';

const RecipeDetails = (props) => {
  const recipeId = props.match.params.id

  const [input, setInput] = useState({ id: "", health_score: 1 })

  const dispatch = useDispatch();

  const recipeDetail = useSelector(state => state.recipeDetail);

  useEffect( () => dispatch( actions.getRecipeDetails(recipeId) ) )

  function deleteRec() {
    dispatch( actions.deleteRecipe(recipeId));
    alert("Recipe deleted successfully");
    window.location.href = "http://localhost:3000/home";
  }

  function inputChangeHs (e) {
    e.preventDefault();
    const n = parseInt(e.target.value)
    setInput({...input, id: recipeId, health_score: n})
  }

  function submitHS(e) {
    e.preventDefault();
    dispatch(actions.updateRecipe(input));
    alert("Recipe updated successfully");
  }

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
      <label>Health Score: </label>
      <form onSubmit={(e) => submitHS(e)}>
        <input type="number" placeholder="Update health score" onChange={(e) => inputChangeHs(e)}/>
        <button type="submit">Update HS</button>
      </form>
      <button onClick={() => deleteRec()}>Delete</button>
    </div>
  )
}

{/* <input type="number" placeholder="Update health score" onChange={(e) => inputChangeHs(e)}/>
<button onClick={() => submitHS()}>Update HS</button> */}
export default RecipeDetails;