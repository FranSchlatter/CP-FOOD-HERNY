const Router = require('express');
const recipeMw = require('./recipe.js');
const dietMw = require('./diet.js');

const router = Router();

router.use(Router.json());

router.use('/recipes', recipeMw);
router.use('/diets', dietMw);

module.exports = router;
