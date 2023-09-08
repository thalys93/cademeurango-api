import express from 'express';
import RecipeController from './../controllers/recipeController.js';

const router = express.Router();

router
    .get("/api/recipe", RecipeController.listRecipes)
    .get("/api/recipe/:id", RecipeController.ListRecipeById)
    .post("/api/recipe", RecipeController.createRecipe)
    .put("/api/recipe/:id", RecipeController.updateRecipe)
    .delete("/api/recipe/:id", RecipeController.deleteRecipe);

export default router;
