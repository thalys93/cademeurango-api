const express = require("express");

// const tips = require("./TipsRoutes.js");
// const users = require("./UserRoutes.js");
// const recipes = require("./RecipesRoutes.js");

const path = require("path");
const authMiddleware = require("../auth/middlewares/Auth.js");

const routes = (app) => {

    app.route('/login.html').get((req, res) => {
        res.status(200).sendFile(path.join(__dirname, '..', 'views', "login.html"));
    })
    app.use('/', authMiddleware)

    app.route('/').get((req, res) => {
        res.status(200).sendFile(path.join(__dirname, '..', 'views', "index.html"));
    });

    app.use(
        express.json(),
        // tips,
        // users,
        // recipes
    );
};

module.exports = routes;
