import express from "express";
import WorkflowsController from "../controllers/WorkflowsController";

const router = express.Router();
const controller = new WorkflowsController();

router.post("/insert", controller.insterRequest.bind(controller));
router.post("/block", controller.getStep.bind(controller));


router.put("/update-steps", controller.addSteps.bind(controller));

export default router;