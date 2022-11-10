export const GET_ALL_RECIPES = "GET_ALL_RECIPES"; // getRecipe  --- search by name???? 
export const GET_RECIPE_DETAILS = "GET_RECIPE_DETAILS"; // searchRecipeId
export const CREATE_RECIPE = "CREATE_RECIPE"; // createRecipe
export const DELETE_RECIPE = "DELETE_RECIPE"; // deleteRecipeId
export const UPDATE_RECIPE = "UPDATE_RECIPE"; // updateRecipeId

export const GET_ALL_DIETS = "GET_ALL_DIETS"; // getDiets - para el form > filtrado

export const getAllRecipes = (name) => (dispatch) => {
  return fetch(`http://localhost:3001/recipes?name=${name}`)
          .then(res => res.json())
          .then(json => dispatch({type: GET_ALL_RECIPES, payload: json}))
};

export const getRecipeDetails = (id) => (dispatch) => {
  return fetch(`http://localhost:3001/recipes/${id}`)
          .then(res => res.json())
          .then(json => dispatch({type: GET_RECIPE_DETAILS, payload: json}))
}

// mmmmmmhhh post????
export const createRecipe = (recipe) => (dispatch) => {
  return fetch(`http://localhost:3001/recipes`)
  .then(res => res.json())
  .then(json => dispatch({type: CREATE_RECIPE, payload: recipe})) 
};

// mmmmmmhhh delete???
export const deleteRecipe = (id) => (dispatch) => {
  return fetch(`http://localhost:3001/delete/${id}`)
          .then(res => res.json())
          .then(json => dispatch({type: DELETE_RECIPE, payload: json}))
}

// mmmmmmhhh put???
export const updateRecipe = (body) => (dispatch) => {
  return fetch(`http://localhost:3001/modHS`)
  .then(res => res.json())
  .then(json => dispatch({type: UPDATE_RECIPE, payload: body})) 
};

export const getAllDiets = () => (dispatch) => {
  return fetch(`http://localhost:3001/diets`)
          .then(res => res.json())
          .then(json => dispatch({type: GET_ALL_DIETS, payload: json}))
};

// export const createRecipe = (recipe) => {
//   return {type: CREATE_RECIPE, payload: recipe}
// };

// export const deleteRecipe = (id) => {
//   return {type: DELETE_RECIPE, payload: id}
// };