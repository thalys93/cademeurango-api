const express = require('express');
const UserController = require('./../controllers/usersController.js');

const router = express.Router();

router
    .get("/users", (req, res) => UserController.findUsers(req, res))
    .get("/users/:id", (req, res) => UserController.findUserByID(req, res))
    .post("/users", (req, res) => UserController.createUser(req, res))
    .put("/users/:id", (req, res) => UserController.updateUser(req, res))
    .delete("/users/:id", (req, res) => UserController.deleteUser(req, res));

module.exports = router;
