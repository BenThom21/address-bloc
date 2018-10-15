'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    // is "Contacts" right??
    return queryInterface.addColumn('Contacts', email, {
      type: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Contacts', email, {
      type: Sequelize.STRING
    });
  }
};
