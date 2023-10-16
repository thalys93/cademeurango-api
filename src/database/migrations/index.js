const Sequelize = require('sequelize');
const configDB = require('../../config/db_config.js');

// Variável de Conexão do DB
const connection = new Sequelize(configDB);

module.exports = connection;
