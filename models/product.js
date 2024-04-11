const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../db')

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    qtd: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }

})

module.exports = Product;