const express = require('express');
const router = express.Router();

//Controllers
const authController = require('../controllers/authController')

//routers
router.post('/cadastrar',authController.Cadastrar);
router.post('/login',authController.Login);
router.post('/remember',authController.Remember);

module.exports = router;
