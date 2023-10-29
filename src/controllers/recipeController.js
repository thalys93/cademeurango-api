// const { Sequelize } = require('sequelize');
const Recipe = require('./../models/Recipe.js');
const sequelize = require('../config/db_config.js');
const Ingredient = require('../models/Ingredient.js');

class RecipeController {

    findRecipes = async (req, res) => {
        try {
            const recipes = await Recipe.findAll();
            return res.status(200).json(recipes);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    findRecipeById = async (req, res) => {
        const { id } = req.params;
        try {
            const recipe = await Recipe.findOne({
                where: {
                    id: id
                }
            });
            if (!recipe) {
                return res.status(404).json({ message: `Receita com o ID ${id} Não Foi Encontrada` });
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
            return res.status(200).json(newRecipe);       
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    updateRecipe = async (req, res) => {
        const { id } = req.params;
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
                    id: id
                }
            })
            )
            const updatedRecipe = await Recipe.findOne({
                where: {
                    id: id
                }
            });

            if (!updatedRecipe) {
                return res.status(404).json({ message: `Receita com o ID ${id} não encontrada` });
            }

            
            return res.status(200).json(updatedRecipe);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    deleteRecipe = async (req, res) => {
        const { id } = req.params;
        try {
            const recipe = await Recipe.findOne({
                where: {
                    id: id
                }
            });

            if (!recipe) {
                return res.status(404).json({ message: `Receita com o ID ${id} Não Foi Encontrada` });
            } else {
                await Recipe.destroy({
                    where: {
                        id: id
                    }
                });
                return res.status(200).json({ message: `Receita ${id} deletada`});
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = new RecipeController();

