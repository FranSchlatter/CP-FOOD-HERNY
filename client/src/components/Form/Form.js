import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "./../../redux/actions/index";

import './Form.css';

const CreateRecipe = () => {

  const [input, setInput] = React.useState({name:"", image:"", healthScore:1, description:"", diets:"", steps:""})

  const dispatch = useDispatch()

  function inputChange (e) {
    e.preventDefault();
    setInput({...input, [e.target.name]: e.target.value})
  }

  const msj = useSelector(state => state.msj)

  function makeRecipe (e) {
    e.preventDefault();
    dispatch(actions.createRecipe(input))
  }

  return (
    <div className='form'>
      <form onSubmit={(e) => makeRecipe(e)}>
        <label>Name: </label>
        <input type="text" name="name" value={input.name} onChange={(e) => inputChange(e)}/>
        <label>Url-Image: </label>
        <input type="text" name="image" value={input.image} onChange={(e) => inputChange(e)}/>
        <label>Health Score: </label>
        <input type="number" name="healthScore" value={input.healthScore} onChange={(e) => inputChange(e)}/>
        <label>Diets: </label>
        <select>
          <option>Gluten Free</option>
          <option>Dairy Free</option>
          <option>Lacto Ovo Vegetarian</option>
          <option>Vegan</option>
          <option>Paleolithic</option>
          <option>Primal</option>
          <option>Whole 30</option>
          <option>Pescatarian</option>
          <option>Ketogenic</option>
          <option>Fodmap Friendly</option>
          <option>Vegetarian</option>
          <option>Lacto Vegetarian</option>
          <option>Ovo Vegetarian</option>
          <option>Paleo</option>
          <option>Low Fodmap</option>
        </select>
        <label>Description: </label>
        <textarea type="text" name="description" value={input.description} onChange={(e) => inputChange(e)}/>
        <label>Steps: </label>
        <input type="text" name="steps" value={input.steps} onChange={(e) => inputChange(e)}/>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;