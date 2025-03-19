import { Request, Response } from "express";
import { code500 } from "../utils/responses";

class BlocksController {
    private errorMessage;

    constructor() {
        this.errorMessage = code500;
    }

    async insterRequest(req: Request, res: Response): Promise<any> {
        try {
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({"message": this.errorMessage});
        }
    }
}