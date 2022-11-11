const { Router } = require('express');
const router = Router();
const {DB_APIKEY} = process.env;
const { getRecipe, createRecipe, searchRecipeId, searchRecipeName, updateRecipeId, deleteRecipeId } = require("../controllers/controllers.js");

// const urlApi = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${DB_APIKEY}`
// const urlApi2 = `https://api.spoonacular.com/recipes/1/information?apiKey=${DB_APIKEY}`

const urlApi = `https://api.spoonacular.com/recipes/complexSearch?apiKey=41b718782e9a4fa49e3471d2b73daaff&addRecipeInformation=true&number=100`

const urlApi2 = `https://api.spoonacular.com/recipes/complexSearch?apiKey=41b718782e9a4fa49e3471d2b73daaff`

// 27e278180a3f4ccb9545e6a16e521326

const apilibre = "https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5/information&number=100"

const urlApi3 = `https://api.spoonacular.com/recipes/1/information?apiKey=41b718782e9a4fa49e3471d2b73daaff`

router.get("/", async(req, res) => {
  const { name } = req.query;
  try { 
    if (name) {
      let recipesN = await searchRecipeName(name)
      console.log(recipesN)
      return res.status(200).send(recipesN)
    }
    
    let recipes = await getRecipe()
    res.status(200).send(recipes)
  } catch (e) {
    res.status(404).send(e.message)
  }
})

router.post("/", async(req, res) => {
  const { name, description, health_score, steps, diets } = req.body;
  try {
    const newRecipe = await createRecipe(req.body)
    res.status(200).send(newRecipe)
  } catch (e) {
    res.status(404).send(e.message)
  }
})

router.put("/modHS", async(req, res) => {
  const {health_score, id} = req.body;
  try {
    const modRecipe = await updateRecipeId(health_score, id)
    res.status(200).send(modRecipe)
  } catch (e) {
    res.status(404).send(e.message)
  }
})

router.delete("/delete/:id", async(req, res) => {
  const {id} = req.params;
  try {
    const deleteRecipe = await deleteRecipeId(id)
    res.status(200).send(deleteRecipe)
  } catch {
    res.status(404).send(e.message)
  }
})

router.get("/:id", async(req, res) => {
  const { id } = req.params;
  try { 
    const recipes = await searchRecipeId(id)
    res.status(200).send(recipes)
  } catch (e) {
    res.status(404).send(e.message)
  }
})

module.exports = router;