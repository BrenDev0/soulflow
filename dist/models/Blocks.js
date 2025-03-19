"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// Define an enum for action types
const ActionType = ["set_variable", "api_call", "verify_value"];
const BlocksSchema = new mongoose_1.Schema({
    type: { type: String, required: true }, // Type of block (e.g., message, decision)
    content: { type: String, required: true }, // The main content (e.g., message text)
    action: {
        type: String,
        enum: ActionType, // The type of action: set_variable, api_call, or verify_value
        required: false,
        default: null
    },
    // Parameters for API calls, variable setting, or verification
    params: { type: mongoose_1.Schema.Types.Mixed, default: null }, // Can store params like API URL, variable name, etc.
    // Conditions for verification (used if action = 'verify_value')
    conditions: { type: mongoose_1.Schema.Types.Mixed, default: null },
    // Variables to be set (used if action = 'set_variable')
    variable: { type: String, required: false }, // Variable name to be set
    value: { type: mongoose_1.Schema.Types.Mixed, required: false } // Value to be set to the variable
});
const Blocks = mongoose_1.default.model('Blocks', BlocksSchema);
exports.default = Blocks;
