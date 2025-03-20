import express from "express";
import webhookWare from "../middleware/webhook";
import DialogController from "../controllers/DialogController";

const router = express.Router();
const controller = new DialogController();

router.use(webhookWare);

router.post("/interact", controller.interact.bind(controller));

export default router;