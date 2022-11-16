import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "./../../redux/actions/index";
import './Form.css';

const CreateRecipe = () => {

  const dispatch = useDispatch()

  useEffect( () => dispatch( actions.getAllDiets() ), [dispatch] )

  const allDiets = useSelector(state => state.diets);

  const [arrDiets, setArrDiets] = useState([])

  const [input, setInput] = useState({
    name: "",
    description: "", 
    health_score: 1,
    steps: "",
    diets: []
  })

  function inputChange (e) {
    e.preventDefault();
    setInput({...input, [e.target.name]: e.target.value})
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
      allDiets.map(dietdb => {
        if(diet === dietdb.name) arrDietsId.push(dietdb.id)
      })
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
    <div className='form'>
      <form onSubmit={(e) => makeRecipe(e)}>
        <label>Name: </label>
        <input required type="text" name="name" value={input.name} onChange={(e) => inputChange(e)}/>
        <label>Url-Image: </label>
        <input type="text" name="image" value={input.image} onChange={(e) => inputChange(e)}/>
        <label>Health Score: </label>
        <input type="number" name="health_score" value={input.health_score} onChange={(e) => inputChange(e)}/>
        <label>Diets: </label>
        <select onChange={(e) => pushDiet(e)}>
        <option hidden disabled selected value>Select diets</option>
          {
            allDiets && allDiets.map(d => ( <option value={d.name} key={d.id}>{d.name}</option> ))
          }
        </select>
        <div>
          <p>Diets selected: </p>
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