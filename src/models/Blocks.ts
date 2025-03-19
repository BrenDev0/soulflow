import mongoose, { Schema } from "mongoose";
import { Block } from "../interface/mongo";

const BlocksSchema = new Schema<Block>({
    content: { type: String, required: true }
});

const Blocks = mongoose.model<Block>('Blocks', BlocksSchema);
export default Blocks