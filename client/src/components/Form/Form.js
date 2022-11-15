import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from "./../../redux/actions/index";
import './Form.css';

const CreateRecipe = () => {

  const [input, setInput] = React.useState({
    name: "",
    description: "", 
    health_score: 1,
    steps: "",
    diets: ["2beac845-b424-4b9f-867b-a62f7b1d626b"] // falta editar, hardcodeado
  })

  const dispatch = useDispatch()

  function inputChange (e) {
    e.preventDefault();
    setInput({...input, [e.target.name]: e.target.value})
  }

  function makeRecipe (e) {
    e.preventDefault();
    dispatch(actions.createRecipe(input))
  }

  return (
    <div className='form'>
      <form onSubmit={(e) => makeRecipe(e)}>
        <label>Name: </label>
        <input required type="text" name="name" value={input.name} onChange={(e) => inputChange(e)}/>
        <label>Url-Image: </label>
        <input type="text" name="image" value={input.image} onChange={(e) => inputChange(e)}/>
        <label>Health Score: </label>
        <input type="number" name="health_score" value={input.health_score} onChange={(e) => inputChange(e)}/>
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
        <textarea required type="text" name="description" value={input.description} onChange={(e) => inputChange(e)}/>
        <label>Steps: </label>
        <input type="text" name="steps" value={input.steps} onChange={(e) => inputChange(e)}/>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;