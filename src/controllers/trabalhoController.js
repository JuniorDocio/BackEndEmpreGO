const trabalho = require('../models/trabalho');

module.exports = {
    Adicionar: async (req,res) => {
        const novoTrabalho = await trabalho.create(req.body);
    },

    Listar: async (req,res) => {
        const novoTrabalho = await trabalho.create(req.body);
    },

    VerTrabalho: async (req,res) => {
        const novoTrabalho = await trabalho.create(req.body);
    },
}