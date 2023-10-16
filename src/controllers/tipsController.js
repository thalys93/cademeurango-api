// import Tips from './../models/Tip.js';

// class TipController {

//     static listTips = (req, res) => {
//         Tips
//             .find()
//             .then((tips) => { res.status(200).json(tips) })
//             .catch((err) => { res.status(500).send({ message: `Falha ao Listar Dicas ${err.message}` }) });
//     };

//     static ListTipById = (req, res) => {
//         Tips
//             .findById(req.params.id)
//             .then((tip) => {
//                 if (!tip) {
//                     res.status(404).send({ message: `Dica Não Localizada: ${tip}` })
//                 } else
//                     res.status(200).json(tip)
//             })
//             .catch((err) => { res.status(400).send({ message: `Falha ao Localizar Dica ${err.message}` }) });
//     }

//     static createtip = (req, res) => {
//         const tip = new Tips(req.body);
//         tip
//             .save()
//             .then((tip) => { res.status(201).json(tip) })
//             .catch((err) => { res.status(400).send({ message: `Falha ao Criar Uma Dica ${err.message}` }) });
//     }

//     static updatetip = (req, res) => {
//         const tip = new Tips(req.body);
//         Tips
//             .findByIdAndUpdate(req.params.id, tip)
//             .then((tip) => { res.status(200).json(tip) })
//             .catch((err) => { res.status(400).send({ message: `Falha ao Atualizar Dica ${err.message}` }) });
//     }

//     static deletetip = (req, res) => {
//         Tips
//             .findByIdAndDelete(req.params.id)
//             .then((tip) => { res.status(200).json(tip) })
//             .catch((err) => { res.status(400).send({ message: `Falha ao Deletar Dica ${err.message}` }) });
//     }

// }

// export default TipController;

