import { React } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from "./../../redux/actions/index";
import './Filters.css';

const Filters = ({paginated}) => {
  const dispatch = useDispatch();
  
  function searchName(e) {
    dispatch(actions.getAllRecipesName(e.target.value))
  }
  // anda pero si estas en pag 1, no se actualiza solo
  function filterName(e) {
    dispatch(actions.orderName(e.target.value))
    paginated(1)
  }
  // anda pero si estas en pag 1, no se actualiza solo
  function filterHs(e) {
    dispatch(actions.orderHs(e.target.value))
    paginated(1)
  }

  async function filterDiets(e) {
    await dispatch(actions.getAllRecipes())
    await dispatch(actions.orderDiets(e.target.value))
  }

  function clearFilters() {
    dispatch(actions.getAllRecipes())
  }
 
  return ( 
    <div className='nav'>
      <input type="text" placeholder="Search recipe" onChange={(e) => searchName(e)}/>
      <select onChange={(e) => filterDiets(e)}>
        <option>Filter by diet</option>
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
        <option>Order by name</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
      <select onChange={(e) => filterHs(e)}>
        <option>Order by health score</option>
        <option value="1">1-100</option>
        <option value="100">100-1</option>
      </select>
      <button onClick={() => clearFilters()}>Clear Filters</button>
    </div>
  )
}

export default Filters;