const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('grocery', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports = sequelize;