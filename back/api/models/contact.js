const { Sequelize, Model } = require('sequelize');
const sequelize = require('../db/database');
class Contact extends Model {
  //
}

Contact.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: Sequelize.ENUM,
      values: ['pending', 'accepted', 'blocked'],
      defaultValue: 'pending',
    },
  },
  {
    sequelize,
    underscored: true,
    tableName: 'contacts',
  },
);

module.exports = Contact;
