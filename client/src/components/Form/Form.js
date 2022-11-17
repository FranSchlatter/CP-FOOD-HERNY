import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "./../../redux/actions/index";
import './Form.css';

const CreateRecipe = () => {

  const dispatch = useDispatch()

  useEffect( () => dispatch( actions.getAllDiets() ), [dispatch] )

  const allDiets = useSelector(state => state.diets);

  const [arrDiets, setArrDiets] = useState([])

  const [errors, setErrors] = useState({
    name:"",
    hs:"",
    diets:"",
    description:"",
    steps:""
  })

  const [input, setInput] = useState({
    name: "",
    description: "", 
    health_score: 1,
    steps: "",
    diets: []
  })

  function validated (input) {
    let needFix = {}
    if(!input.name) needFix.name = "This field must be filled"
    if(input.name.length < 5) needFix.name = "The name is too short, it needs at least 5 characters"
    if(!input.health_score) needFix.hs = "This field must be filled"
    if(input.health_score < 1) needFix.hs = "The health score cannot be less than 1"
    if(input.health_score > 100) needFix.hs = "The health score cannot be greater than 100"
    if(!input.description) needFix.description = "This field must be filled"
    if(input.description.length < 10) needFix.description = "The description is too short, it needs at least 10 characters"
    if(!input.steps) needFix.steps = "This field must be filled"
    if(input.steps.length < 10) needFix.steps = "The step-by-step is too short, it needs at least 10 characters"
    if(input.diets && input.diets.length < 1) needFix.diets = "You need to add and save at least one diet"
    return needFix
  }

  function inputChange (e) {
    e.preventDefault();
    setInput({...input, [e.target.name]: e.target.value})
    setErrors(validated({...input, [e.target.name]: e.target.value}))
  }

  function makeRecipe (e) {
    e.preventDefault();
    dispatch(actions.createRecipe(input))
  }

  function pushDiet (e) {
    e.preventDefault();
    if(!arrDiets.find(a => a === e.target.value)) setArrDiets([...arrDiets, e.target.value])
    else alert("That recipe is already added to the list")
  }

  function appdiets () {
    let arrDietsId = []
    arrDiets.map(diet => {
      allDiets.map(dietdb => { if(diet === dietdb.name) arrDietsId.push(dietdb.id) })
    })
    setInput({...input, diets: arrDietsId})
  }

  function removeArr (e) {
    e.preventDefault()
    let aux = arrDiets
    aux = aux.filter(a => a !== e.target.value)
    setArrDiets(aux)
  }

  return (
    <div className='div-form'>
      <form className='form' onSubmit={(e) => makeRecipe(e)}>
        <div>
          <label>Name: </label>
          <input required type="text" name="name" value={input.name} onChange={(e) => inputChange(e)}/>
          { errors.name && (<p>{errors.name}</p>) }
        </div>
        <div>
          <label>Url-Image: </label>
          <input type="text" name="image" value={input.image} onChange={(e) => inputChange(e)}/>
        </div>
        <div>
          <label>Health Score: </label>
          <input type="number" name="health_score" value={input.health_score} onChange={(e) => inputChange(e)}/>
          { errors.hs && (<p>{errors.hs}</p>) }
        </div>
        <div>
          <label>Diets: </label>
          <select onChange={(e) => pushDiet(e)}>
          <option hidden disabled selected value>Select diets</option>
            {
              allDiets && allDiets.map(d => ( <option value={d.name} key={d.id}>{d.name}</option> ))
            }
          </select>
          <div>
            <p>Diets selected: </p>
            { errors.diets && (<p>{errors.diets}</p>) }
            {
              arrDiets && arrDiets.map(d => ( 
              <div>
                <p>{d}</p> 
                <button value={d} onClick={(e) => removeArr(e)}>x</button>
              </div>
              ))
            }
          </div>
          <button type='button' onClick={() => appdiets()}>Save diets</button>
        </div>
        <div>
          <label>Description: </label>
          <textarea required type="text" name="description" value={input.description} onChange={(e) => inputChange(e)}/>
          { errors.description && (<p>{errors.description}</p>) }
        </div>
        <div>
          <label>Steps: </label>
          <input type="text" name="steps" value={input.steps} onChange={(e) => inputChange(e)}/>
          { errors.steps && (<p>{errors.steps}</p>) }
        </div>
        <button type="submit" disabled={errors.name || errors.hs || errors.description || errors.steps}>Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;