import mongoose, { Document } from 'mongoose';
export interface Block extends Document {
  agent: mongoose.Types.ObjectId
  type: string,
  template: string;
}
  

export interface Agent extends Document {
  apiKey: string;
  variables: string[];
}