const Sequilize = require('sequelize');
const database = require('./../config/db');

const Emprego = database.define('emprego',{
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
    situacao: {
        type: Sequilize.STRING
    },
    dataCriacao: {
        type: Sequilize.DATE
    },
    criador: {
        type: Sequilize.INTEGER
    },
})

module.exports = Emprego;