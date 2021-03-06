const express = require('express');
const router = express.Router();
const middleware = require('./../middleware/authMiddleware')
const upload = require('./../middleware/multerConfig')

const userController = require('../controllers/usuarioController')


router.use(middleware);
router.put('/perfil',userController.Editar);
router.get('/perfil',userController.Visualizar);
router.post('/perfil/upload-image',upload.single("imagem"),userController.UploadImage);
router.get('/perfil/meus-trabalhos',userController.MeusTrabalhos);
router.get('/perfil/meus-trabalhos-criados',userController.MeusTrabalhosCriados);

module.exports = router;