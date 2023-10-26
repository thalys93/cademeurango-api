const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.config();
const sequelize = new Sequelize(process.env.DB_NAME, "root", "", {
    dialect: "mysql",
    host : "localhost",    
    define: {
        timestamps: true, // adiciona colunas createdAt e updatedAt
        underscored: true, // padroniza o nome das tabelas e colunas usando snake_case
    } 
})

module.exports = sequelize;
