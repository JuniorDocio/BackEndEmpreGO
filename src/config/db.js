const Sequelize = require('sequelize');
const sequelize = new Sequelize('aula_php', 'root', '', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;