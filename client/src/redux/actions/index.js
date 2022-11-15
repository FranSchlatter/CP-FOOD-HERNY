import axios from "axios";

export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPE_DETAILS = "GET_RECIPE_DETAILS";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const UPDATE_RECIPE = "UPDATE_RECIPE";

export const ORDER_NAME = "ORDER_NAME";
export const ORDER_HS = "ORDER_HS";
export const ORDER_DIETS = "ORDER_DIETS";

export const GET_ALL_DIETS = "GET_ALL_DIETS"; // getDiets - para el form > filtrado

export const getAllRecipes = () => {
  return async (dispatch) => {
    const allRecipes = await axios.get(`http://localhost:3001/recipes`)
    dispatch({type: GET_ALL_RECIPES, payload: allRecipes.data})
}};

// falta mostrar error si no existe ninguna receta con ese nombre
export const getAllRecipesName = (payload) => {
  return async (dispatch) => {
    const recipesName = await axios.get(`http://localhost:3001/recipes?name=${payload}`)
    dispatch({type: GET_ALL_RECIPES, payload: recipesName.data})
}};

export const orderName = (payload) => {
  return { type: ORDER_NAME, payload }
};

export const orderHs = (payload) => {
  return { type: ORDER_HS, payload }
};

export const orderDiets = (payload) => {
  return { type: ORDER_DIETS, payload }
};

export const getRecipeDetails = (id) => {
  return async (dispatch) => {
    const recipeId = await axios.get(`http://localhost:3001/recipes/${id}`)
    dispatch({type: GET_RECIPE_DETAILS, payload: recipeId.data})
  }
}

export const createRecipe = (payload) => {
  return async (dispatch) => {
    await axios.post(`http://localhost:3001/recipes`, payload)
    dispatch({type: CREATE_RECIPE })
  }
}

export const deleteRecipe = (id) => {
  return async (dispatch) => {
    const deletedRecipe = await axios.delete(`http://localhost:3001/recipes/delete/${id}`)
    dispatch({type: DELETE_RECIPE, payload: deletedRecipe.data})
  }
}

export const updateRecipe = (payload) => {
  return async (dispatch) => {
    await axios.put(`http://localhost:3001/recipes/modHS`, payload)
    dispatch({type: UPDATE_RECIPE})
  }
}

// no sabria si anda o no xd
export const getAllDiets = () => {
  return async (dispatch) => {
    const allDiets = await axios.get(`http://localhost:3001/diets`)
    dispatch({type: DELETE_RECIPE, payload: allDiets.data})
  }
}