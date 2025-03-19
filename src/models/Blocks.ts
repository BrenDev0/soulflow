import mongoose, { Schema } from "mongoose";
import { Block } from "../interface/mongo";

// Define an enum for action types
const ActionType = ["set_variable", "api_call", "verify_value"] as const;

const BlocksSchema = new Schema<Block>({
  type: { type: String, required: true },
  content: { type: String, required: true },
  
  action: {
    type: String, 
    enum: ActionType, 
    required: false,
    default: null 
  },
  
  params: { type: Schema.Types.Mixed, default: null }, 
 
  conditions: { type: Schema.Types.Mixed, default: null },

  variable: { type: String, required: false }, 
  value: { type: Schema.Types.Mixed, required: false } 

});

const Blocks = mongoose.model<Block>('Blocks', BlocksSchema);
export default Blocks;
