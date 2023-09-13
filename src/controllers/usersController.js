import Users from './../models/User.js';

class UserController {

    static listUser = (req, res) => {
        Users
            .find()
            .then((users) => { res.status(200).json(users) })
            .catch((err) => { res.status(500).send({ message: `Falha ao Listar Usuário ${err.message}` }) });
    };

    static ListUserById = (req, res) => {
        Users
            .findById(req.params.id)
            .then((user) => {
                if (!user) {
                    res.status(404).send({ message: `Usuário Não Localizado: ${user}` })
                } else 
                res.status(200).json(user)
            })
            .catch((err) => { res.status(500).send({ message: `Falha ao Listar Usuário ${err.message}` }) });
    }


    static createUser = (req, res) => {
        const user = new Users(req.body);
        user
            .save()
            .then((user) => { res.status(201).json(user) })
            .catch((err) => { res.status(400).send({ message: `Falha ao Criar Um Usuário ${err.message}` }) });
    }

    static updateUser = (req, res) => {
        const user = new Users(req.body);
        Users
            .findByIdAndUpdate(req.params.id, user)
            .then((user) => { res.status(200).json(user) })
            .catch((err) => { res.status(400).send({ message: `Falha ao Atualizar Usuário ${err.message}` }) });
    }

    static deleteUser = (req, res) => {
        Users
            .findByIdAndDelete(req.params.id)
            .then((user) => { res.status(200).json(user) })
            .catch((err) => { res.status(400).send({ message: `Falha ao Deletar Usuário ${err.message}` }) });
    }

}

export default UserController;

