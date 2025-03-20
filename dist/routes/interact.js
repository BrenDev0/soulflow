"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const webhook_1 = __importDefault(require("../middleware/webhook"));
const DialogController_1 = __importDefault(require("../controllers/DialogController"));
const router = express_1.default.Router();
const controller = new DialogController_1.default();
router.use(webhook_1.default);
router.post("/interact", controller.interact.bind(controller));
exports.default = router;
