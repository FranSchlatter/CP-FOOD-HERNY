import axios from "axios";

export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPE_DETAILS = "GET_RECIPE_DETAILS";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const UPDATE_RECIPE = "UPDATE_RECIPE";
export const GET_ALL_DIETS = "GET_ALL_DIETS";

export const ORDER_NAME = "ORDER_NAME";
export const ORDER_HS = "ORDER_HS";
export const ORDER_DIETS = "ORDER_DIETS";

export const SEARCHHS = "SEARCHHS";

export const getAllRecipes = () => {
  return async (dispatch) => {
    try {
      const allRecipes = await axios.get(`http://localhost:3001/recipes`)
      dispatch({type: GET_ALL_RECIPES, payload: allRecipes.data})
    }
    catch (e) {
      alert("There was a connection error, please try again later")
    }
    
}};

export const getAllRecipesName = (payload) => {
  return async (dispatch) => {
    try{
      const recipesName = await axios.get(`http://localhost:3001/recipes?name=${payload}`)
      dispatch({type: GET_ALL_RECIPES, payload: recipesName.data})
    }
    catch (e) {
      alert(e.response.data)
    }
}};

export const orderName = (payload) => {
  return { type: ORDER_NAME, payload }
};

export const searchHS = (payload) => {
  return { type: SEARCHHS, payload }
};

export const orderHs = (payload) => {
  return { type: ORDER_HS, payload }
};

export const orderDiets = (payload) => {
  return { type: ORDER_DIETS, payload }
};

export const getRecipeDetails = (id) => {
  return async (dispatch) => {
    try{
      const recipeId = await axios.get(`http://localhost:3001/recipes/${id}`)
      dispatch({type: GET_RECIPE_DETAILS, payload: recipeId.data})
    }
    catch (e) {
      alert(e.response.data)
    }
  }
}

export const createRecipe = (payload) => {
  return async (dispatch) => {
    try {
      await axios.post(`http://localhost:3001/recipes`, payload)
      dispatch({type: CREATE_RECIPE })
      alert("Recipe created successfully");
      window.location.href = "http://localhost:3000/home";
    } catch (e) {
      alert(e.response.data)
    }
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
    try {
      await axios.put(`http://localhost:3001/recipes/modHS`, payload)
      dispatch({type: UPDATE_RECIPE})
      alert("Recipe updated successfully");
    } catch (e) {
      alert(e.response.data)
    } 
  }
}

export const getAllDiets = () => {
  return async (dispatch) => {
    try {
      const allDiets = await axios.get(`http://localhost:3001/diets`)
      dispatch({type: GET_ALL_DIETS, payload: allDiets.data})
    } catch (e) {
      alert("Error conection")
    }
  }
}