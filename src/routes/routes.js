import express from "express";
import books from "./BooksRoutes.js";
import tips from "./TipsRoutes.js";
import users from "./UserRoutes.js";
import recipes from "./RecipesRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("API Funcional!");
    })

    app.use(
        express.json(),
        books,
        tips,
        users,
        recipes        
    )
}

export default routes