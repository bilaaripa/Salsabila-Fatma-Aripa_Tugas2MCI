'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('tickets', [
      {
        'ticket_price': "175000",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'ticket_price': "150000",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'ticket_price': "125000",
        'createdAt': new Date(),
        'updatedAt': new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
