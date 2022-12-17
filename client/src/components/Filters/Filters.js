import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "./../../redux/actions/index";
import './Filters.css';

const Filters = ({paginated, render, setRender}) => {
  const dispatch = useDispatch();

  useEffect( () => dispatch( actions.getAllDiets() ), [dispatch] )

  const allDiets = useSelector(state => state.diets);
  
  function searchName(e) {
    dispatch(actions.getAllRecipesName(e.target.value))
  }
  
  function filterName(e) {
    setRender(!render)
    dispatch(actions.orderName(e.target.value))
    paginated(1)
  }
  
  function filterHs(e) {
    setRender(!render)
    dispatch(actions.orderHs(e.target.value))
    paginated(1)
  }

  async function filterDiets(e) {
    await dispatch(actions.getAllRecipes())
    await dispatch(actions.orderDiets(e.target.value))
    paginated(1)
  }

  function clearFilters() {
    window.location.href = "http://localhost:3000/home";
  }

  function searchHs() {
    dispatch(actions.searchHS())
    paginated(1)
  }
 
  return ( 
    <div className='filters-main'>
      <input type="text" placeholder="Search recipe" onChange={(e) => searchName(e)}/>
      <select onChange={(e) => filterDiets(e)}>
        <option hidden disabled selected value>Filter by diets</option>
        {
          allDiets && allDiets.map(d =>(
            <option value={d.name} key={d.id}>{d.name}</option>
          ))
        }
      </select>
      <select onChange={(e) => filterName(e)}>
        <option hidden disabled selected value>Sort by name</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
      <select onChange={(e) => filterHs(e)}>
        <option hidden disabled selected value>Sort by healthy</option>
        <option value="1">1-100</option>
        <option value="100">100-1</option>
      </select>
      <button onClick={() => clearFilters()}>Clear Filters</button>
      <button onClick={() => searchHs()}>Search +70</button>
    </div>
  )
}

export default Filters;