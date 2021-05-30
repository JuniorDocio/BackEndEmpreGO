const express = require('express');
const router = express.Router();
const middleware = require('./../middleware/authMiddleware')
const upload = require('./../middleware/multerConfig')

const userController = require('../controllers/usuarioController')


router.use(middleware);
router.put('/perfil',userController.Editar);
router.get('/perfil',userController.Visualizar);
router.post('/pesrfil/upload-image',upload.single("imagem"),userController.UploadImage);

module.exports = router;