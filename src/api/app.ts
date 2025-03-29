import express, { Request, Response, NextFunction} from "express";
import databaseInstance from "../config/database";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config
const dbPromise = databaseInstance.init();
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
        return res.status(500).json({"message": "Connection error"})
    }
})


export default app;