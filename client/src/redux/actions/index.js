import axios from "axios";

export const GET_ALL_RECIPES = "GET_ALL_RECIPES"; // getRecipe  --- search by name???? 
export const GET_RECIPE_DETAILS = "GET_RECIPE_DETAILS"; // searchRecipeId
export const CREATE_RECIPE = "CREATE_RECIPE"; // createRecipe
export const DELETE_RECIPE = "DELETE_RECIPE"; // deleteRecipeId
export const UPDATE_RECIPE = "UPDATE_RECIPE"; // updateRecipeId

export const GET_ALL_DIETS = "GET_ALL_DIETS"; // getDiets - para el form > filtrado

export const getAllRecipes = () => {
  return async (dispatch) => {
    const allRecipes = await axios.get(`http://localhost:3001/recipes`)
    dispatch({type: GET_ALL_RECIPES, payload: allRecipes.data})
}};

//no anda
export const getAllRecipesName = (name) => {
  return async (dispatch) => {
    const recipesName = await axios.get(`http://localhost:3001/recipes`, name)
    dispatch({type: GET_ALL_RECIPES, payload: recipesName.data})
}};

export const getRecipeDetails = (id) => {
  return async (dispatch) => {
    const recipeId = await axios.get(`http://localhost:3001/recipes/${id}`)
    dispatch({type: GET_RECIPE_DETAILS, payload: recipeId.data})
  }
}

export const createRecipe = (recipe) => {
  return async (dispatch) => {
    const createdRecipe = await axios.post(`http://localhost:3001/recipes`, recipe)
    dispatch({type: CREATE_RECIPE, payload: createdRecipe.data})
  }
}

export const deleteRecipe = (id) => {
  return async (dispatch) => {
    const deletedRecipe = await axios.delete(`http://localhost:3001/recipes/delete/${id}`)
    dispatch({type: DELETE_RECIPE, payload: deletedRecipe.data})
  }
}

export const updateRecipe = (recipe) => {
  return async (dispatch) => {
    const createdRecipe = await axios.post(`http://localhost:3001/recipes/modHS`, recipe)
    dispatch({type: UPDATE_RECIPE, payload: createdRecipe.data})
  }
}

export const getAllDiets = () => {
  return async (dispatch) => {
    const allDiets = await axios.get(`http://localhost:3001/diets`)
    dispatch({type: DELETE_RECIPE, payload: allDiets.data})
  }
}