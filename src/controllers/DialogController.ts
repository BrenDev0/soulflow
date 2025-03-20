import { Request, Response } from "express";
import { code500 } from "../utils/responses";
import twilio from "twilio";

class DialogController {
    private errorMessage: string;
    private twilioClient;
    constructor() {
        this.errorMessage = code500;
        this.twilioClient = twilio(process.env.TWILIO_ACCOUNT_ID, process.env.TWILIO_AUTH_TOKEN)
    }
    async interact(req: Request, res: Response): Promise<any> {
        try {
            const { client, agent, message } = req.body;
            console.log("interact::::::::::::",req.body)

            await this.twilioClient.messages.create({
                to: "+5219984070079",
                from: "+5215596617293",
                body: message
            })
            
            return res.status(200).json({"message": "Message sent."})
        } catch (error) {
            console.log(error);
            return res.status(500).json({"message": this.errorMessage})
        }
    }
}

export default DialogController;