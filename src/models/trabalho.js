const Sequilize = require('sequelize');
const database = require('../config/db');

const Emprego = database.define('trabalhos',{
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequilize.STRING
    },
    descricao: {
        type: Sequilize.STRING, 
        allowNull: true
    },
    cep: {
        type: Sequilize.STRING,
    },
    uf: {
        type: Sequilize.STRING,
    },
    cidade: {
        type: Sequilize.STRING,
    },
    bairro: {
        type: Sequilize.STRING,
    },
    logradouro: {
        type: Sequilize.STRING,
    },
    situacao: {
        type: Sequilize.STRING
    },
    dataCriacao: {
        type: Sequilize.DATE
    },
    criador: {
        type: Sequilize.INTEGER
    },
    id_usuario_candidatado: {
        type: Sequilize.INTEGER
    },
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false,
})

module.exports = Emprego;