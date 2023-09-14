import mongoose from "mongoose";

const IngredientSchema = new mongoose.Schema(
    {
        id: String,
        name: { type: String, required: true },
        quantity: { type: String, required: true },
    },
);

const InstructionSchema = new mongoose.Schema(
    {
        id: String,        
        description: { type: String, required: true },
    },
);

const Ingredient = mongoose.model("Ingredients", IngredientSchema);
const Instruction = mongoose.model("Instructions", InstructionSchema);

export { IngredientSchema , InstructionSchema };    