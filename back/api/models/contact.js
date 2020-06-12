const { Sequelize, Model } = require('sequelize');
const sequelize = require('../db/database');
class Contact extends Model {
  //
}

Contact.init(
  {
    status: {
      type: Sequelize.ENUM,
      values: ['0', '1', '2'],
      defaultValue: '0',
    },
  },
  {
    sequelize,
    underscored: true,
    tableName: 'contacts',
  },
);

module.exports = Contact;
