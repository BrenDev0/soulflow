import { Request, Response, NextFunction } from 'express';

const webhookWare = async(req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        console.log(req.body);
        return res.status(200).send();
        
        return
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({"message": "Unable to complete request at this time"});
    }
}

export default webhookWare