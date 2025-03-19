"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responses_1 = require("../utils/responses");
const Workflows_1 = __importDefault(require("../models/Workflows"));
class WorkflowsController {
    constructor() {
        this.errorMessage = responses_1.code500;
        this.missingDataMessage = responses_1.missingdata400;
    }
    insterRequest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, variables = {} } = req.body;
                if (!name) {
                    return res.status(400).json({ "message": this.missingDataMessage });
                }
                const newWorkflow = new Workflows_1.default({
                    name: name,
                    variables: variables
                });
                yield newWorkflow.save();
                return res.status(201).json({ "message": "Workflow created" });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ "message": this.errorMessage });
            }
        });
    }
    addSteps(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { workflowId, content, type, action = null } = req.body;
                const block = {
                    type: type,
                    content: content,
                    action: action
                };
                const workflow = yield Workflows_1.default.findById(workflowId);
                if (!workflow) {
                    return res.status(404).json({ "message": "workflow not found" });
                }
                workflow.steps.push(block);
                yield workflow.save();
                return res.status(200).json({ "message": "Workflow Updated." });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ "message": this.errorMessage });
            }
        });
    }
}
exports.default = WorkflowsController;
