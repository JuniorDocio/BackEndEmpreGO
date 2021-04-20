const express = require('express');
const router = express.Router();
const middleware = require('./../middleware/authMiddleware')

const userController = require('../controllers/usuarioController')


router.use(middleware);
router.put('/perfil',userController.Editar);
router.get('/perfil',userController.Visualizar);

module.exports = router;