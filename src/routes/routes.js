const express = require("express");
const tips = require("./TipsRoutes.js");
const users = require("./UserRoutes.js");
const recipes = require("./RecipesRoutes.js");
const path = require("path");

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).sendFile(path.join(__dirname , '..' ,  'views' , "index.html"));
    });

    app.use(
        express.json(),
        // tips,
        // users,
        // recipes
    );
};

module.exports = routes;
