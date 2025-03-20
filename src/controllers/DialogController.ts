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
            const twinml = new  twilio.twiml.MessagingResponse();
            twinml.message("this is a test mesaage")
            return res.type('text/xml').sendStatus(twinml.toString());
        } catch (error) {
            console.log(error);
            return res.status(500).json({"message": this.errorMessage})
        }
    }
}

export default DialogController;