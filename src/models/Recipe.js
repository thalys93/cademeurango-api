import mongoose from "mongoose";
import { IngredientSchema , InstructionSchema } from "./RecipeUtils.js";

const RecipeSchema = new mongoose.Schema(
    {
        id: { type: String },
        title: { type: String, required: true },
        description: { type: String, required: true },
        imageLink: { type: String, required: true },
        ingredients: [IngredientSchema],
        instructions: [InstructionSchema],
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
        }        
    },
);


const Recipes = mongoose.model("Recipes", RecipeSchema);
export default Recipes;