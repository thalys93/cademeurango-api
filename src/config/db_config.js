const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.config();
const sequelize = new Sequelize({
    dialect: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "localhost",
    port: 5432 //porta postgree
})

module.exports = sequelize;
