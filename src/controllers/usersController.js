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

    findUserByUUID = async (req, res) => {
        const { UUID } = req.params;
        try {
            const user = await User.findOne({
                where: {
                    UUID: UUID
                }
            });
            if (!user) {
                return res.status(404).json({ message: `Usuário com o UUID ${UUID} não encontrado` });
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
            return res.status(200).json({status: 200 , message: "Usuário criado com sucesso!" , data: newUser});
        } catch (error) {
            return res.status(500).json({status: 500, message: "Erro ao criar usuário!" , data: error.message});
        }
    }

    updateUser = async (req, res) => {
        const { UUID } = req.params;
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
                        UUID: UUID
                    }
                });
            }
            const updatedUser = await User.findOne({
                where: {
                    UUID: UUID
                }
            });

            if (!updatedUser) {
                return res.status(404).json({ message: `Usuário com o UUID ${UUID} não encontrado` });
            }

            return res.status(200).json(updatedUser);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    deleteUser = async (req, res) => {
        const { UUID } = req.params;
        try {
            const user = await User.findOne({
                where: {
                    UUID: UUID
                }
            });

            if (!user) {
                return res.status(404).json({ message: `Usuário com o UUID ${UUID} não encontrado` });
            } else {
                await User.destroy({
                    where: {
                        UUID: UUID
                    }
                });
            }
            return res.status(200).json({ message: `Usuário com o UUID ${UUID} deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = new UserController();
