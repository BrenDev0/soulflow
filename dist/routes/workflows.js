"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const WorkflowsController_1 = __importDefault(require("../controllers/WorkflowsController"));
const router = express_1.default.Router();
const controller = new WorkflowsController_1.default();
router.post("/insert", controller.insterRequest.bind(controller));
router.put("/update-steps", controller.addSteps.bind(controller));
exports.default = router;
