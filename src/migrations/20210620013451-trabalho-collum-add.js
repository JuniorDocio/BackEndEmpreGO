'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('trabalhos','id_usuario_candidatado',Sequelize.INTEGER);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('usuarios', 'id_usuario_candidatado')
  }
};
