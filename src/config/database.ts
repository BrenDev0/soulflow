import mongoose from 'mongoose';

const database = async (): Promise<void> => {
    try {
        const mongoUrl: string | undefined = process.env.MONGO_URL
        if(!mongoUrl){
            throw new Error("Variables error");
        }
        if (mongoose.connection.readyState === 1) {
            console.log("Database is already connected");
            return;
        }
        await mongoose.connect(mongoUrl)
        console.log("Database connected")
        return
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default database;