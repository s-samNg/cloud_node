'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('woods', 'image', {
          type: Sequelize.DataTypes.STRING,
          allowNull: true
        }, { transaction: t }),
      ]);
    });

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('woods', 'image', { transaction: t })
      ]);
    });
  }
};
