'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('trabalhos',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING
    },
    descricao: {
        type: Sequelize.STRING, 
        allowNull: true
    },
    cep: {
        type: Sequelize.STRING,
    },
    uf: {
        type: Sequelize.STRING,
    },
    cidade: {
        type: Sequelize.STRING,
    },
    bairro: {
        type: Sequelize.STRING,
    },
    logradouro: {
        type: Sequelize.STRING,
    },
    situacao: {
        type: Sequelize.STRING
    },
    dataCriacao: {
        type: Sequelize.DATE
    },
    criador: {
        type: Sequelize.INTEGER
    }
  });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trabalho')
  }
};
