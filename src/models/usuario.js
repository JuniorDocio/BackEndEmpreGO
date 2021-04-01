const Sequilize = require('sequelize');
const database = require('./../config/db');

const Usuario = database.define('usuario',{
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipo: {
        type: Sequilize.INTEGER
    },
    nome: {
        type: Sequilize.STRING
    },
    senha: {
        type: Sequilize.STRING
    },
    email: {
        type: Sequilize.STRING
    },
    situacao: {
        type: Sequilize.STRING
    },
    cpf_cnpj: {
        type: Sequilize.STRING
    }
})

module.exports = Usuario;