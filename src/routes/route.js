const express = require('express');
const router = express.Router();

//Controllers
const authController = require('./../controllers/authController')
const userController = require('./../controllers/usuarioController')

//routers
router.post('/cadastrar',authController.Cadastrar);
router.post('/login',authController.Login);

router.put('/perfil',userController.Editar);
router.get('/perfil',userController.Visualizar);

module.exports = router;
