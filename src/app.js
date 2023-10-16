const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes.js");
const database = require('./database/migrations/index.js');

const app = express();

app.use(express.json());
app.use(express.static('public'))
app.use(cors());
routes(app);

module.exports = app;
