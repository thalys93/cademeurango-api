const User = require('./../models/User.js');
const Sequelize = require('sequelize');

class UserController {

    findUsers = async (req, res) => {
        try {
            const users = await User.findAll();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    findUserByID = async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findOne({
                where: {
                    id: id
                }
            });
            if (!user) {
                return res.status(404).json({ message: `Usuário com o ID ${id} não encontrado` });
            } else {
                return res.status(200).json(user);
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    createUser = async (req, res) => {
        const userData = req.body;
        try {
            const newUser = await User.create(userData);
            return res.status(200).json(newUser);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    updateUser = async (req, res) => {
        const { id } = req.params;
        const newData = req.body;
        try {
            for (const key in newData) {
                if (newData[key] === "" || newData[key] === null || newData[key].trim() === "") {
                    return res.status(400).json({ message: `Não é possível fazer uma requisição com campos vazios` });
                }
            }

            if (!newData) {
                return res.status(400).json({ message: `Você não pode fazer uma requisição vazia` });
            } else {
                await User.update(newData, {
                    where: {
                        id: id
                    }
                });
            }
            const updatedUser = await User.findOne({
                where: {
                    id: id
                }
            });

            if (!updatedUser) {
                return res.status(404).json({ message: `Usuário com o ID ${id} não encontrado` });
            }

            return res.status(200).json(updatedUser);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    deleteUser = async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findOne({
                where: {
                    id: id
                }
            });

            if (!user) {
                return res.status(404).json({ message: `Usuário com o ID ${id} não encontrado` });
            } else {
                await User.destroy({
                    where: {
                        id: id
                    }
                });
            }
            return res.status(200).json({ message: `Usuário com o ID ${id} deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = new UserController();
