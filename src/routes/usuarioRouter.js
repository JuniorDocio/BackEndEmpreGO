const express = require('express');
const router = express.Router();
const middleware = require('./../middleware/authMiddleware')
const upload = require('./../middleware/multerConfig')

const userController = require('../controllers/usuarioController')


router.use(middleware);
router.put('/perfil/:id',userController.Editar);
router.get('/perfil/:id',userController.Visualizar);
router.post('/perfil/:id/upload-image',upload.single("imagem"),userController.UploadImage);

module.exports = router;