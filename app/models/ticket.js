'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.seat, {
        foreignKey: 'seat_id',
        as: 'seat_seat_id'
      }),
      this.belongsTo(models.transaction,{
        foreignKey: 'id'
      })
    }
  }
  ticket.init({
    ticket_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ticket',
  });
  return ticket;
};