const Sequelize = require('sequelize');
const database = require("../config/db_config.js");

// const user = require('./User.js');
const ingredient = require('./Ingredient.js');
const instruction = require('./Instruction.js');


const recipe = database.define("recipe", {
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

recipe.associate = (models) => {

recipe.hasMany(models.ingredient, {     
    as: 'ingredients' });

recipe.hasMany(models.instruction, { 
    as: 'instructions' })

}

module.exports = recipe;


/* TODO: implementar os relacionamentos entre as tabelas
    - Adicionar Autor (Users), baseado no nome do usuário lá do firebase        
*/
