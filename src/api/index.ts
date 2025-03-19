import express, { Request, Response, NextFunction} from "express";
import database from "../config/database";
import workflowsRouter from "../routes/workflows";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config
const dbPromise = database();
let isInitialized = false;
app.use(async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        if(!isInitialized) {
            await dbPromise;
            isInitialized = true;
        }
    
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({"message": "Unable to process request at this time."})
    }
})

app.use("/blocks", workflowsRouter);

export default app;