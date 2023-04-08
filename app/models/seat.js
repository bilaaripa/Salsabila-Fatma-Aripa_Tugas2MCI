'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.ticket, {
        foreignKey: 'seat_id'
      })
    }
  }
  seat.init({
    seat_code: DataTypes.STRING,
    seat_category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'seat',
  });
  return seat;
};