const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('postgres://localhost:5432/sdc'); Add dns to instance
const sequelize = new Sequelize('sdc', 'postgres', 'robin', {
  host: '50.18.23.146',
  dialect: 'postgres',
});

module.exports = { sequelize, DataTypes };
