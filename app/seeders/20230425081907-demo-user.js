'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: "john.doe@mail.com",
      password: "hashedPassword",
        //isBetaMember: false
      }], {});
    


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     */ Example:
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
