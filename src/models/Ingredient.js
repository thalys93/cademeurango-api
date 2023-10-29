const Sequelize = require('sequelize');
const database = require("../config/db_config.js");
const Recipe = require('./Recipe.js');

const Ingredient = database.define("ingredient", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ingredientName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ingredientQuantity: {
        type: Sequelize.STRING,
        allowNull: false
    },
    });



module.exports = Ingredient;