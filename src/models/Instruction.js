const Sequelize = require('sequelize');
const database = require("../config/db_config.js");
const recipe = require('./Recipe.js');

const instruction = database.define("instruction", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    instructionDescription: {
        type: Sequelize.STRING,
        allowNull: false
    },
});



instruction.associate = (models) => {
instruction.belongsTo(models.recipe, {
    // constraint: true,
    foreignKey: 'recipeId',
});
};

module.exports = instruction;
