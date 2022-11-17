import { React } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from "./../../redux/actions/index";
import './Filters.css';

const Filters = ({paginated, render, setRender}) => {
  const dispatch = useDispatch();
  
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
 
  return ( 
    <div className='filters-main'>
      <input type="text" placeholder="Search recipe" onChange={(e) => searchName(e)}/>
      <select onChange={(e) => filterDiets(e)}>
        <option hidden disabled selected value>Filter by diets</option>
        <option value="gluten free">Gluten Free</option>
        <option value="dairy free">Dairy Free</option>
        <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="paleolithic">Paleolithic</option>
        <option value="primal">Primal</option>
        <option value="whole 30">Whole 30</option>
        <option value="pescatarian">Pescatarian</option>
        <option value="ketogenic">Ketogenic</option>
        <option value="fodmap friendly">Fodmap Friendly</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="lacto vegetarian">Lacto Vegetarian</option>
        <option value="ovo vegetarian">Ovo Vegetarian</option>
        <option value="paleo">Paleo</option>
        <option value="low fodmap">Low Fodmap</option>
      </select>
      <select onChange={(e) => filterName(e)}>
        <option hidden disabled selected value>Sort by name</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
      <select onChange={(e) => filterHs(e)}>
        <option hidden disabled selected value>Sort by health score</option>
        <option value="1">1-100</option>
        <option value="100">100-1</option>
      </select>
      <button onClick={() => clearFilters()}>Clear Filters</button>
    </div>
  )
}

export default Filters;