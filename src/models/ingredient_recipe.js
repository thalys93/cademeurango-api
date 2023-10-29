const Sequelize = require('sequelize');
const database = require("../config/db_config.js");
const recipe = require('./Recipe.js');
const ingredient = require('./Ingredient.js');

const ingredientRecipe = database.define("ingredient_recipe", {})

ingredientRecipe.associate = (models) => {
    ingredient.belongsToMany(models.recipe, { through: ingredientRecipe });
    recipe.belongsToMany(models.ingredient, { through: ingredientRecipe });
}

module.exports = ingredientRecipe;