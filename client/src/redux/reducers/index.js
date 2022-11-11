import { GET_ALL_RECIPES, GET_RECIPE_DETAILS, CREATE_RECIPE,DELETE_RECIPE, UPDATE_RECIPE, GET_ALL_DIETS} from "../actions";

const initialState = {
  recipes: [],
  diets: [],
  recipeDetail: {},
  msj: ""
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {...state, recipes: action.payload}
    case GET_RECIPE_DETAILS:
      return {...state, recipeDetail: action.payload}
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