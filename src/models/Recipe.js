const Sequelize = require('sequelize');
const database = require("../config/db_config.js")

const Recipe = database.define("recipe", {
    id: { 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageLink: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    }
    }
)

module.exports = Recipe;


/* TODO: implementar os relacionamentos entre as tabelas
    - Adicionar Autor (Users), baseado no nome do usuário lá do firebase    
    - adicionar Relação entre receita e ingredientes (1:N)
*/    
