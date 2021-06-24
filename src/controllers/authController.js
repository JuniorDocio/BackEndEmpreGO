const usuario = require('./../models/usuario');
const jwt = require('jsonwebtoken');

module.exports = {
    Cadastrar: async (req,res) => {
        const userLogin = await usuario.findOne({ where: {email: req.body.email}});

        if(userLogin != null){
            res.status(401).json({mensager: "Email já está em uso."})
            return;
        }
        
        const user = await usuario.create(req.body);
        await user.update({imagemPefil:'default-user-image.png'});

        if(user==null){
            res.status(404).json({mensager: "Não foi possivel cadastrar."})
            return;
        }
        const id = user.id;
        const token = jwt.sign({id}, "123", {expiresIn: 3000})
        res.status(200).json({auth:true, token: token})
    },

    Login: async (req,res) => {
        const {email,senha} = req.body;

        if(email==="" || senha===""){
            res.status(401).json({messenge:'e-mail ou senha não informado'})
            return;
        }

        const user = await usuario.findOne({ where: {email: email, senha: senha}});

        if (user === null) {
            res.status(401).json({auth:false, token: false})
            return;
        } 
            
        const id = user.id;
        const token = jwt.sign({id}, "123", {expiresIn: 3000})
        res.status(200).json({auth:true, token: token})
        
    },
    
    Remember: async (req,res) => {
        const {email} = req.body;

        if(email===""){
            res.status(401).json({messenge:'e-mail ou senha não informado'})
            return;
        }

        const user = await usuario.findOne({ where: {email: email}});

        if (user === null) {
            res.status(401).json({messenge:"Usuário não existe."})
            return;
        }

        

    }
}