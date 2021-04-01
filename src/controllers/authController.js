const usuario = require('./../models/usuario');

module.exports = {
    Cadastrar: async (req,res) => {
        const {nome,senha} = req.body;
        const user1 = await usuario.create(req.body);
    },

    Login: (req,res) => {
        res.status(404).json({
            nome: "Junior",
            idade: 20,
            senha: 123455
        })
    } 
}