'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('usuarios','imagemPefil',Sequelize.STRING);
    return queryInterface.removeColumn('usuarios', 'nome_usuario')
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('usuarios', 'imagemPefil')
    return queryInterface.addColumn(
      'usuarios',
      'nome_usuario',
     Sequelize.STRING
    );
  }
};
