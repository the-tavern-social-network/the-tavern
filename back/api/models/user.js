const { Sequelize, Model } = require('sequelize');
const sequelize = require('../db/database');
class User extends Model {
  //
}

User.init(
  {
    email: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    username: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    avatar: Sequelize.TEXT,
    birthdate: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
        isDate: true,
      },
    },
    description: Sequelize.TEXT,
    contact_count: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    underscored: true,
    tableName: 'users',
  },
);

module.exports = User;
