import mongoose, { Schema } from "mongoose";
import { Workflow } from "../interface/mongo";
import Blocks  from "./Blocks";

const WorkflowSchema = new Schema<Workflow>({
    name: { type: String, required: true },
    steps: {type: [Blocks], default: []},
    variables: {type: Schema.Types.Mixed, default: []}
});

const Workflows = mongoose.model<Workflow>('Workflows', WorkflowSchema);
export default Workflows