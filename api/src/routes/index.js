const Router = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipeMw = require('./recipe.js');
const dietMw = require('./diet.js');

const router = Router();

router.use(Router.json());

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipeMw);
router.use('/diets', dietMw);

module.exports = router;
