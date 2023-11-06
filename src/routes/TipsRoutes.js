const express = require('express');
const TipController = require('../controllers/tipsController.js');

const router = express.Router();

router
    .get("/tip", (req, res) => TipController.findTips(req, res))
    .get("/tip/:UUID", (req, res) => TipController.findTipByUUID(req,res))
    .post("/tip", (req, res) => TipController.createTip(req,res))
    .put("/tip/:UUID", (req, res) => TipController.updateTip(req,res))
    .delete("/tip/:UUID", (req, res) => TipController.deleteTip(req,res))

module.exports = router; 
