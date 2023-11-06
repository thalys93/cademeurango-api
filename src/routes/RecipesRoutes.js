const express = require('express');
const RecipeController = require('./../controllers/recipeController.js');

const router = express.Router();

router
    .get("/recipe", (req, res) => RecipeController.findRecipes(req,res))
    .get("/recipe/:UUID", (req, res) => RecipeController.findRecipeByUUID(req,res))
    .post("/recipe", (req, res) => RecipeController.createRecipe(req,res))
    .put("/recipe/:UUID", (req, res) => RecipeController.updateRecipe(req,res))
    .delete("/recipe/:UUID", (req, res) => RecipeController.deleteRecipe(req,res))

module.exports = router;
