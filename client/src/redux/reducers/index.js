import { GET_ALL_RECIPES, GET_RECIPE_DETAILS, CREATE_RECIPE,DELETE_RECIPE, UPDATE_RECIPE, GET_ALL_DIETS, ORDER_NAME, ORDER_HS, ORDER_DIETS, ERROR} from "../actions";

const initialState = {
  recipes: [],
  loading: true,
  diets: [], // no tienen uso
  recipeDetail: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {...state, recipes: action.payload, loading: false}
    case GET_RECIPE_DETAILS:
      return {...state, recipeDetail: action.payload}
    case ORDER_NAME:
      let orderArr = [];
      if (action.payload === "az") orderArr = state.recipes.sort((a,b) => a.name.toUpperCase() > b.name.toUpperCase() ?  1 : -1)
      else orderArr = state.recipes.sort((a,b) => a.name.toUpperCase() < b.name.toUpperCase() ?  1 : -1)
      return {...state, recipes: orderArr}
    case ORDER_HS:
      let orderArr2 = [];
      if (action.payload === "1") orderArr2 = state.recipes.sort((a,b) => a.health_score > b.health_score ?  1 : -1)
      else orderArr2 = state.recipes.sort((a,b) => a.health_score < b.health_score ?  1 : -1)
      return {...state, recipes: orderArr2}
    case ORDER_DIETS:
      let orderArr3 = [];
      state.recipes.map(e => {
        if(!isNaN(e.id)) e.diets && e.diets.forEach(diet => { if (diet === action.payload) orderArr3.push(e) })
        else e.diets && e.diets.forEach(diet => { if (diet.name === action.payload) orderArr3.push(e) })
      })
      return {...state, recipes: orderArr3}
    case CREATE_RECIPE:
      return {...state, msj: action.payload}
    case DELETE_RECIPE:
      return {...state, msj: action.payload}
    case UPDATE_RECIPE:
      return {...state, msj: action.payload}
    case GET_ALL_DIETS:
      return {...state, diets: action.payload}
    default:
      return {...state}
  }
};

export default rootReducer;