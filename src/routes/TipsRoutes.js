const express = require('express');
const TipController = require('../controllers/tipsController.js');

const router = express.Router();

router
    .get("/tip", (req, res) => TipController.findTips(req, res))
    .get("/tip/:id", (req, res) => TipController.findTipByID(req,res))
    .post("/tip", (req, res) => TipController.createTip(req,res))
    .put("/tip/:id", (req, res) => TipController.updateTip(req,res))
    .delete("/tip/:id", (req, res) => TipController.deleteTip(req,res))

module.exports = router; 
