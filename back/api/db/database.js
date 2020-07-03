const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URL_DEV, { logging: false });

module.exports = sequelize;
