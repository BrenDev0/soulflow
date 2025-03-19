import mongoose, { Schema } from "mongoose";
import { Block } from "../interface/mongo";

const BlocksSchema = new Schema<Block>({
    step: { type: Number, required: true },
    content: { type: String, required: true }
});

const Blocks = mongoose.model<Block>('Blocks', BlocksSchema);
export default Blocks