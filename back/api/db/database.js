const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URL, { logging: console.log });

module.exports = sequelize;
