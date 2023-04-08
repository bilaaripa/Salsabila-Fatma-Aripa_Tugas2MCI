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
    await queryInterface.bulkInsert('users', [
      {
        'ktp': "3576014403910003",
        'name': "nadira",
        'phone_number': "081155778844",
        'email': "baweng@gmail.com",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'ktp': "3326160902090003",
        'name': "yusna",
        'phone_number': "081282113407",
        'email': "yuyus@gmail.com",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'ktp': "3328830902090002",
        'name': "rule",
        'phone_number': "081923425500",
        'email': "lulururu@gmail.com",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'ktp': "3326160608070224",
        'name': "amy",
        'phone_number': "081316592005",
        'email': "amyamm@gmail.com",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'ktp': "3326160608070380",
        'name': "bella",
        'phone_number': "085386872708",
        'email': "mbakbel@gmail.com",
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
