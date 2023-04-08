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
    await queryInterface.bulkInsert('transactions', [
      {
        'number_of_ticket': "2",
        'total_payment': "350000",
        'payment_method': "BANK",
        'time': new Date(),
        'payment_status': "SUCCESS",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'number_of_ticket': "1",
        'total_payment': "175000",
        'payment_method': "QRIS",
        'time': new Date(),
        'payment_status': "WAITING FOR VERIFICATION",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'number_of_ticket': "5",
        'total_payment': "600000",
        'payment_method': "E-WALLET",
        'time': new Date(),
        'payment_status': "CANCELED",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'number_of_ticket': "5",
        'total_payment': "450000",
        'payment_method': "BANK",
        'time': new Date(),
        'payment_status': "SUCCESS",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'number_of_ticket': "7",
        'total_payment': "825000",
        'payment_method': "E-WALLET",
        'time': new Date(),
        'payment_status': "WAITING FOR VERIFICATION",
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
