const express = require('express');
const RecipeController = require('./../controllers/recipeController.js');

const router = express.Router();

router
    .get("/recipe", (req, res) => RecipeController.findRecipes(req,res))
    .get("/recipe/:id", (req, res) => RecipeController.findRecipeById(req,res))
    .post("/recipe", (req, res) => RecipeController.createRecipe(req,res))
    .put("/recipe/:id", (req, res) => RecipeController.updateRecipe(req,res))
    .delete("/recipe/:id", (req, res) => RecipeController.deleteRecipe(req,res))

module.exports = router;
