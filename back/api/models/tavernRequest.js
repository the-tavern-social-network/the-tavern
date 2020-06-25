const { Sequelize, Model } = require('sequelize');
const sequelize = require('../db/database');
class TavernRequest extends Model {
  //
}

TavernRequest.init(
  {
    tavern_id: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    sequelize,
    underscored: true,
    tableName: 'tavern_requests',
  },
);

module.exports = TavernRequest;
