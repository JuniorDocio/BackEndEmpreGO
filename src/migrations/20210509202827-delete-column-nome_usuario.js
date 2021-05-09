'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('usuarios', 'nome_usuario')
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'usuarios',
      'nome_usuario',
     Sequelize.STRING
    );
  }
};
