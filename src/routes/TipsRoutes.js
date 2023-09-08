import express from 'express';
import TipController from './../controllers/tipsController.js';

const router = express.Router();

router
    .get("/api/tip", TipController.listTips)
    .get("/api/tip/:id", TipController.ListTipById)
    .post("/api/tip", TipController.createtip)
    .put("/api/tip/:id", TipController.updatetip)
    .delete("/api/tip/:id", TipController.deletetip);

export default router;
