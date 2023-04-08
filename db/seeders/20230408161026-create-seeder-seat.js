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
    await queryInterface.bulkInsert('seats', [
      {
        'seat_code': "AP001",
        'seat_category': "PLATINUM",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'seat_code': "AV001",
        'seat_category': "VIP",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'seat_code': "AC001",
        'seat_category': "CAT",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'seat_code': "AP002",
        'seat_category': "PLATINUM",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'seat_code': "AP003",
        'seat_category': "PLATINUM",
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
