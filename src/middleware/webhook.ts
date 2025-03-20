import { Request, Response, NextFunction } from 'express';

const webhookWare = async(req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        console.log(req.body);
        const agent = req.body.To;
        const client = req.body.From;
        const message = "this is a test message";
        req.body = {
            agent,
            client,
            message
        }
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({"message": "Unable to complete request at this time"});
    }
}

export default webhookWare