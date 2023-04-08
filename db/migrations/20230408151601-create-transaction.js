'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number_of_ticket: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      total_payment: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      payment_method: {
        type: Sequelize.STRING,
        allowNull: false
      },
      time: {
        type: Sequelize.DATE,
        allowNull:false
      },
      payment_status: {
        type: Sequelize.STRING,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};