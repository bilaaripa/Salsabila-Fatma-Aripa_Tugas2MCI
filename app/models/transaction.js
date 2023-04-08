'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, {
        foreignKey: 'user_id',
        as: 'user_user_id'
      }),
      this.hasMany(models.ticket, {
        foreignKey: 'ticket_id',
        as : 'ticket_ticket_id'
      })
    }
  }
  transaction.init({
    number_of_ticket: DataTypes.INTEGER,
    total_payment: DataTypes.INTEGER,
    payment_method: DataTypes.STRING,
    time: DataTypes.DATE,
    payment_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};