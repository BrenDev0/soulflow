import mongoose from 'mongoose';

class Database {
     private static instance: Database;
     private databaseConnected: boolean;

     constructor() {
        this.databaseConnected = false;
     }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
          }

        return Database.instance;
    }

    public async init(): Promise<void> {
        if(!this.databaseConnected) {
            await this.connect();
            this.databaseConnected = true;
        }

        return;
    }

    private async connect(): Promise<void> {
        try {
            const mongoUrl: string | undefined = process.env.MONGO_URL
            if(!mongoUrl){
                throw new Error("Variables error");
            }
            
            await mongoose.connect(mongoUrl)
            console.log("Database connected")
            return
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }
}

const databaseInstance = Database.getInstance();
export default databaseInstance;