'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('woods', 'image', {
          type: Sequelize.STRING,
          allowNull: true
        }, { transaction: t }),

        queryInterface.createTable('wood_type', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          name: {
            allowNull: false,
            type: Sequelize.STRING
          }
        }),
  
        queryInterface.createTable('wood_hardness', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          name: {
            allowNull: false,
            type: Sequelize.STRING
          }
        })

      ]);
    });

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('woods', 'image', { transaction: t }),
        queryInterface.dropTable('wood_type', { transaction: t }),
      queryInterface.dropTable('wood_hardness', { transaction: t })
      ]);
    });
  }
};
