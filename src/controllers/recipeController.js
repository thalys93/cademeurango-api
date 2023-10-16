// import Recipes from './../models/Recipe.js';

// class RecipeController {

//     static listRecipes = (req, res) => {
//         Recipes
//             .find()
//             .then((recipes) => { res.status(200).json(recipes) })
//             .catch((err) => { res.status(500).send({ message: `Falha ao Listar Receitas ${err.message}` }) });
//     };

//     static ListRecipeById = (req, res) => {
//         Recipes
//             .findById(req.params.id)
//             .then((recipe) => {
//                 if (!recipe) {
//                     res.status(404).send({ message: `Receita Não Localizada: ${recipe}` })
//                 } else
//                     res.status(200).json(recipe)
//             })
//             .catch((err) => { res.status(400).send({ message: `Falha ao Localizar Receita ${err.message}` }) });
//     }

//     static createRecipe = (req, res) => {
//         const recipe = new Recipes(req.body);
//         recipe
//             .save()
//             .then((recipe) => { res.status(201).json(recipe) })
//             .catch((err) => { res.status(400).send({ message: `Falha ao Criar Uma Receita ${err.message}` }) });
//     }

//     static updateRecipe = (req, res) => {
//         const recipe = new Recipes(req.body);
//         recipe
//             .findByIdAndUpdate(req.params.id, recipe)
//             .then((recipe) => { res.status(200).json(recipe) })
//             .catch((err) => { res.status(400).send({ message: `Falha ao Atualizar Receita ${err.message}` }) });
//     }

//     static deleteRecipe = (req, res) => {
//         Recipes
//             .findByIdAndDelete(req.params.id)
//             .then((recipe) => { res.status(200).json(recipe) })
//             .catch((err) => { res.status(400).send({ message: `Falha ao Deletar Receita ${err.message}` }) });
//     }

// }

// export default RecipeController;

