import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema(
    {
        id: { type: String },
        title: { type: String, required: true },
        description: { type: String, required: true },
        imageLink: { type: String, required: true },
        ingredients: {            
            name: { type: String, required: true },
            quantity: { type: String, required: true },
        },
        instructions: {
            description: { type: String, required: true },            
        }
    },
);

const Recipes = mongoose.model("Recipes", RecipeSchema);
export default Recipes;