const Sequelize = require('sequelize');
const database = require("../config/db_config.js");
const user = require('./User.js');

// const ingredient = require('./Ingredient.js');
// const instruction = require('./Instruction.js');


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
    type:{
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
    instructions: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false
    },
    ingredients: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false
    },        
    authorUUID:{
        type: Sequelize.UUID,
        references: { model: user, key: 'UUID' },
        allowNull: false
    }
}
)

module.exports = recipe;