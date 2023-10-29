const express = require('express');
const IngredientController = require('./../controllers/ingredientController.js');

const router = express.Router();

router
    .get("/ingredient", (req, res) => IngredientController.findIngredients(req,res))
    .get("/ingredient/:id", (req, res) => IngredientController.findIngredientById(req,res))
    .post("/ingredient", (req, res) => IngredientController.createIngredient(req,res))
    .put("/ingredient/:id", (req, res) => IngredientController.updateIngredient(req,res))
    .delete("/ingredient/:id", (req, res) => IngredientController.deleteIngredient(req,res))

module.exports = router;
