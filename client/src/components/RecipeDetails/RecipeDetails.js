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

  const regex = /( |<([^>]+)>)/ig; // elimina etiquetas HTML

  if(!isNaN(recipeId)) {
    return (
      <div className="conteinter">
        <div className="rec-main-api">
          <div className="left"> 
            <h2>{recipeDetail.name}</h2>
            <img className="card-img" src={recipeDetail.image} alt="img"/>
            <h4>Dish types: {recipeDetail.dish_types}</h4>
            <h4 className="hs">Health score: {recipeDetail.health_score}</h4>
            <h4>Diet types: {recipeDetail.diets && recipeDetail.diets.join(", ")}</h4>
          </div> 
          <div className="right"> 
            <div>
              <h3>Description</h3>
              <h5>{recipeDetail.res && recipeDetail.res.replace(regex, ' ')}</h5>
            </div>
            <div>
              <h3>Step-by-step</h3>
              <h5>{(recipeDetail.steps && recipeDetail.steps.replace(regex, ' ')) || "This recipe does not contain a step by step"}</h5>
            </div>
          </div>       
        </div>
        <div className='footer2'>
          <h2>Developed by: Francisco Schlatter</h2>
          <div>
            <a href='https://github.com/FranSchlatter/CP-FOOD-HERNY'>
              <img className="icono-img" src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="github"/>
            </a>
            <a href='https://www.linkedin.com/in/francisco-schlatter-a62667218/'> 
              <img className="icono-img" src="https://cdn-icons-png.flaticon.com/512/3955/3955051.png" alt="linkedin"/>
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="conteinter">
      <div className="rec-main-api">
        <div className="left"> 
        <div className="left-title">
          <h2>{recipeDetail.name}</h2>
          <button onClick={() => deleteRec()}>Delete recipe</button>
        </div>
          <img className="card-img" src={recipeDetail.image} alt="img"/>
          <h4 className="hs">Health score: {recipeDetail.health_score}</h4>
          <h4>Diet types: {recipeDetail.diets && recipeDetail.diets.join(", ")}</h4>
          <form className="form-hs" onSubmit={(e) => submitHS(e)}>
            <label>Change health-score: </label>
            <input required min={1} max={100} type="number" placeholder="Update" onChange={(e) => inputChangeHs(e)}/>
          <button type="submit">Update HS</button>
        </form>
        </div>
        <div className="right"> 
          <div>
            <h3>Description</h3>
            <h5>{recipeDetail.description}</h5>
          </div>
          <div>
            <h3>Step-by-step</h3>
            <h5>{recipeDetail.steps || "This recipe does not contain a step by step"}</h5>
          </div>
        </div>     
      </div>
      <div className='footer2'>
        <h2>Developed  by: Francisco Schlatter</h2>
        <div>
          <a href='https://github.com/FranSchlatter/CP-FOOD-HERNY'>
            <img className="icono-img" src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="github"/>
          </a>
          <a href='https://www.linkedin.com/in/francisco-schlatter-a62667218/'> 
            <img className="icono-img" src="https://cdn-icons-png.flaticon.com/512/3955/3955051.png" alt="linkedin"/>
          </a>  
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails;