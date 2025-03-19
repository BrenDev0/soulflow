import mongoose, { Schema } from "mongoose";
import { Block } from "../interface/mongo";

// Define an enum for action types
const ActionType = ["set_variable", "api_call", "verify_value"] as const;

const BlocksSchema = new Schema<Block>({
  type: { type: String, required: true }, // Type of block (e.g., message, decision)
  content: { type: String, required: true }, // The main content (e.g., message text)
  
  action: {
    type: String, 
    enum: ActionType, // The type of action: set_variable, api_call, or verify_value
    required: false,
    default: null 
  },
  
  // Parameters for API calls, variable setting, or verification
  params: { type: Schema.Types.Mixed, default: null }, // Can store params like API URL, variable name, etc.

  // Conditions for verification (used if action = 'verify_value')
  conditions: { type: Schema.Types.Mixed, default: null },

  // Variables to be set (used if action = 'set_variable')
  variable: { type: String, required: false }, // Variable name to be set
  value: { type: Schema.Types.Mixed, required: false } // Value to be set to the variable

});

const Blocks = mongoose.model<Block>('Blocks', BlocksSchema);
export default Blocks;
