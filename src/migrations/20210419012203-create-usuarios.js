'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios',{
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          tipo: {
              type: Sequelize.INTEGER
          },
          nome_completo: {
              type: Sequelize.STRING
          },
          nome_usuario: {
              type: Sequelize.STRING
          },
          senha: {
              type: Sequelize.STRING
          },
          email: {
              type: Sequelize.STRING
          },
          situacao: {
              type: Sequelize.STRING
          },
          cpf_cnpj: {
              type: Sequelize.STRING
          }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios')
  }
};
