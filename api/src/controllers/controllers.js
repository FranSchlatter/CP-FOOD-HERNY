const { Recipe, Diet } = require('../db.js')
const {DB_APIKEY} = process.env;
const fetch = require("node-fetch");

// ESTOY USANDO TESTING, CAMBIARLO EN UN FUTURO A LA API ORIGINAL (los fectchs tienen la ruta testing tmb)

const urlApi = `https://api.spoonacular.com/recipes/complexSearch?apiKey=41b718782e9a4fa49e3471d2b73daaff&addRecipeInformation=true&number=100`

// const idtest = `https://api.spoonacular.com/recipes/${id}/information?apiKey=27e278180a3f4ccb9545e6a16e521326`
const testing = `https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`

const getRecipe = async () => {
  getDiets() // ejecuto diets, cuando ingresa el usuario por primera vez para cargar en la db
  const apiFood = await fetch(testing).then(res => res.json())
    const infoFood = apiFood.results.map (food => {
      return {
        id: food.id,
        name: food.title,
        image: food.image,
        diets: food.vegetarian ? food.diets.concat("vegetarian") : food.diets
      }
    })

    const recipes = await Recipe.findAll()
    if (recipes.length < 1 && infoFood.length < 1) throw new Error("There is no recipe available")
    else return [...infoFood, ...recipes]
}

const createRecipe = async (body) => {
  if(!body.name || !body.description) throw new Error("Required fields need to be completed") // validar que name no tenga simbolos
  const regex = /[A-Za-z0-9]/;
  if(regex.test(body.name)) throw new Error("The name cannot have symbols");
  if(body.health_score && body.health_score < 1 || body.health_score > 100) throw new Error("Health score must be a number between 1 and 100") // no tira error si es 0
  const newRecipe = await Recipe.create(body)
  await newRecipe.addDiet(body.diets) // body.diets recibe los UUIDV4 de las dietas NO EL NOMBRE
  // return "recipe created successfully"
  return (newRecipe) // cual va?
}

const searchRecipeName = async (namesrc) => {
  const apiFood = await fetch(testing).then(res => res.json())
  const infoFood = apiFood.results.filter (food => food.title.toLowerCase().includes(namesrc.toLowerCase()))

  const infoFoodRes = infoFood.map (food => {
    return {
      id: food.id,
      name: food.title,
      image: food.image,
      diets: food.vegetarian ? food.diets.concat("vegetarian") : food.diets
    }
  })

  const recipes = await Recipe.findAll()
  let recipesFilter = []
  if(recipes) {
    recipesFilter = recipes.filter(e => e.name.toLowerCase().includes(namesrc.toLowerCase()))
  }
  if (recipesFilter.length < 1 && infoFoodRes.length < 1) throw new Error ("There is no recipe with that name")
  else return [...infoFoodRes, ...recipesFilter]
}

const searchRecipeId = async (id) => {
  const regex = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
  if(!isNaN(id) && id < 100000000){
    const apiFood = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=27e278180a3f4ccb9545e6a16e521326`).then(res => res.json())
    if(apiFood.id) {
      return {
        // id: apiFood.id,
        name: apiFood.title,
        image: apiFood.image,
        health_score: apiFood.healthScore,
        dish_types: apiFood.dishTypes,
        diets: apiFood.vegetarian ? apiFood.diets.concat("vegetarian") : apiFood.diets,
        res: apiFood.summary, 
        steps: apiFood.instructions 
      }
    }
  } else if (regex.test(id)) {
    const recipes = await Recipe.findByPk(id, {include: Diet}) 
    if (recipes) {
      const arrDiets = []
      recipes.diets.forEach(e => { arrDiets.push(e.name) })
      return {
        name: recipes.name,
        description: recipes.description,
        health_score: recipes.health_score,
        steps: recipes.steps,
        diets: arrDiets
      }
    }
    else throw new Error (`The recipe with that ID is not available in our database`)
  } else throw new Error (`The recipe with that ID is not available in our database`)
}

const updateRecipeId = async (hs, recipeId) => {
  if(hs < 1 || hs > 100) throw new Error("The health score can only be between 1 and 100")
  const recipeMod = await Recipe.update( {health_score: hs}, { where: {id: recipeId} } )
  console.log(recipeMod)
  if (recipeMod[0] !== 1) throw new Error("There is no recipe with that id")
  return "Changed the health score correctly"
}

const deleteRecipeId = async (id) => {
  const recipes = await Recipe.findByPk(id)
  if(!recipes) throw new Error("There is no recipe with that id")
  await Recipe.destroy({where: {id: id}})
  return "Recipe deleted successfully"
}

const getDiets = async () => {
  let diets = await Diet.findAll()
  if (diets.length < 1) {
    const apiFood = await fetch(testing).then(res => res.json())
    const infoDiets = apiFood.results.map (food => food.diets) // agarro solo las diets
    let repDiets = []
    infoDiets.forEach(e => { repDiets = [...repDiets, ...e] }); // concateno arrays
    const filterDiets = []
    repDiets.filter(e => { if ( filterDiets.indexOf(e) === -1 ) filterDiets.push(e) }) // filtro para quedarme un valor por diets
    filterDiets.push("vegetarian")
    filterDiets.push("lacto-vegetarian")
    filterDiets.push("ovo-vegetarian")
    filterDiets.push("paleo")
    filterDiets.push("low fodmap")
    const objDiets = filterDiets.map(e => { return {name : e} }) // hago un obj key-value para agregar a los names
    await Diet.bulkCreate(objDiets, {validate: true})
  }
  diets = await Diet.findAll()
  return diets
}

module.exports = {
  getRecipe,
  createRecipe,
  searchRecipeId,
  searchRecipeName,
  updateRecipeId,
  deleteRecipeId,
  getDiets
};