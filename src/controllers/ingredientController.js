const Ingredient = require('./../models/Ingredient.js');

class IngredientController {    
    findIngredients = async (req, res) => {
        try {
            const ingredients = await Ingredient.findAll();
            return res.status(200).json(ingredients);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    findIngredientById = async (req, res) => {
        const { id } = req.params;
        try {
            const ingredient = await Ingredient.findOne({
                where: {
                    id: id
                }
            });
            if (!ingredient) {
                return res.status(404).json({ message: `Ingrediente com o ID ${id} Não Foi Encontrado` });
            } else {
                return res.status(200).json(ingredient);
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    createIngredient = async (req, res) => {
        const ingredientData = req.body;
        try {
            const newIngredient = await Ingredient.create(ingredientData);
            return res.status(200).json(newIngredient);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    updateIngredient = async (req, res) => {
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
                await Ingredient.update(newData, {
                    where: {
                        id: id
                    }
                })
            )
                const updatedIngredient = await Ingredient.findOne({
                    where: {
                        id: id
                    }
                });
                
                if(!updatedIngredient) {
                    return res.status(404).json({ message: `Ingrediente com o ID ${id} Não Foi Encontrado` });
                }
                return res.status(200).json(updatedIngredient);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    deleteIngredient = async (req, res) => {
        const { id } = req.params;
        try {
            const ingredient = await Ingredient.findOne({
                where: {
                    id: id
                }
            });
            if (!ingredient) {
                return res.status(404).json({ message: `Ingrediente com o ID ${id} Não Foi Encontrado` });
            } else {
                await Ingredient.destroy({
                    where: {
                        id: id
                    }
                });
                return res.status(200).json({ message: `Ingrediente com o ID ${id} Foi Deletado` });
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = new IngredientController();