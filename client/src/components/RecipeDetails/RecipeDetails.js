import {React, useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "./../../redux/actions/index";
import './RecipeDetails.css';

const RecipeDetails = (props) => {
  const recipeId = props.match.params.id

  const [input, setInput] = useState({ id: "", health_score: 1 })

  const dispatch = useDispatch();

  const recipeDetail = useSelector(state => state.recipeDetail);

  useEffect( () => dispatch( actions.getRecipeDetails(recipeId) ), [dispatch] )

  function deleteRec() {
    if(window.confirm("Do you really want to delete this recipe?")){
      dispatch( actions.deleteRecipe(recipeId));
      alert("Recipe deleted successfully");
      window.location.href = "http://localhost:3000/home";
    }    
  }

  function inputChangeHs (e) {
    e.preventDefault();
    const n = parseInt(e.target.value)
    setInput({...input, id: recipeId, health_score: n})
  }

  function submitHS(e) {
    e.preventDefault();
    dispatch(actions.updateRecipe(input));
  }

  if(!isNaN(recipeId)) {
    return (
      <div className="rec-main-api">
        <div className="left"> 
          <h2>{recipeDetail.name}</h2>
          <img className="card-img" src={recipeDetail.image} alt="img"/>
          <h4>Dish types: {recipeDetail.dish_types}</h4>
          <h4>Health score: {recipeDetail.health_score}</h4>
          <h4>Diet types: {recipeDetail.diets && recipeDetail.diets.join(", ")}</h4>
        </div> 
        <div className="right"> 
          <h5>Description: {recipeDetail.res}</h5>
          <h5>Step-by-step: {recipeDetail.steps || "This recipe does not contain a step by step"}</h5>
        </div>       
      </div>
    )
  }

  return (
    <div className="rec-main-api">
        <div className="left"> 
          <h2>{recipeDetail.name}</h2>
          <img className="card-img" src={recipeDetail.image} alt="img"/>
          <h4>Health score: {recipeDetail.health_score}</h4>
          <h4>Diet types: {recipeDetail.diets && recipeDetail.diets.join(", ")}</h4>
          <form onSubmit={(e) => submitHS(e)}>
            <label>Change health-score: </label>
            <input required min={1} max={100} type="number" placeholder="Update" onChange={(e) => inputChangeHs(e)}/>
          <button type="submit">Update HS</button>
          <button onClick={() => deleteRec()}>Delete</button>
        </form>
        </div> 
        <div className="right"> 
          <h5>Description: {recipeDetail.description}</h5>
          <h5>Step-by-step: {recipeDetail.steps || "This recipe does not contain a step by step"}</h5>
        </div>     
      </div>
  )
}

export default RecipeDetails;