const trabalho = require('../models/trabalho');
const usuario = require('./../models/usuario');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    Adicionar: async (req,res) => {
        let valores = req.body;
        const data = new Date();
        valores.situacao = 1;
        valores.dataCriacao = `${data.getFullYear()}-${String(data.getMonth()+1).padStart(2, '0')}-${String(data.getDate()).padStart(2, '0')} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
        valores.criador = req.id; 
        const novoTrabalho = await trabalho.create(valores);
        return res.status(200).send(novoTrabalho);
    },

    Listar: async (req,res) => {
        const trabalhos = await trabalho.findAll({ where: {situacao: '1'},raw: true});
        for await (let num of trabalhos) {
            num.criadorUsuario = await usuario.findOne({ where: {id: num.criador}});
            num.candidato = await usuario.findOne({ where: {id: num.id_usuario_candidatado}});
        }
       
        return res.status(200).send(trabalhos);
    },

    VerTrabalho: async (req,res) => {
        if(!req.params.id || req.params.id == '')
            return res.status(200).send({Mensage: 'Id não informado ou em branco'});
        const trabalhoUnico = await trabalho.findOne({ where: {situacao: '1',id: req.params.id},raw: true});
        if(trabalhoUnico){
            trabalhoUnico.criadorUsuario = await usuario.findOne({ where: {id: trabalhoUnico.criador}});
            trabalhoUnico.candidato = await usuario.findOne({ where: {id: trabalhoUnico.id_usuario_candidatado}});
        }
        return res.status(200).send(trabalhoUnico);
    },

    BuscarTrabalho: async (req,res) => {
        const queryString = "%"+req.body.busca+"%";
        const trabalhos = await trabalho.findAll(
                { where:
                    {[Op.or]:
                        [ 
                            { titulo: 
                                { [Op.like]: queryString } 
                            },
                            { descricao: 
                                { [Op.like]: queryString } 
                            } 
                        ]
                    },raw: true
                }
            )
        for await (let num of trabalhos) {
            num.criadorUsuario = await usuario.findOne({ where: {id: num.criador}});
            num.candidato = await usuario.findOne({ where: {id: num.id_usuario_candidatado}});
        }
        return res.status(200).send(trabalhos);
    },
    
    AceitarTrabalho: async (req,res) => {
        const trabalhoUnico = await trabalho.findOne({ where: {situacao: '1',id: req.body.id_trabalho,id_usuario_candidatado: {[Op.is]: null}}});
        if(!trabalhoUnico){
            return res.status(301).send({message: 'Alguem Já aceitou esse trabalho, ou ele não extá mais diponivel'});
        }
        trabalhoUnico.id_usuario_candidatado = req.id;
        trabalhoUnico.save();
        return res.status(200).send(trabalhoUnico);
    },

    FecharTrabalho: async (req,res) => {
        const trabalhoUnico = await trabalho.findOne({ where: {situacao: '1',id: req.body.id_trabalho}});
        if(!trabalhoUnico){
            return res.status(301).send({message: 'Alguem Já aceitou esse trabalho, ou ele não extá mais diponivel'});
        }
        trabalhoUnico.situacao = 0;
        trabalhoUnico.save();
        return res.status(200).send({message: 'Trabalho fechado'});
    }
}