const usuario = require('./../models/usuario');
const jwt = require('jsonwebtoken');

module.exports = {
    Cadastrar: async (req,res) => {

        console.log(req.body.nome_completo);
        const userLogin = await usuario.findOne({ where: {nome_completo: req.body.nome_completo}});

        if(userLogin != null){
            res.status(401).json({mensager: "Email já está em uso."})
            return;
        }
        
        const user = await usuario.create(req.body);

        if(user==null){
            res.status(404).json({mensager: "Não foi possivel cadastrar."})
        }else{
            const id = user.id;
            const token = jwt.sign({id}, "123", {expiresIn: 3000})
            res.status(200).json({auth:true, token: token})
        }
    },

    Login: async (req,res) => {
        const {email,senha} = req.body;
        const user = await usuario.findOne({ where: {email: email, senha: senha}});

        if (user === null) {
            res.status(401).json({auth:false, token: false})
        } else {
            const id = user.id;
            const token = jwt.sign({id}, "123", {expiresIn: 3000})
            res.status(200).json({auth:true, token: token})
        }
        
    } 
}