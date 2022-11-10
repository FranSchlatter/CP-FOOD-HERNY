const { Router } = require('express');
const router = Router();
const {getDiets} = require("../controllers/controllers.js");

router.get("/", async(req, res) => {
  try { 
    const diets = await getDiets()
    res.status(200).send(diets)
  } catch (e) {
    res.status(404).send(e.message)
  }
})

module.exports = router;