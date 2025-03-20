import { Request, Response } from "express";
import { code500 } from "../utils/responses";



class DialogController {
    private errorMessage;
    constructor() {
        this.errorMessage = code500;
    }
    async interact(req: Request, res: Response): Promise<any> {
        try {
            const { workflowId } = req.body;
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({"message": this.errorMessage})
        }
    }
}

export default DialogController;