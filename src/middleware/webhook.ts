import { Request, Response, NextFunction } from 'express';

const webhookWare = async(req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const agent = req.body.to;
        const client = req.body.from;
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