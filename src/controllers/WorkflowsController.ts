import { Request, Response } from "express";
import { code500, missingdata400 } from "../utils/responses";
import Workflows from "../models/Workflows";

class WorkflowsController {
    private errorMessage;
    private missingDataMessage;

    constructor() {
        this.errorMessage = code500;
        this.missingDataMessage = missingdata400;
    }

    async insterRequest(req: Request, res: Response): Promise<any> {
        try {
            const { name } = req.body;

            if(!name) {
                return res.status(400).json({"message": this.missingDataMessage})
            }

            const newWorkflow = new Workflows({
                name: name
            })

            await newWorkflow.save();
            return res.status(200).json({"message": "Workflow created"})
        } catch (error) {
            console.log(error);
            return res.status(500).json({"message": this.errorMessage});
        }
    }
}

export default WorkflowsController;