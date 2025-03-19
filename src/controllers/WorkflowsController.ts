import { Request, Response } from "express";
import { code500, missingdata400 } from "../utils/responses";
import Workflows from "../models/Workflows";
import { Block } from "../interface/mongo";

class WorkflowsController {
    private errorMessage;
    private missingDataMessage;

    constructor() {
        this.errorMessage = code500;
        this.missingDataMessage = missingdata400;
    }

    async insterRequest(req: Request, res: Response): Promise<any> {
        try {
            const { name, variables=[] } = req.body;

            if(!name) {
                return res.status(400).json({"message": this.missingDataMessage})
            }

            const newWorkflow = new Workflows({
                name: name,
                variables: variables 
            })

            await newWorkflow.save();
            return res.status(201).json({"message": "Workflow created"})
        } catch (error) {
            console.log(error);
            return res.status(500).json({"message": this.errorMessage});
        }
    }

    async addSteps(req: Request, res: Response): Promise<any> {
        try {
            const { workflowId, content, type, action=null } = req.body;
            const block: Block = {
                type: type,
                content: content,
                action: action
            };

            const workflow = await Workflows.findById(workflowId);
            if(!workflow) {
                return res.status(404).json({"message": "workflow not found"});
            }

            workflow.steps.push(block);

            await workflow.save();

            return res.status(200).json({"message": "Workflow Updated."});
        } catch (error) {
            console.log(error);
            return res.status(500).json({"message": this.errorMessage});
        }
    }
}

export default WorkflowsController;