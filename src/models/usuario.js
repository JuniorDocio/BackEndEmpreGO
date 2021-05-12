const Sequilize = require('sequelize');
const database = require('./../config/db');

const Usuario = database.define('usuarios',{
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipo: {
        type: Sequilize.INTEGER
    },
    nome_completo: {
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
    imagemPefil: {
        type: Sequilize.STRING
    },
    cpf_cnpj: {
        type: Sequilize.STRING
    }
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false,
})

module.exports = Usuario;