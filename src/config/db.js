const Sequelize = require('sequelize');

const banco = process.env.PORT || 'mysql';
const sequelize = new Sequelize('aula_php', 'root', '', {dialect: banco, host: 'localhost'});

module.exports = sequelize;