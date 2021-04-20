const usuario = require('./../models/usuario');


module.exports = {
    Editar: async (req,res) => {
        const user = await usuario.update(req.body,{ where: {id: req.id}});
        return res.status(200).send({atualizado: user});
    },

    Visualizar: async(req,res) => {
        const user = await usuario.findOne({ where: {id: req.id}});
        user.senha = null;
        return res.status(200).send({user: user});
    } 
}