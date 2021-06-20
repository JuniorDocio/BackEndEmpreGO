const express = require('express');
const router = express.Router();
const middleware = require('./../middleware/authMiddleware')

const trabalhoController = require('../controllers/trabalhoController')


router.use(middleware);
router.post('/trabalho-adicionar',trabalhoController.Adicionar);
router.get('/trabalhos',trabalhoController.Listar);
router.get('/trabalho/:id',trabalhoController.VerTrabalho);
router.get('/trabalhos/buscar',trabalhoController.BuscarTrabalho);
router.post('/trabalhos/aceitar',trabalhoController.AceitarTrabalho);
router.delete('/trabalhos/fechar',trabalhoController.FecharTrabalho);

module.exports = router;