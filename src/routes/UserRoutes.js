const express = require('express');
const UserController = require('./../controllers/usersController.js');

const router = express.Router();

router
    .get("/users", (req, res) => UserController.findUsers(req, res))
    .get("/users/:UUID", (req, res) => UserController.findUserByUUID(req, res))
    .post("/users", (req, res) => UserController.createUser(req, res))
    .put("/users/:UUID", (req, res) => UserController.updateUser(req, res))
    .delete("/users/:UUID", (req, res) => UserController.deleteUser(req, res));

module.exports = router;
