import axios from "axios";

export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPE_DETAILS = "GET_RECIPE_DETAILS";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const UPDATE_RECIPE = "UPDATE_RECIPE";
export const GET_ALL_DIETS = "GET_ALL_DIETS";

export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_HS = "ORDER_HS";
export const ORDER_DIETS = "ORDER_DIETS";
export const FILTER_NAME = "FILTER_NAME";
export const FILTER_HS70 = "FILTER_HS70";

export const CURRENT_PAGE = "CURRENT_PAGE";

export const getAllRecipes = () => {
  return async (dispatch) => {
    try {
      const allRecipes = await axios.get(`/recipes`)
      dispatch({type: GET_ALL_RECIPES, payload: allRecipes.data})
    }
    catch (e) {
      alert("There was a connection error, please try again later")
    }
}};

export const getRecipeDetails = (id) => {
  return async (dispatch) => {
    try{
      const recipeId = await axios.get(`/recipes/${id}`)
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
      await axios.post(`/recipes`, payload)
      dispatch({type: CREATE_RECIPE })
      alert("Recipe created successfully");
      window.location.href = "https://henry-food-franschlatter.vercel.app/home";
    } catch (e) {
      alert(e.response.data)
    }
  }
}

export const deleteRecipe = (id) => {
  return async (dispatch) => {
    const deletedRecipe = await axios.delete(`/recipes/delete/${id}`)
    dispatch({type: DELETE_RECIPE, payload: deletedRecipe.data})
  }
}

export const updateRecipe = (payload) => {
  return async (dispatch) => {
    try {
      await axios.put(`/recipes/modHS`, payload)
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
      const allDiets = await axios.get(`/diets`)
      dispatch({type: GET_ALL_DIETS, payload: allDiets.data})
    } catch (e) {
      alert("Error conection")
    }
  }
}

// Filter - Ordering
export const clearFilters = (payload) => {
  return { type: CLEAR_FILTERS, payload }
};

export const filterName = (payload) => {
  return { type: FILTER_NAME, payload }
};

export const orderName = (payload) => {
  return { type: ORDER_NAME, payload }
};

export const filter_HS70 = (payload) => {
  return { type: FILTER_HS70, payload }
};

export const orderHs = (payload) => {
  return { type: ORDER_HS, payload }
};

export const orderDiets = (payload) => {
  return { type: ORDER_DIETS, payload }
};

export const currentPage = (payload) => {
  return { type: CURRENT_PAGE, payload }
};


