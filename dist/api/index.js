"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("../config/database"));
const workflows_1 = __importDefault(require("../routes/workflows"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//config
const dbPromise = (0, database_1.default)();
let isInitialized = false;
app.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!isInitialized) {
            yield dbPromise;
            isInitialized = true;
        }
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "message": "Unable to process request at this time." });
    }
}));
app.use("/workflows", workflows_1.default);
exports.default = app;
