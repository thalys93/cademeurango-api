const sequelize = require('sequelize')
const Recipe = require('./../models/Recipe.js')
// const IngredientHasRecipe = require('./../models/ingredientHasRecipe.js')
// const Ingredient = require('./../models/Ingredient.js')
// const Instruction = require('./../models/Instruction.js')


// Recipe.hasMany(IngredientHasRecipe, { foreignKey: 'recipeID' });
// Recipe.hasMany(Instruction, { foreignKey: 'recipeID' });
// Recipe.belongsToMany(Ingredient, { through: IngredientHasRecipe, foreignKey: 'recipeID' });

class RecipeController {

    findRecipes = async (req, res) => {
        try {
            const recipes = await Recipe.findAll({});
            return res.status(200).json(recipes);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    findRecipeByUUID = async (req, res) => {
        const { UUID } = req.params;
        try {
            const recipe = await Recipe.findOne({
                where: {
                    UUID: UUID
                }
            });
            if (!recipe) {
                return res.status(404).json({ message: `Receita com o UUID ${UUID} Não Foi Encontrada` });
            } else {
                return res.status(200).json(recipe);
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    createRecipe = async (req, res) => {        
        const recipe = req.body;

        try {
            const newRecipe = await Recipe.create(recipe);
            return res.status(200).json({status: 200 , message: "Receita criada com sucesso!" , data: newRecipe});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    updateRecipe = async (req, res) => {
        const { UUID } = req.params;
        const newData = req.body;

        try {

            for (const key in newData) {
                if (newData[key] === "" || newData[key] === null || newData[key].trim === "") {
                    return res.status(400).json({ message: `Não é possível fazer uma requisição com campos vazios` });
                }
            }

            if (!newData) {
                return res.status(400).json({ message: `Você Não Pode Fazer uma requisição Vazia` });
            } else (
                await Recipe.update(newData, {
                    where: {
                        UUID: UUID
                    }
                })
            )
            const updatedRecipe = await Recipe.findOne({
                where: {
                    UUID: UUID
                }
            });

            if (!updatedRecipe) {
                return res.status(404).json({ message: `Receita com o UUID ${UUID} não encontrada` });
            }


            return res.status(200).json(updatedRecipe);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    deleteRecipe = async (req, res) => {
        const { UUID } = req.params;
        try {
            const recipe = await Recipe.findOne({
                where: {
                    UUID: UUID
                }
            });

            if (!recipe) {
                return res.status(404).json({ message: `Receita com o UUID ${UUID} Não Foi Encontrada` });
            } else {
                await Recipe.destroy({
                    where: {
                        UUID: UUID
                    }
                });
                return res.status(200).json({ message: `Receita ${UUID} deletada` });
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = new RecipeController();

