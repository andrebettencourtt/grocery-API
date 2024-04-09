const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('grocery', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.sync().then(() => {
  console.log("Banco conectado e sincronizado.");
})
.catch((err) => {
  console.log("Falha ao sincronizar db: " + err.message);
});

module.exports = sequelize;