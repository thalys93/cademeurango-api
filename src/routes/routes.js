import express from "express";
import tips from "./TipsRoutes.js";
import users from "./UserRoutes.js";
import recipes from "./RecipesRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("API Funcional!");
    })

    app.use(
        express.json(),
        tips,
        users,
        recipes        
    )
}

export default routes